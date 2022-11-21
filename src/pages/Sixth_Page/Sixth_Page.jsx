import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/video.mp4";
import audio from "../../assets/audio.mp3";
import "./Sixth_Page.css";

export default function Sixth_Page() {
  const [showVideo, setShowVideo] = useState(false);
  const audioRef = useRef();

  const playAudio = async () => {
    await audioRef.current.play();
  };

  useEffect(() => {
    let id = setTimeout(() => {
      setShowVideo(!showVideo);
      playAudio();
    }, 6000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div className="sixth_page_container">
      <div className="cinema_container">
        <div className="curtain_1 curtain">
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
        </div>
        <div className="curtain_2 curtain">
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
          <span className="curtain_line"></span>
        </div>
        <div className="ceiling">
          <div className="light_1 light"></div>
          <div className="light_2 light"></div>
          <div className="light_3 light"></div>
          <div className="light_4 light"></div>
        </div>
        <div className="screen_container">
          <div className="screen">
            {showVideo ? (
              <>
                <video
                  autoPlay
                  type="video/mp4"
                  width="100%"
                  height="100%"
                  className="video"
                >
                  <source src={video} type="video/mp4"></source>
                </video>
              </>
            ) : null}
            {/* <audio ref={audioRef}>
              <source src={audio} />
            </audio> */}
          </div>
        </div>
        <div className="chair_container">
          <div className="chairs">
            <div className="chair chair_1">
              <div>
                <p>1</p>
              </div>
            </div>
            <div className="chair chair_2">
              <div>
                <p>2</p>
              </div>
            </div>
            <div className="chair chair_3">
              <div>
                <p>3</p>
              </div>
            </div>
            <div className="chair chair_4">
              <div>
                <p>4</p>
              </div>
            </div>
            <div className="chair chair_5">
              <div>
                <p>5</p>
              </div>
            </div>
            <div className="chair chair_6">
              <div>
                <p>6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="cinema-container">
          <div class="screen">
            <div class="three">3</div>
            <div class="two">2</div>
            <div class="one">1</div>
            <div class="circle-inner"></div>
            <div class="circle-outer"></div>
            <div class="line1"></div>
            <div class="line2"></div>

            <div class="screen2">
              <div class="sheep">
                <div class="wool wool1"></div>
                <div class="wool wool2"></div>
                <div class="wool wool3"></div>
                <div class="wool wool4"></div>
                <div class="wool wool5"></div>
                <div class="wool wool6"></div>

                <div class="head"></div>
                <div class="ear1"></div>
                <div class="ear2"></div>

                <div class="leg1"></div>
                <div class="leg2"></div>

                <div class="sign">YOU'RE COOL!</div>
              </div>
            </div>
          </div>
          <div class="ground"></div>
          <div class="seat-container"></div>
          <div class="curtain1"></div>
          <div class="curtain2"></div>
          <div class="wall"></div>
          <div class="ceiling"></div>

          <div class="light light1"></div>
          <div class="light light2"></div>
          <div class="light light3"></div>

          <div class="chair chair1"></div>
          <div class="chair chair2"></div>
          <div class="chair chair3"></div>
          <div class="chair chair4"></div>
          <div class="chair chair5"></div>
          <div class="chair chair6"></div>
          <div class="chair chair7"></div>
          <div class="chair chair8"></div>
          <div class="chair chair9"></div>

          <div class="layer"></div>
        </div> */}
    </div>
  );
}
