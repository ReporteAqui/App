import "@css/navbar.css";
import { Link } from "@tanstack/react-router";
import userMedia from "@/hooks/matchMedia";
import userTheme, { type Theme } from "@/hooks/userTheme";
import { FaSun, FaMoon, FaBars, FaLeaf, FaUser } from "react-icons/fa";
import useShowMenu from "@/hooks/showMenu";
import { FaX } from "react-icons/fa6";

function desktop(theme: Theme, toggleTheme: () => void) {
    return (
        <nav className="navbar nav-desktop">
            <div className="nav-title justify-start">
                <FaLeaf />
                <h1>Reporte Aqui</h1>
            </div>

            <div className="nav-menu">
                <Link to="/">Inicio</Link>
                <Link to="/">Forum</Link>
                <Link to="/">Contato</Link>
            </div>

            <div className="nav-action gap-x-2">
                <button className="p-2 rounded-full hover:shadow-inner hover:shadow-black/10 hover:bg-black/10 hover:dark:bg-white/10" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === "light" ? (
                        <FaMoon className="stroke-blue-300 fill-blue-300 w-6 h-6" />
                    ) : (
                        <FaSun className="stroke-yellow-300 fill-yellow-300 w-6 h-6" />
                    )}
                </button>
                <button className="p-2 rounded-full hover:shadow-inner hover:shadow-black/10 hover:bg-black/10 hover:dark:bg-white/10">
                    <FaUser className="stroke-green-600 fill-green-600 w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}

function mobile(
    theme: Theme,
    toggleTheme: () => void,
    showMenu: boolean,
    toggleShowMenu: () => void
) {
    return (
        <nav className={`navbar navbar-mobile overflow-hidden`}>
            <div className="nav-mobile">
                <div className="nav-leading">
                    <button className="p-2" onClick={toggleShowMenu}>
                        {showMenu ? (
                            <FaX className="stroke-green-500 fill-green-500  w-6 h-6" />
                        ) : (
                            <FaBars className="stroke-green-500 fill-green-500 w-6 h-6" />
                        )}
                    </button>
                </div>

                <div className="nav-title justify-center">
                    <FaLeaf />
                    <h1>Reporte Aqui</h1>
                </div>

                <div className="nav-action">
                    <button className="p-2 rounded-full shadow-inner bg-black/10 dark:bg-white/10" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === "light" ? (
                            <FaMoon className="stroke-blue-300 fill-blue-300 w-6 h-6" />
                        ) : (
                            <FaSun className="stroke-yellow-300 fill-yellow-300 w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`nav-menu-mobile ${
                    showMenu
                        ? "h-53.5 mb-6 opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex justify-end">
                    <button className="p-2 rounded-full shadow-inner bg-black/10 dark:bg-white/10">
                        <FaUser className="stroke-green-500 fill-green-500 w-6 h-6" />
                    </button>
                </div>

                <Link to="/">Inicio</Link>
                <Link to="/">Forum</Link>
                <Link to="/">Contato</Link>
            </div>
        </nav>
    );
}

export default function Navbar() {
    const { isDesktop } = userMedia();
    const { theme, toggleTheme } = userTheme();
    const { showMenu, toggleShowMenu } = useShowMenu();

    return (
        <>
            {isDesktop
                ? desktop(theme, toggleTheme)
                : mobile(theme, toggleTheme, showMenu, toggleShowMenu)}
        </>
    );
}
