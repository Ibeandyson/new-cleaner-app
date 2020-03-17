// import React, { Component } from "react";
// import BodyBackgroundColor from "react-body-backgroundcolor";
// import { Icon } from "evergreen-ui";
// import { Link } from "react-router-dom";

// export default class Login extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: "",
// 			password: "",
// 			errors: ""
// 		};
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);
// 	}

// 	handleInputChange = (event) => {
		
// 		this.setState({
// 			[event.target.name]: event.targetvalue
// 		});
// 	};

// 	onSubmit = (event) => {
// 		event.preventDefault();
// 		fetch("http://localhost:5000/api/users/login", {
// 			method: "POST",
// 			body: JSON.stringify(this.state),
// 			headers: {
// 				"Content-Type": "application/json"
// 			}
// 		})
// 			.then((res) => {
// 				if (res.status === 200) {
					
// 					this.props.handleSuccessfulAuth(res)
// 				} else {
// 					const error = new Error(res.error);
// 					throw error;
// 				}
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 				alert("Error logging in please try again");
// 			});
// 	};

// 	render() {
// 		return (
// 			<BodyBackgroundColor backgroundColor="#DBE9F4">
// 				<div className="contentLogin">
// 					<div className="container">
// 						<div className="card text-center">
// 							<div className="card-body  shadow-sm">
// 								<Icon icon="lock" size={50} color="#DBE9F4" marginBottom={20} />
// 								<form onSubmit={this.onSubmit}>
// 									<div className="form-row">
// 										<div className="col-md-12">
// 											<div className="md-form mt-0">
// 												<input
// 													type="email"
// 													name="email"
// 													className="form-control"
// 													placeholder="Email"
// 													id="email"
// 													value={this.state.email}
// 													onChange={this.handleInputChange}
// 												/>
// 											</div>
// 										</div>
// 										<div className="col-md-12">
// 											<div className="md-form mt-0">
// 												<input
// 													type="password"
// 													name="password"
// 													className="form-control"
// 													placeholder="Password"
// 													id="password"
// 													value={this.state.password}
// 													onChange={this.handleInputChange}
// 												/>
// 											</div>
// 										</div>
// 									</div>
// 									<button>Login</button>
// 								</form>
// 								<div className="text-center pt-3">
// 									<Link as={Link} to="/Register">
// 										<div className="btn-primary btn-sm ">
// 											Register if you don't have an account
// 										</div>
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</BodyBackgroundColor>
// 		);
// 	}
// }

import React from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import { Icon } from "evergreen-ui";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

function Login() {
	const { dispatch } = React.useContext(AuthContext);
	const initialState = {
		email: "",
		password: "",
		isSubmitting: false,
		errorMessage: null
	};
	const [data, setData] = React.useState(initialState);
	const handleInputChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		setData({
			...data,
			isSubmitting: true,
			errorMessage: null
		});
		fetch("http://localhost:5000/api/users/login", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: data.email,
				password: data.password
			})
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw res;
			})
			.then((resJson) => {
				dispatch({
					type: "LOGIN",
					payload: resJson
				});
			})
			.catch((error) => {
				setData({
					...data,
					isSubmitting: false,
					errorMessage: error.message || error.statusText
				});
			});
	};
	return (
		<BodyBackgroundColor backgroundColor="#DBE9F4">
			<div className="contentLogin">
				<div className="container">
					<div className="card text-center">
						<div className="card-body  shadow-sm">
							<Icon icon="lock" size={50} color="#DBE9F4" marginBottom={20} />
							<form onSubmit={handleFormSubmit}>
								<div className="form-row">
									<div className="col-md-12">
										<div className="md-form mt-0">
											<input
												type="email"
												name="email"
												className="form-control"
												placeholder="Email"
												id="email"
												value={data.email}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="md-form mt-0">
											<input
												type="password"
												name="password"
												className="form-control"
												placeholder="Password"
												id="password"
												value={data.password}
												onChange={handleInputChange}
											/>
										</div>
									</div>
								</div>
								<div className="text-center pb-3" style={{color:'red'}}>
								{data.errorMessage && (
									<span className="form-error">{data.errorMessage}</span>
								)}
								</div>
								<button disabled={data.isSubmitting}>
									{data.isSubmitting ? (
										<div className="spinner-border text-primary" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									) : (
										"Login"
									)}
								</button>
							</form>
							<div className="text-center pt-3">

									<Link as={Link} to="/Register">
									<div className="btn-primary btn-sm ">
								Register if you don't have an account
                                </div>
									</Link>

							</div>
						</div>
					</div>
				</div>
			</div>
		</BodyBackgroundColor>
	);
}
export default Login;
