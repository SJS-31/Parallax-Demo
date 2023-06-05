import * as React from "react";
import black from '../img/black.jpg'
import purple_space from '../img/purple_space.jpg'
import blue_space from '../img/blue_space.jpg'

import Atropos from 'atropos/react';

export default function App () {
  return (
    <div id="app">
      <Atropos
      className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        
  <h1 className="h1">WEB3 SUMMIT</h1>
        <button id="btn" onmousemove="MouseMove(event)"
        onmouseleave="MouseLeave(event)">Register</button>
      
      </Atropos>
    </div>
  )
}