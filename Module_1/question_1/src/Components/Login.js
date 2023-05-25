import React from 'react';

function Login() {
    return (

        <>
            <div className='main-div'>
                <div id="div1">

                    <h1>Login to Your Account</h1>
                    <span>Login using social networks</span>

                    <svg id="social1" height="80" width="350">
                        <circle cx="50" cy="35" r="25" fill="#45556f" />
                        <text style={{ "font-size": "30px" }} x="43" y="43" fill="white" stroke="white" stroke-width="1px"> f
                        </text>

                        <circle cx="140" cy="35" r="25" fill="#df4c3a" />
                        <text style={{ "font-size": "20px" }} x="128" y="42" fill="white" stroke="white" stroke-width="1px"> G+
                        </text>

                        <circle cx="230" cy="35" r="25" fill="#45556f" />
                        <text style={{ "font-size": "25px", "letter-spacing": "3px" }} x="219" y="42" fill="white" stroke="white"
                            stroke-width="1px"> in
                        </text> <br />
                    </svg>

                    <fieldset >
                        <legend>OR</legend>
                    </fieldset>

                    <input type="text" placeholder="Email" /> <br /> <br />
                    <input type="text" placeholder="Password" /> <br />

                    <button id="btn1">Sign In</button>
                </div>
                <div className="div2">
                    <h1>New Here?</h1>
                    <h2>Sign up and discover a great</h2>
                    <h2>amount of new oppotunities!</h2>
                    <button id="btn2">Sign Up</button>
                </div>
            </div>
        </>

    );
}

export default Login;
