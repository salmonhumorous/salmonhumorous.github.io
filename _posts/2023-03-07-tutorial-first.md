---
layout : post
title : "[ Tutorial ] How to design a sound generator that can create beats in a web browser procedurally"

---


Hello, in this tutorial we'll design a sound generator that can create music in a web browser randomly. Follow along, if it sound fun to you. We will employ **p5js** and **tone.js**, two Javascript libraries, for this work. We are just going to scrape the surface of these libraries' capabilities in this lesson, though it is worthwhile to read through their documentation ( [p5js](https://p5js.org/reference/), [tone.js](https://tonejs.github.io/docs/14.7.77/index.html) ).
<br>Also, I'll start by assuming you are familiar with Javascript and how to use these libraries.


My curiosity has recently been piqued by the practise of creating music, specifically music synthesis. I was looking for a way to synthesise drum sounds on the internet when I discovered ADSR, a clever method for modulating sounds, to create  a wide range of instruments.  
Watch this [video](https://www.youtube.com/watch?v=wUSva_BnedA), by CodingTrain for more information on ADSR in detail.  I will try to explain it briefly here.
<br>ADSR is an amplitude or volume envelope used to modify the contour of sound.  An ADSR envelope features these four stages.
* Attack: duration till peak volume is reached;
* Decay: the period of time during which a volume decreases after peaking;
* Sustain: The level at which the sound will be maintained following the decay phase;
* Release: the duration it takes for sound to end completely;

We may produce a broad variety of sounds with different tonal qualities and dynamic characteristics by adjusting these 4 factors. Regarding drum sounds, I found out that the attack and decay times of percussion instruments are quite brief and have a low level of sustain. These characteristics will be used by us to shape our instruments.

<br>

In order to create a sound generator that can procedurally create random music that is not just noise, we will need to figure out some things,
* First and foremost, we will require a sound-producing instrument.  Also, in order to create a sound machine, we will need a collection of instruments.
* Second, this sound generator should produce sound according to the BPM set by us.
* Finally, the pattern or sound that is produced should be random.

<br>
There are many ways to create sound using Tone.js, but we'll utilise `Tone.Synth()` to create an oscillator that can create various sound waves. When initiating we can also define parameters for a ADSR envelope to apply to the sound wave. Hence, we can utilise this method to make the instrument we want like this,  
```js
let filter = new Tone.AutoFilter().start().toMaster();
let instrument = new Tone.Synth({
    oscillator: {
      type: "sine" 
    },
    envelope: { 
      attack: 0.001,
      decay: 0.005,
      sustain: 0,
      release: 0.005
    }
  }).connect(filter);
 ```
In the above code, we are connecting this synth to a low pass filter, which is then connected to the master output (ex. speakers). In tone.js, we can connect different filters and instruments together, sort of analog way using `.connect` method.

Now, we can use the `instrument.triggerAttackRelease(freq, duration);` command to play sound using this instrument. We send in two arguments, frequency or the note we want to play and the period for which we want to play.
<br>As of now, we have successfully produced an instrument that can play any note.
To build a machine, all that has to be done is to create other instruments with various envelope parameters using `Tone.synth()`.

As per our next criterion, we must put logic in place to have this machine play music at random and in accordance with a bpm.
We will make use of `Tone.Transport` to accomplish this. Transport is a core feature of Tone.js that provide a timeline for scheduling events at precise time.  It enables us to control the tempo, switch between different time signatures, loop a piece, synchronise different parts of our composition, and many other things, which you can read in detail in the [docs](https://tonejs.github.io/docs/14.7.77/Transport).  

Each of our instruments will be programmed to play a note at predetermined intervals using the transport system. I won't go into depth regarding the structure of our composition, but it will have a 4/4 beat, which means there will be 4 notes in each measure.
<br>This sketch shows how instrument and transport system works,

<br>![Rough sketch of instrument and transport system](/assets/img/blog/tutorial-first-1.jpg "Rough sketch")
<br>
<br>But, we still need to include some *randomness* in the mix; otherwise, all the instruments will play at the same time throughout each interval, creating the same loop.
<br>Thus,  we will give each trigger event a probability so that, at each interval, each instrument will have a chance of being triggered or not. As time passes, this will lead to random patterns, as seen in the illustration below,
<br>
<br>![Sketch showing beat structure](/assets/img/blog/tutorial-first-2.jpg "Sketch showing beat structure")

<br>In code, we can implement something like this,
```js
Tone.Transport.scheduleRepeat(() => {
  { if (random(1) < 0.5) {
    instrument.triggerAttackRelease("C4", "8n");
  } }, 1 / 4);
Tone.Transport.start();
// Set the tempo
Tone.Transport.bpm.value = 180;

```


We accomplished what we set out to do, but there is still much room for improvement. For instance, we may devise a function to provide randomization while maintaining the composition's overall structure. You can also use logic to progressively alter the notes that different instruments play over time.
<br>You can check my implementation and full code on [P5js Editor](https://editor.p5js.org/salmonhumorous/sketches/7RbaJl2F2). If you create something cool with this, don't forget to share it with me. You can find many more ways to experiment with sounds in the browser by looking at Examples in P5js and Tone.js , be sure to check that out as well.
