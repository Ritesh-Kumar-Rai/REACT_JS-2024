import useThemeContext from "../hooks/useThemeContext";

const Card = () => {

    const { isDarkThemed } = useThemeContext();

    return (
        <div className="card text-center flex-grow-1">
            <div className="card-header">
                Context API
            </div>
            <div className="card-body">
                <h5 className="card-title">Theme Toggle Navbar</h5>
                <p className="card-text">This theme toggle webpage with bootstrap uses Context API to store theme state and provide it to all components..</p>
                <a href="#" className="btn btn-primary">{isDarkThemed ? "Dark Theme Applied" : "Light Theme Applied"}</a>
            </div>
            <div className="card-footer text-body-secondary">
                Copyright &copy; 2025 Ritesh Kumar Rai
            </div>
        </div>
    );
};

export default Card;