import { useState } from "react";
import "@css/navbar.css";
import { Link } from "@tanstack/react-router";
import userMedia from "@/hooks/matchMedia";
import userTheme from "@/hooks/userTheme";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
    const { isDesktop } = userMedia();
    const { theme, toggleTheme } = userTheme();

    return (
        <>
            <nav className="navbar">
                {isDesktop ? (
                    <>
                        <div className="navleading">
                            <FaLeaf />
                            <h1>Reporte Aqui</h1>
                        </div>

                        <div className="navtitle">
                            <Link to="/">Inicio</Link>
                            <Link to="/">Forum</Link>
                            <Link to="/">Contato</Link>
                        </div>

                        <div className="navaction">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? (
                                    <FiMoon className="stroke-blue-300 fill-blue-300 w-6 h-6" />
                                ) : (
                                    <FiSun className="stroke-yellow-300 fill-yellow-300 w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navleading">
                            <button className="">
                                <FiMenu className="stroke-green-600 dark:stroke-green-500 w-6 h-6" />
                            </button>
                        </div>

                        <div className="navtitle">
                            <FaLeaf />
                            <h1>Reporte Aqui</h1>
                        </div>

                        <div className="navaction">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? (
                                    <FiMoon className="stroke-blue-300 fill-blue-300 w-6 h-6" />
                                ) : (
                                    <FiSun className="stroke-yellow-300 fill-yellow-300 w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
}

/*

*/
