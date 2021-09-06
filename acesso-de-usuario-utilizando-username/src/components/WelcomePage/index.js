const WelcomePage = ({ user, setIsLoggedIn, setUser }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
  };

  return (
    <>
      <span>Welcome {user}!</span>
      <br></br>
      <button onClick={HandleLogout} className="button">
        Logout
      </button>
    </>
  );
};

export default WelcomePage;
