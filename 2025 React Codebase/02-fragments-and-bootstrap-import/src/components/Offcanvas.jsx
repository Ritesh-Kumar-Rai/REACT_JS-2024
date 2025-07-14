const Offcanvas = () => {
  return <>
    <button className="btn btn-dark mt-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <nav className="navbar bg-body-dark bg-dark rounded">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              Bootstrap Navbar
            </a>
          </div>
        </nav>
      </div>
    </div>
  </>

};

export default Offcanvas;
