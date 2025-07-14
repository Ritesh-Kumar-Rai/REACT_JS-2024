import useThemeContext from "../hooks/useThemeContext";

const Navbar = () => {

    const { isDarkThemed, toggleTheme } = useThemeContext();

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <div className="form-check form-switch fs-5">
                    <input className="form-check-input cursor-pointer" type="checkbox" id="checkNativeSwitch" checked={isDarkThemed} onChange={toggleTheme} switch="true" />
                    <label className="form-check-label fw-bold cursor-pointer user-select-none" htmlFor="checkNativeSwitch">
                        ToggleTheme ({isDarkThemed ? "dark" : "light"})
                    </label>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;