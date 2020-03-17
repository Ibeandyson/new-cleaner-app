// import React, { Component } from "react";
// import {  Route, Switch, BrowserRouter } from "react-router-dom";
// import withAuth from "./componets/withAuth.jsx";
// import Bookinghistory from "./componets/Bookinghistory.jsx";
// import Message from "./componets/Message.jsx";
// import Dashboard from "./componets/Dashboard.jsx";
// import User_booking from "./componets/User_booking.jsx";
// import Register_success from  "./componets/Register_success.jsx"
// import Login from "./componets/Login.jsx";

// class App extends Component {
// 	componentDidMount (){
		
// 			reducer = (state, action) => {
// 				switch (action.type) {
// 					case "LOGIN":
// 						localStorage.setItem("user", action.payload.user);
// 						localStorage.setItem("token", action.payload.token);
// 						return {
// 							...state,
// 							isAuthenticated: true,
// 							user: action.payload.user,
// 							token: action.payload.token
// 						};
// 					case "LOGOUT":
// 						localStorage.removeItem("user");
// 						localStorage.removeItem("token");
// 						return {
// 							...state,
// 							isAuthenticated: false,
// 							user: null
// 						};
// 					default:
// 						return state;
// 				}
// 			};
// 	}
// 	render() {
		
// 		return (
// 			<div>
//               <BrowserRouter>
// 				<Switch>
// 					<Route exact path="/Register_success" component={Register_success} />
// 					<Route exact path="/User_booking" component={withAuth(User_booking)} />
// 					<Route exact path="/Dashboard" component={withAuth(Dashboard)}/>
// 					<Route exact path="/Bookinghistory" component={withAuth(Bookinghistory)} />
// 					<Route exact path="/Message" component={withAuth(Message)} />
				

// 					<Route exact path="/" component={Login}/> 
// 				</Switch>
// 				</BrowserRouter>
// 			</div>
// 		);
// 	}
// }

// export default App;


import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
import "./App.css";

import AdminDashboard from "./componets/AdminDashboard.jsx";
import Login from "./componets/Login.jsx";
import Register from "./componets/Register.jsx";
import Routes from "./componets/Routes";
import Admin_Pendingbooking from "./componets/Admin_Pendingbooking.jsx";
import Admin_total_user from "./componets/Admin_total_user";
import Admin_user_message from "./componets/Admin_user_message.jsx";
import Register_success from "./componets/Register_success.jsx";

export const AuthContext = React.createContext();
const initialState = {
	isAuthenticated: false,
	user: null,
	token: null
};
const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			localStorage.setItem("user", action.payload.user);
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: action.payload.token
			};
		case "LOGOUT":
			localStorage.removeItem("user");
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null
			};
		default:
			return state;
	}
};

function App() {

	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				state,
				dispatch
			}}>
			<div className="App">

				   <BrowserRouter>
					<div>

					{!state.isAuthenticated ? <Route exact path="/" component={Login}/> : <Route exact="Routes" component={Routes} />}

						<Route exact path="/Register_success" component={Register_success} />
						<Route exact path="/Register" component={Register} />
						<Route exact path="/AdminDashboard" component={AdminDashboard} />
						<Route exact path="/Admin_Pendingbooking" component={Admin_Pendingbooking} />
						<Route exact path="/Admin_user_message" component={Admin_user_message} />
						<Route exact path="/Admin_total_user" component={Admin_total_user} />

					</div>
				</BrowserRouter>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
