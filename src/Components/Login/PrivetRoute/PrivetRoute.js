import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivetRoute = ({ children, ...rest }) => {
	const [loggedIndUser, setLoggedIndUser] =useContext(UserContext)

	
	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIndUser.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>

	);
};

export default PrivetRoute;
