import {Route, Navigate} from "react-router-dom";
import {useContext} from "react";
import userContext from "../../context/userContext";


function PrivateRoute({ children }) {
    const {user, userLogin} = useContext(userContext);

    console.log('user login: ', userLogin)
    if (userLogin) return <h1>Loading...</h1>
    console.log('user in Private Route: ', user);

    return user ? children : <Navigate to={'/Login'} />
}

export default PrivateRoute;