import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {

  const HandleLogin = () => {
    setIsLoggedIn(true);
  };

  const formSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit= {formSubmit}>
      <input
        type="text"
        placeholder="write your name"
        onChange={(event) => setUser(event.target.value)}
        className="input"
      ></input>
      <br></br>
      <button onClick={() => HandleLogin()} className="button">
        Access with the name
      </button>
    </form>
  );
};

export default GetUserComponent;
