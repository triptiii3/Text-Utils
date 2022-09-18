
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const mode1 = ()=>{
        setMode('light');
       document.body.style.backgroundColor = '#FFDB4C';
       showAlert("Mode 1 has been enabled", "success");}
  const mode2 = ()=>{
       setMode('dark');
      document.body.style.backgroundColor = '#FF0063';
      
      showAlert("Mode 2 has been enabled", "success");}
  
  const mode3 = ()=>{
        setMode('dark');
       document.body.style.backgroundColor = '#125b50';
       showAlert("Mode 3 has been enabled", "success");}
  const mode4 = ()=>{
        setMode('dark');
       document.body.style.backgroundColor = '#093918';
       showAlert("Mode 4 has been enabled", "success");}
  
  const mode5 = ()=>{
        setMode('dark');
       document.body.style.backgroundColor = '#050A30';
       document.body.style.Color='#fff'
       showAlert("Mode 5 has been enabled", "success");}
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
      // document.title="TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title="Install TextUtils now"
      // }, 2000);
      // setInterval(() => {
      //   document.title="TextUtils is free!"
      // }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title="TextUtils - Light Mode"
    }
  }
  return (
  
    <>
    
    <Navbar title="Textutils" aboutus="About" mode={mode} toggleMode={toggleMode} mode1={mode1}  mode2={mode2} mode3={mode3} mode4={mode4} mode5={mode5}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/></div>
    </>

  );
}

export default App;
