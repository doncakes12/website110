import React from 'react';
import profileImage from '../images/profileImage.JPG';

class Hero extends React.Component {
    render() {
        return (
            <>
                <HeroHead />
            </>
        );
    }
}

class HeroHead extends React.Component {
    render() {
        return (
        <div class="hero-content">
            <div class="hero-photo-container">
                <img className={"hero-photo"} src={profileImage} alt={"photo of Donovan Coleman"}/>
            </div>
            <HeroBody />
        </div>
        );
    }
}

class HeroBody extends React.Component {
    render (){
        return (
            <div class="hero-desc">
                <h2 class="center-text hero-head">Full Stack Developer</h2>
                <p class="hero-desc-text">
                    Hello, I am Donovan Coleman a full stack developer from Los Angeles, California. 2024 Graduate (B.S. in Computer Science)
                </p>
            </div>
        );
    }
}

export default Hero;