const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{props.appName}</span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
