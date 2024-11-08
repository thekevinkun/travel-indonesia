import "./watchMoments.css";

import { useState, useRef } from "react";

import { images, video } from "../../constants";

import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

const WatchMoments = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  return (
    <section id="moments" className="moments section__padding">
        <h2>
          YOU CAN <span><img src={images.momentsImg2} alt="Indonesia nature"/></span>{" "} 
          WATCH THE BEST MOMENTS FROM <span><img src={images.momentsImg1} alt="Indonesia nature"/></span> 
          {" "}TRAVELS
        </h2>

        <div className="moments__content">
          <div className="moments__content-image">
            <div className="content-image">
              <img src={images.momentsVideoImg} alt="Travel video" />
            </div>

            <a href="#video">
              View Other Video
            </a>
          </div>

          <div className="moments__content-video">
            <video
              ref={videoRef}
              loop
              controls={false}
              playsInline>
              <source src={video} type="video/mp4" />
            </video>

            <div className="content-video_overlay">
              <div
                className="content-video_overlay-circle"
                onClick={() => {
                  setPlayVideo(!playVideo);
                  if (playVideo) {
                    videoRef.current.pause();
                  } else {
                    videoRef.current.play();
                  }
                }}
              >
                { playVideo ? (
                  <BsPauseFill 
                    className="pause-video-icon"
                  />
                ) : (
                  <BsFillPlayFill 
                    className="play-video-icon"
                  />
                )}
              </div>
            </div>  
          </div>

          <div className="moments__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
    </section>
  )
}

export default WatchMoments;