
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {useAuthContext} from "../contexts/AuthContextBetterV2";

function RequireAuth({children, basePath}) {

	const {auth} = useAuthContext();
	const location = useLocation();
	// const navigate = useNavigate();


	if (!auth.isLoggedIn) {
		// navigate(-1);
		return <Navigate to={basePath} state={{from: location}} replace />;
	}

	return children;
}


export default RequireAuth;