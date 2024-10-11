import { useContext, useState } from "react";
import Input from "../components/Input";
import { toast } from 'react-toastify';
import usersApi from "../api/usesApi";
import authApi from "../api/auth";
import UserContext from "../context/userContext";

function Register() {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const { user, setUser } = useContext(UserContext);
    console.log(user);

    const handelSubmit = async e => {
        e.preventDefault();
        try {
            // const { data: { token } } =
                await usersApi.createUser(data);
            // console.log(token);
            // authApi.setToken(token);
            window.location = '/login';
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status <500) toast.error(err.response.data);
        }
    };

    const handelChange = ({ target }) => setData({ ...data, [target.name]: target.value});

    return (
        <div className={"container"}>
            <h1>Register</h1>
            <form onSubmit={handelSubmit}>
                <Input id={"username"} handelChange={handelChange} value={data.username} label={"Username"}/>
                <Input id={"password"} handelChange={handelChange} value={data.password} label={"Password"} type={"password"}/>
                <button className={"btn btn-success"} type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default Register;