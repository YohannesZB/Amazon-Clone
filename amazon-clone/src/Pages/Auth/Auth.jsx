import React, { useState, useContext} from 'react'
import classes from './Auth.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { auth } from "../../Utility/firebase";
import { ClipLoader } from 'react-spinners';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type'

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState({
        signIn: false,
        signUp: false
    });

    const [{user}, dispatch] = useContext(DataContext);
    const navigate = useNavigate();
    const navStateData = useLocation();
    console.log(navStateData);

    // console.log(user);

    const authHandler = async (e)=> {
      e.preventDefault();
      if(e.target.name == "signin"){
        setLoading({...loading, signIn: true})
        signInWithEmailAndPassword(auth, email, password)
        .then((userInfo)=>{
          console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({...loading, signIn:false});
          navigate(navStateData?.state?.redirect ||"/")
        })
      }else {
        setLoading({...loading, signUp: true});
        createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo)=>{
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          })
          setLoading({...loading, signUp:false})
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch((err)=>{
          setError(err.message)
          setLoading({...loading, signUp:false});
        });
      } 
      
    }



  return (
    
    <section className={classes.login}>
            {/* logo */}
            <Link to="/">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322" 
            alt="" />
            </Link>
            {/* form */}
            <div className={classes.login__container}>
                <h1>Sign In</h1>
                {navStateData.state?.msg && (
                  <small
                  style={{
                    padding: "5px",
                    textAlign: 'center',
                    color: "red",
                    fontWeight: "bold",
                  }}
                  >
                    {navStateData.state.msg}
                  </small>
                )}
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={email}  onChange={(e)=>setEmail(e.target.value)} 
                        type="email" 
                        id='email'
                        autoComplete="username"/>
                        
                    </div>
                    <div>
                    <label htmlFor="password">password</label>
                        <input value={password} 
                        onChange={(e)=>setPassword(e.target.value)} type="password" 
                        id='password'
                        autoComplete="current-password"/>
                    </div>
                    <button 
                        type='submit' 
                        onClick={authHandler}
                        name='signin'
                        className={classes.login__signInButton}
                    >
                        {loading.signIn ? (
                        <ClipLoader color="#000405"  size={15} ></ClipLoader>
                        ) : (
                          "Sign In"
                        )}
                        
                    </button>

                </form>
                {/* agreement */}
                <p className={classes.login__privacy}>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please See our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                {/* create account btn */}
                <button 
                type='submit' 
                name='signup'
                onClick={authHandler} 
                className={classes.login__registerButton}
                >
                {loading.signUp ? (
                  <ClipLoader color='#0000' size={15}></ClipLoader>
                ) : (
                  
                "Create your Amazon Account"
                )}
                </button>
                {error && (
                <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
  )}

            </div>
        </section>
        
    );
                
}


export default Auth