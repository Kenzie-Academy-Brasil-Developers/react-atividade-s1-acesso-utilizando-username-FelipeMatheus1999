const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <span>Welcome {user}!</span>
      <button onClick={HandleLogout} className="button">
        logout
      </button>
    </>
  );
};

export default WelcomePage;
