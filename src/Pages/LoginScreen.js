import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginscreen' style={{
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",

            backgroundImage: `url("")`,
            backgroundPosition: 'center center',
        }}>
            <div className='loginscreen__header'>

                <img className="header__logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                    alt="Logo" />
                <button className='header__button ' onClick={() => setSignIn(true)}>SignIn</button>
            </div>
            <div className='loginscreen__gradient' />

            <div className={`loginscreen__body ${signIn && 'loginscreen__black '}`}>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1 className='loginscreen__heading1'>Unlimited movies, TV shows, and more.</h1>
                        <h2 className='loginscreen__heading2'>Watch anywhere. Cancel anytime.</h2>
                        <h3 className='loginscreen__heading3'>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginscreen__input'>
                            <form>
                                <input type='email' placeholder='Email'></input>
                                <button className="boom" type='submit' onClick={() => setSignIn(true)}>Get Started</button>
                            </form>
                        </div>
                    </>
                )}
            </div>

        </div>
    );
}

export default LoginScreen;