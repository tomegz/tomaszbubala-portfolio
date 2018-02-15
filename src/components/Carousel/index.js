import React, { Component } from "react";
import arrowSrc from "./img/arrow.svg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
    this.changeImage = this.changeImage.bind(this);
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  changeImage() {
    const current = this.state.activeIndex;
    const activeIndex = this.props.images.length - 1 === current ? 0 : current + 1;
    this.setState({ activeIndex });
  }
  handleLoaded(index) {
    if(index === 0) {
      const activeIndex = index;
      this.setState({ activeIndex });
    }
  }
  render() {
    const { state } = this;
    return (
      <div>
        <a className="carousel-content" onClick={this.changeImage} tabIndex={-1} role="button">
          {this.props.images.map((img, i) => {
            return (
              <img 
                key={i}
                src={img.src} 
                alt={img.description}
                onLoad={() => this.handleLoaded(i)}
                className={state.activeIndex === i ? "active" : ""}
                draggable={false}
              />
            );
          })}
          <span className="arrow">
            <img src={arrowSrc} alt="Arrow icon" />
          </span> 
        </a>
      </div>
    );
  }
}

export default Carousel;