import React, { useState } from 'react'; 
const Toogle = () => { const [darkMode, setDarkMode] = useState(false); 
    const toggleDarkMode = () => { setDarkMode(!darkMode); }; 
    return ( <div style={{ backgroundColor: darkMode ? '#333' : '#FFF', color: darkMode ? '#FFF' : '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
    <button onClick={toggleDarkMode}> Switch to {darkMode ? 'Light' : 'Dark'} Mode </button> </div> ); }; 
    export default Toogle;