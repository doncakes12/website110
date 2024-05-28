import React from 'react';
import C from '../images/c.png';
import CPP from '../images/C++Logo.png';
import Java from '../images/java.png';


class AboutMeTop extends React.Component {
    render () {
        return (
        <div class="about-me" id="about-section">
            <div class="about-me-text">
                <p>
                    Hello!, I am Donovan Coleman, and I am a full stack developer from Los Angeles. I attended University of California, Riverside and recieved my B.S. in Computer Science. I enjoy low level work, as well as a bit of software construction.
                </p>
            </div>
            <h3 class="center-text">Skilled with </h3>
        </div>
        );
    }
}

class AboutMeLanguage extends React.Component {
    render() {
        return (
        <div>
            <h3 class="center-text">Skilled with </h3>
            <div class="about-me-languages">
                <img class="image-medium-icon" src={C} alt="c" />
                <img class="image-medium-icon" src={CPP} alt="c++" />
                <img class="image-medium-icon" src={Java} alt="java" />
            </div>
        </div>
        );
    }
}

class AboutMeExtra extends React.Component {
    render () {
        return (
        <div>
            <h3>Other Information</h3>
            <div class="extracurriculars">
                <div class="extracurricular center-text">
                    <a href="https://www.scouting.org/"> 
                        <h4>Scouts of America</h4>
                    </a>
                    <div>(2009-2021)</div>
                    <p class="extracurr-desc">I was in Scouts of America from first grade up until college. I served in a leadership position for 5 years.</p>
                </div>
            </div>
        </div>
        );
    }
}

class AboutMe extends React.Component {
    render () {
        return (
            <div>
                <AboutMeTop />
                <AboutMeLanguage />
                <AboutMeExtra />
            </div>
        );
    }
}
export default AboutMe;