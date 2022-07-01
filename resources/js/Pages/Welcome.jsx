import { useEffect } from "react";
import Layout from "../Layouts/Layout";

const Welcome = ({greeting}) => {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);

    return (
        <>
            <h1>{greeting} Inertia.js</h1>
        </>
    );
};
Welcome.layout = (page) => <Layout children={page}/>;

export default Welcome;
