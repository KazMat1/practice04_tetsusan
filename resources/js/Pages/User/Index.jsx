import { Link } from "@inertiajs/inertia-react";

import Layout from "../../Layouts/Layout";

const Index = (props) => {
    return (
        <>
            <h1>ユーザ一覧</h1>
            <Link href={route('user.create')} as="button" type="button">
                ユーザ登録
            </Link>
            <ul>
                {props.users.map((user) => (
                    <li
                        key={user.id}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        {user.avatar_file_path && (
                            <img
                                src={user.avatar_file_path}
                                style={{ width: "30px" }}
                            />
                        )}
                        <span>{user.name}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

Index.layout = (page) => <Layout children={page}/>;

export default Index;
