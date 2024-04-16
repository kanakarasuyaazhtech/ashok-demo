import React from "react";
import './Body.css';
import image1 from '../assets/MIDC.png';
import image2 from '../assets/RSHP.png';
import image3 from '../assets/25c.png';
import image4 from '../assets/rohityoutube.png';

function Body() {
    return (
        <div>
            <div className="universal_mid_align">
                <h1 className='universal_mid'>It's easy to start playing
                    <span className="universal_mid_span">  on Dream11</span> </h1>
            </div>
            <div><h3 className="universal_link">play <a href="www.facebook.com" > Fantasy Cricket </a> on Dream11 and win big! </h3>

            </div>

            <div>
                <p className="inner_text">Enter into the thrilling world of Fantasy sports, a strategy-based online sports game wherein you can create a virtual team of real players <br /> playing in real life matches. Create your team to win points based on all the players' performance in a live game.</p>
            </div>
            <div className="chart11">
            <ul>
                <li>
                  <span class="step_number">1</span>
                  <div class="title_img_box">
                    <div>
                      <div class="step_title_box">Select A Match</div>
                    </div>
                    <div>
                      <div class="winning_step_img">
                      <img className="image_align" src={image1} />
                      </div>
                    </div>
                  </div>
                  <div class="step_title">Choose an upcoming match that you want to play</div>
                </li>

                <li>
                  <span class="step_number">2</span>
                  <div class="title_img_box">
                    <div>
                      <div class="step_title_box">Create Team</div>
                    </div>
                    <div>
                      <div class="winning_step_img">
                      <img className="image_align" src={image2} />
                      </div>
                    </div>
                  </div>
                  <div class="step_title">Use your skills to pick the right players</div>
                </li>


                <li>
                  <span class="step_number">3</span>
                  <div class="title_img_box">
                    <div>
                      <div class="step_title_box">Join Contests</div>
                    </div>
                    <div>
                      <div class="winning_step_img">
                      <img className="image_align" src={image3} />
                      </div>
                    </div>
                  </div>
                  <div class="step_title">Choose between different contests and compete</div>
                </li>
              </ul>
              </div>
            <div>
                <h1 className='universal_mid'>How to
                    <span className="universal_mid_span">  play</span> </h1>

            </div>
            <div>
                <p className="inner_text">Ready to challenge other sports fans? Watch this video to learn how to play on Dream11 and get started now. Compete with sports fans, make a perfect Dream11 <br /> team with the best combination of players as per your knowledge and skill and win big.</p>
            </div>
            <div>
                <img className="rohitPhoto" src={image4} />
            </div>
            <div>
                <hr className="line"></hr>
            </div>

            <div>
                <h1 className='universal_mid'>Reviews &
                    <span className="universal_mid_span">  Rating</span> </h1>
            </div>

        </div>


    )

}

export default Body;
