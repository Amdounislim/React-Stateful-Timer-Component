import React from 'react'



export default function Timer({t, lapse, running}) {
let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let secs = Math.floor((t % (1000 * 60)) / 1000);
if (hours<10) {hours="0"+hours}
if (mins<10) {mins="0"+mins}
if (secs<10) {secs="0"+secs}
  return (

              <h1>{hours}:{mins}:{secs}</h1>

  )
}
