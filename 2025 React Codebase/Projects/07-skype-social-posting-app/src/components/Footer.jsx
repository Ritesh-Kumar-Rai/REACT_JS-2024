const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

            <div className="col-md-4 d-flex align-items-center">

                <a
                    href="/"
                    className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                    aria-label="Bootstrap"
                >

                    <svg className="bi" width="30" height="24" aria-hidden="true">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">
                    © 2025 Company, Inc
                </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

                <li className="mx-3">
                    <a className="text-body-secondary text-decoration-none fw-bold fst-italic" href="#" aria-label="Ritesh Kumar Rai">
                        @RITESHKUMARRAI
                    </a>
                </li>

            </ul>
        </footer>
    );
};

export default Footer;
