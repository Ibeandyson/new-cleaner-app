import React from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import Nav from "./Nav";


export default function Message() {
	
	// const [data, setData] = React.useState(initialState);
	// const handleInputChange = (event) => {
	// 	setData({
	// 		...data,
	// 		[event.target.name]: event.target.value
	// 	});
	// };
	// const handleFormSubmit = (event) => {
	// 	event.preventDefault();
	// 	setData({
	// 		...data,
	// 		isSubmitting: true,
	// 		errorMessage: null
	// 	});
	// 	const local_token = localStorage.getItem("token");
	// 	fetch("http://localhost:5000/api/messages/message", {
	// 		method: "post",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Authorization: `${local_token}`
	// 		},
	// 		body: JSON.stringify({
	// 			tittel: data.tittel,
	// 			message: data.message
	// 		})
	// 	})
	// 		.then((res) => {
	// 			if (res.ok) {
	// 				return res.json();
	// 			}
	// 			throw res;
	// 		})
	// 		.then((resJson) => {
	// 			dispatch({
	// 				type: "LOGIN",
	// 				payload: resJson
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			setData({
	// 				...data,
	// 				isSubmitting: false,
	// 				errorMessage: error.message || error.statusText
	// 			});
	// 		});
	// };
	// return (
	// 	<BodyBackgroundColor backgroundColor="#DBE9F4">
	// 		<div>
	// 			<Nav />
	// 			<div className="contentMessage">
	// 				<form onSubmit={handleFormSubmit}>
	// 					<div className="container">
	// 						<div
	// 							classsName="col-md-12 my-4 px-4"
	// 							style={{ paddingTop: "0px" }}>
	// 							<div className="card">
	// 								<div className="card-body">
	// 									<input
	// 										type="text"
	// 										class="form-control"
	// 										name="tittel"
	// 										id="tittel"
	// 										placeholder="Message Tittel"
	// 										value={data.tittel}
	// 										onChange={handleInputChange}
	// 									/>
	// 								</div>
	// 							</div>
	// 						</div>
	// 					</div>
	// 					<div className="container">
	// 						<div
	// 							classsName="col-md-12 my-4 px-4"
	// 							style={{ paddingTop: "10px" }}>
	// 							<div className="card">
	// 								<div className="card-body">
	// 									<textarea
	// 										style={{ height: "300px" }}
	// 										className="form-control rounded"
	// 										id="message"
	// 										name="message"
	// 										type="text"
	// 										placeholder="Write Your Message Here..."
	// 										value={data.Message}
	// 										onChange={handleInputChange}
	// 										>
	// 									</textarea>
	// 								</div>
	// 							</div>
	// 						</div>
	// 					</div>
	// 					<div className="text-center pb-3" style={{ color: "red" }}>
	// 						{data.errorMessage && (
	// 							<span className="form-error">{data.errorMessage}</span>
	// 						)}
	// 					</div>
	// 					<div className="text-center pt-3">
	// 						<button disabled={data.isSubmitting}>
	// 							{data.isSubmitting ? (
	// 								<div className="spinner-border text-primary" role="status">
	// 									<span className="sr-only">Loading...</span>
	// 								</div>
	// 							) : (
	// 								"Send"
	// 							)}
	// 						</button>
	// 					</div>
	// 				</form>
	// 			</div>
	// 		</div>
	// 	</BodyBackgroundColor>
	// );
}
