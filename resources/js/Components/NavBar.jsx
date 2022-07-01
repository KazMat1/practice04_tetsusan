import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import "./Navbar.css";

const NavBar = () => {
    const { url } = usePage();
    return (
        <>
            <nav>
                <ul className="menu">
                    <li>
                        <Link
                            href={route("welcome")}
                            className={url === "/" ? "active" : ""}
                        >
                                Welcome
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("about")}
                            className={url === "/about" ? "active" : ""}
                        >
                                About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("user.index")}
                            className={url === "/user" ? "active" : ""}
                        >
                                User
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
