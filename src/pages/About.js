import React, { Component } from 'react';
import "./About.css";
import prof from "../assets/Pic_404.jpg";  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={prof}
            alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title" class="mya_text">   Bereket Tenaye</div>
        <div className="brief_description" class="my_text">
           Hello there! I am a rising senior studying electrical engineering at the 
          University of Minnesota-Twin Cities. I live in Saint Paul, Minnesota.
          </div>
      </div>
    </div>
  </div>
    )
  }
}

          
       