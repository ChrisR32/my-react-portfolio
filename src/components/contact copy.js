import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

const images2 = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/110",
    "https://via.placeholder.com/120",
    "https://via.placeholder.com/100"
  ];

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      photoIndexTwo: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, photoIndexTwo, isOpen } = this.state;

    return (
      <div>
        <button className="button-one" type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
   

        <button className="button-two" type="button" onClick={() => this.setState({ isOpen: true })}>
        Open Lightbox 2
        </button>

        {isOpen && (
        <Lightbox
            mainSrc={images2[photoIndexTwo]}
            nextSrc={images2[(photoIndexTwo + 1) % images2.length]}
            prevSrc={images2[(photoIndexTwo + images2.length - 1) % images2.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
            this.setState({
                photoIndexTwo: (photoIndexTwo + images2.length - 1) % images2.length
            })
            }
            onMoveNextRequest={() =>
            this.setState({
                photoIndexTwo: (photoIndexTwo + 1) % images2.length
            })
            }
        />
        )}
        </div>
    );
  }
}


export default Contact;