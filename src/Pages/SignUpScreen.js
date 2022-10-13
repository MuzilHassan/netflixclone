import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth } from "../firebase";
function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)

        }).catch((Error) => {
            console.log(Error)
        })
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((Error) => {
            console.log(Error);
        })

    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' placeholder='email' /><br />
                <input ref={passwordRef} type='password' placeholder='password' /><br />
                <button type='submit' onClick={signIn} >Signin</button><br />

                <h4><span className='greyy'>New to netflix? </span><span className='linkk' onClick={register}>Sign Up now</span></h4>
            </form>

        </div>
    );
}

export default SignUpScreen;