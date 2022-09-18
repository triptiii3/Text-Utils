import React from 'react'
import PropTypes from 'prop-types'
import pic1 from "../1.png"
import pic2 from "../2.png"
import pic3 from "../3.png"
import pic4 from "../4.png"
import pic5 from "../5.png"
import icon from "../icontext.png"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <img src={icon} className="icon"></img>
    <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      </div>
      <div className='row'>
       <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Select your mode :</label>
      <img onClick={props.mode1} src={pic1} className='colorpalletes'/>
      <img onClick={props.mode2}  src={pic2} className='colorpalletes'/>
      <img onClick={props.mode3} src={pic3} className='colorpalletes'/>
      <img onClick={props.mode4} src={pic4} className='colorpalletes'/>
      <img onClick={props.mode5} src={pic5} className='colorpalletes'/>
      
      </div>
      

 
  
</div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>

</nav></>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    aboutus:PropTypes.string
}