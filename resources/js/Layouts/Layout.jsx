import { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";

import NavBar from "../Components/NavBar";

const Layout = ({ children }) => {
    useEffect(() => {
        console.log("Mount Layout");
        return () => {
            console.log("Unmount Layout");
        }
    }, []);
    return (
        <>
            <Head>
                <title>My App</title>
                <meta
                    head-key="description"
                    name="description"
                    content="My Applcation"
                />
                <meta
                    head-key="keywords"
                    name="keywords"
                    content="My App"
                />
            </Head>
            <header>
                <h1 style={{ textAlign: "center" }}>Logo</h1>
                <NavBar />
            </header>
            <main>{children}</main>
        </>
    );
}

export default Layout;
