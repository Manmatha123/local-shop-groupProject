import React, { useState } from 'react'
import "./Login.css";
import Nav from '../narbar/Nav';


const Login = () => {

    const [input, setInput] = useState({ phone: "", password: "" });
    const [eye, seteye] = useState(true);

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInput({ ...input, [name]: value });
    }

    const login = async (e) => {
        e.preventDefault();
        try {

            alert("login successful");
        } catch (e) {
            alert("something wrong");
        }
    }

    return (
        <>
            
            <div className="container">
            <Nav/>
              <div className="loginBody">

             
                <section className="leftLogin">
                    <form className="loginForm" onSubmit={login}>
                        <h2>Welcome Back</h2>
                        <p>Doesn't have an account yet?<a href="">Sign Up</a></p>
                        <div className="inside-form">

                            <label htmlFor="">Phone Number</label>
                            <div className="inputBox">
                            <i className="fa-solid fa-user"></i><input type="text" required placeholder='Enter phone number' name='phone' onChange={(e) => handleInput(e)} />
                            </div>

                            <label htmlFor="">Password</label>
                            
                            < div className="inputBox">
                            {
                                eye ? <i onClick={()=>seteye(!eye)} className="fa-solid fa-eye"></i>:<i onClick={()=>seteye(!eye)}class="fa-solid fa-eye-slash"></i>
                            }
                               
                            {/* <i class="fa-solid fa-eye-slash"></i> */}
                            <input type="text" required placeholder='Enter Password' name='password' onChange={(e) => handleInput(e)} />
                            </div>

                            <button>Login</button>
                        </div>

                    </form>
                </section>
                <section className="rightLogin">

                    <div className="login-right-image">
                      <lottie-player src="https://lottie.host/f6584c2b-6f1f-48a6-a30d-9fedd307a977/yyaEg3cAjH.json" background="transparentf" speed="1" style={{width:"500px",height:"500px"}} loop autoplay direction="1" mode="normal"></lottie-player>

                    </div>
                </section>
                </div>
            </div>
        </>
    )
}

export default Login;

