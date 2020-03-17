import React from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import { Icon } from "evergreen-ui";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import { withRouter } from 'react-router-dom';


 function Register(props) {
	const { dispatch } = React.useContext(AuthContext);
	const initialState = {
		username: "",
		address: "",
		email: "",
		password: "",
		password2: "",
		phone: "",

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

		
		fetch("http://localhost:5000/api/users/register", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			
			},
			body: JSON.stringify({
				username: data.username,
				address: data.address,
				email: data.email,
				password: data.password,
				password2: data.password2,
				phone: data.phone
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
				props.history.push('/Register_success')
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
			<div className="contentRegister">
				<div className="container">
					<div class="card text-center" style={{ opacity: "0.9" }}>
						<div class="card-body  shadow-sm">
							<Icon icon="user" size={50} color="#DBE9F4" marginBottom={20} />
							<form onSubmit={handleFormSubmit}>
								<div className="form-row">
									<div className="col-md-12">
										<div className="md-form mt-0">
											<input
												type="text"
												name="username"
												className="form-control"
												placeholder="Username"
												id="username"
												value={data.username}
												onChange={handleInputChange}
											/>
										</div>
									</div>

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
												type="text"
												name="phone"
												className="form-control"
												placeholder="Phone"
												id="phone"
												value={data.phone}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="md-form mt-0">
											<input
												type="text"
												name="address"
												className="form-control"
												placeholder="Address"
												id="address"
												value={data.address}
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
									<div className="col-md-12">
										<div className="md-form mt-0">
											<input
												type="password"
												name="password2"
												className="form-control"
												placeholder="Comfirm Password"
												id="password2"
												value={data.password2}
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
								<button disabled={data.isSubmitting} >
									{data.isSubmitting ? (
										<div className="spinner-border text-primary" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									) : (
										"Register"
									)}
								</button>
							</form>
							<div className="text-center">
								
								<p
									className="text-center"
									style={{
										paddingTop: "10px",
										fontFamily: "lato",
										fontSize: "15PX"
									}}>
									Login instead if you have an account
									<Link as={Link} to="/">
										<Icon
											icon="log-in"
											size={15}
											marginLeft={10}
											color="muted"
										/>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BodyBackgroundColor>
	);
}
export default withRouter(Register);
