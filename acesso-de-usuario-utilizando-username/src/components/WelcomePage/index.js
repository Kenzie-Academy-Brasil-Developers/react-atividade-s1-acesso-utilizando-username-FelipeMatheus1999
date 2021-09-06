const WelcomePage = ({ user, setIsLoggedIn, setUser }) => {
  const HandleLogout = (  ) => {
    setIsLoggedIn(false);
    setUser("");
}

  return (
    <>
      <span>Welcome {user}!</span>
      <button onClick={HandleLogout} className="button">
        Logout
      </button>
    </>
  );
};

export default WelcomePage;
