import Layout from "../Layouts/Layout";
import { Head } from "@inertiajs/inertia-react";

const About = () => {
    return (
        <>
            <Head>
                <title>Aboutページ</title>
                <meta
                    head-key="description"
                    name="description"
                    content="これはAboutページです"
                />
                <meta
                    head-key="keywords"
                    name="keywords"
                    content="About"
                />
            </Head>
            <h1>About</h1>
        </>
    );
}

About.layout = (page) => <Layout children={page}/>;

export default About;
