import React, { Component } from 'react';
import overlayImg from "../../Media/FIBROFAYAM_Kataloq-2023-albomnaya.png";
import './Moveon.css'

class Moveon extends Component {
  state = {
    mouseX: 0, // Initial mouse X position
    mouseY: 0, // Initial mouse Y position
  };

  handleMouseMove = (e) => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  render() {
    const { mouseX, mouseY } = this.state;

    // Calculate the parallax effect for both horizontal and vertical directions
    const parallaxX = (mouseX - window.innerHeight / 2) / 30;
    const parallaxY = (mouseY - window.innerWidth / 2) / 30;

    return (
      <div
        onMouseMove={this.handleMouseMove}
        className="parallax-container"
        style={{
         
        }}
      >
        <div
          className="centered-image"
          style={{
              transform: `translate(-50%, -50%) translate(${parallaxX}px, ${parallaxY}px)`,
              position: 'absolute',
              top: '50%',
              left: '50%',
            }}
        >
          <img src={overlayImg} alt="Parallax Image" className="parallax-image" />
           
        </div>
      </div>
    );
  }
}

export default Moveon;
