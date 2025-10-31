import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      {/* Other content can go here */}
    </div>
  );
}

import WelcomeMessage from './components/WelcomeMessage';


export default App
