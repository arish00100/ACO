import React from "react";
import Carousal from "../../components/carousal/Carousal";
import './index.css';

const HomePage = () => {
    return (
        <div>
            <div class="navigation_wrapper">
                <div class="logo">
                    <div class="logo-header">ACO</div>
                    <div>Animal Care Organization</div>
                </div>
                <div class="nav">
                    <ul>
                        <li><a href="../about/module.html">About</a></li>
                        <li><a id="login-reg" href="../login/qlogin.html">Login / Register</a></li>
                    </ul>
                </div>
            </div>
            <Carousal />
        </div>

    )
}

export default HomePage;