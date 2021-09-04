import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = ({ userInput }) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <form className="form">
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      ></input>
      <br></br>
      <button onClick={() => HandleLogin(userInput)} className="button">
        Access with the name
      </button>
    </form>
  );
};

export default GetUserComponent;
