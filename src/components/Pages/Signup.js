import React from "react";
import '../Styles/Signup.css'
import facebook from '../fb.svg'
export const Signup = () => {
  return (
    <div className="topdiv">
        <div>
           <img className="brandpic" src={facebook} alt="fbb"/>
            <p className="tdl">Facebook helps you connect and share <br></br>with the people in your life.</p>
        </div>
        <div className="downdiv">
      <form>
        <p><label>
            <p><input type="text" placeholder="Email address or phone number" className="placehold">
            </input></p>
        </label></p>
        <p><label>
            <p><input type="text" placeholder="Password" className="placehold jooo">
            </input></p>
        </label></p>
        </form>
      <button type="Submit" className="login">Log in</button>
      <p className="fp">Forgetten Password..?</p><hr></hr>
      <button type="Submit"className="sb">Create new account
      </button>
      <p className="lsl">Create a Page for a celebrity, brand or business.</p>
    </div>
    </div>
  );
};
