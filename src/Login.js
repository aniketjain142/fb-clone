import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { loggedReducer } from './reducer';
function Login() {
    const [state,dispatch]=useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log("Result",result);
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user,
           });
            }).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src=
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png">
                </img>
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                >
                </img>

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
                </Button>
        </div>
    )
}

export default Login
