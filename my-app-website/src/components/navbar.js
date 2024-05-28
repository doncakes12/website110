import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
        <div class="navigation-bar">
            <ul class="navigation-bar-items">
                <li>
                    <a class="nav-hlink" href="#">
                        Top
                    </a>
                </li>
                <li>
                    <a class="nav-hlink" href="#about-section">
                        About Me
                    </a>
                </li>
                <li>
                    <a class="nav-hlink" href="#projs">
                        Projects
                    </a>
                </li>
            </ul>
        </div>
        );
    }
}
export default Navbar;