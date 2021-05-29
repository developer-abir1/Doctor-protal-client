import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivetRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/signin" />)}
		/>
	);
};

export default PrivetRoute;
