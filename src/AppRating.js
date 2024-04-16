import React from "react";
import './AppRating.css';
import image1 from '../src/assets/deam11mobile.png';
import image2 from '../src/assets/androidp.png';
import image3 from '../src/assets/iphone.png';
import image4 from '../src/assets/win_crore_1.png';
import image5 from '../src/assets/win_crore_3.png';
import image6 from '../src/assets/win_crore_4.png';
import image7 from '../src/assets/qr.png';



function AppRating() {
    return (

        <div>
            <div>
                <h1 className='universal_mid'>Get the app and
                    <span className="universal_mid_span">  Win Crores</span></h1>
            </div>
            <div className="grid sm:grid-cols-2">
            <div>
                <img className="dream11mobile" src={image1} />
            </div>
            <div>
            <div className="flex items-center" >

                <img src={image4} />
                <p>Play with over 20 Crore Dream11 users or <a href="www.facebook">create your own private contest</a></p>
            </div>
            <div className="flex items-center">

                <img src={image5} />
                <p>Invite your friends & collect big rewards</p>
            </div>
            <div className="flex items-center">

                <img src={image6} />
                <p>Play more, earn DreamCoins & get exciting rewards</p>
            </div>
            <div className="flex items-center">
                <img className="android" src={image2} />
                <img className="iphone" src={image3} />
            </div>
            <div className="flex items-center">
            <img className="qr" src={image7} />
          
                <p >
                Scan the QR Code to download <br/> the <a className="scantext" href="www.facebook.com">
                Fantasy Cricket
                </a> App
                </p>
                </div>
            </div>
            </div>
            <div>
               <hr className="linehr"></hr>
            </div>
            <div className="universal_mid_align">
                <h1 className='universal_mid'>Popular
                    <span className="universal_mid_span">  Fantasy Sports</span>   in India</h1>
                <p className="inner_text"> is a platform for online gaming where fantasy players create a virtual team of real sports players. Dream11 gives you plenty of options to create your fantasy sports team <br /> for the sport you would like to play and win! Here are the </p>
            </div>
        
        </div>
    )
}

export default AppRating;