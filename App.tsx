import * as React from 'react';
import './style.css';
import Greet from './Greet';
import Welcome from './Welcome';

export default function App() {
  return (
    <div>
       <Greet name='Hanmant Shinde'>
         <p>This is a child tag</p>
         <p>This is next</p>
       </Greet>
       <Welcome />
    </div>
  );
}
