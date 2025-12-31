import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="mb-4">
                {/* You can use a Bootstrap icon or a large display text */}
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <h2 className="fw-semibold text-dark">Page Not Found</h2>
            </div>

            <p className="lead text-muted mb-5" style={{ maxWidth: '500px' }}>
                Oops! The page you are looking for might have been removed,
                had its name changed, or is temporarily unavailable.
            </p>

            <Link to="/" className="btn btn-dark btn-lg px-5 shadow-sm rounded-3">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound404;