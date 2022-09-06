// import logo from './logo.svg';
import './App.css';
import './LogIn.css'
// import pic from './jane.png'
import  {useState,useEffect} from 'react';

function LogIn() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit =()=>{
    const data ={
            email:email,
            password:password
        }
        alert(JSON.stringify(data));
}
return (
<div class="container">
<div class="logo">
<p><span>jane</span></p>
<p className='signup'>Don't have an account? <span>Sign Up</span></p>
</div>
<div />
<h1>Welcome Back</h1>
<div class='col'>
<form onSubmit={handleSubmit}>

<div className='txt-fld'>
<label class="form-label">Your Email
<input type="email" name="emailAddress" placeholder="name@domain.com" 
value ={email}
onChange={(e)=>{setEmail(e.target.value)}}
/>
</label>
</div>
<div class='txt-fld'>
<label>Password
<input type="password" name="password" placeholder="at least 10 characters" 
value={password}
onChange={(e)=>{setPassword(e.target.value)}}/>
</label>
</div>
<div class='check_box'>
<label>
<input type="checkbox" name="text" />
                            Keep me logged in
                        </label>
                        <label class='forget'>Forgot Password?</label>
                    </div>

                    <div>
                        <button type="submit">LogIn</button>
                    </div>

                    <p>____________________________ OR _____________________________</p>

                    <div class="brands">
                    <div>    
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div>
                    <i class="fa-brands fa-google"></i>
                    </div>
                    <div>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                    </div>
                    {/* <div class='images'>
                      <img src={pic} alt='jane.png'></img>
    
              </div> */}

         


                </form>
            </div>
        </div>
    )
}


 export default LogIn