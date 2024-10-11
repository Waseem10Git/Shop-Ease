import { useState } from "react";
import Input from "../components/Input";
import { toast } from 'react-toastify';
import usersApi from "../api/usesApi";
import authApi from "../api/auth";

function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handelSubmit = async e => {
        e.preventDefault();
        try {
            const { data: { token } } = await usersApi.loginUser(data);
            authApi.setToken(token);
            window.location = '/';
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status <500) toast.error(err.response.data);
        }
    };

    const handelChange = ({ target }) => setData({ ...data, [target.name]: target.value});

    return (
        <div className={"container"}>
            <h1>Login</h1>
            <form onSubmit={handelSubmit}>
                <Input id={"username"} handelChange={handelChange} value={data.username} label={"Username"}/>
                <Input id={"password"} handelChange={handelChange} value={data.password} label={"Password"} type={"password"}/>
                <button className={"btn btn-success"} type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default Login;