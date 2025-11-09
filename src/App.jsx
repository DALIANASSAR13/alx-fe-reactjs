// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// function App() {
//   return (
//     <div className="App">
//       <WelcomeMessage />
//       {/* Other content can go here */}
//     </div>
//   );
// }

import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';



function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

      {/* User Profile Component */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;


