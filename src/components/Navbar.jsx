import PropTypes from 'prop-types';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <h2 className="text-center mb-0">Latest <span className="badge bg-danger">News</span></h2>
        <form className="d-flex mx-auto" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', flexDirection: 'row' }}>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Navbar;
