import React, { Component } from "react";
import { Avatar } from "evergreen-ui";
import axios from "axios";

export default class User_complet_booking extends Component {
	state = {
		total: []
	};
	componentDidMount() {
		const email = "";
		const password = "";
		const local_token = localStorage.getItem('token');
		
		const token = Buffer.from(`${email}:${password}`, "utf8").toString(
			"base64"
		);

		const url = "http://localhost:5000/api/bookings/bookingcount";

		axios
			.get(url, {
				headers: {
					Authorization: `${local_token}`
				}
			})
			.then((res) => {
				const total = res.data;
				this.setState({ total });
			});
	}
	render() {
		return (
			<div>
				<div className="card shadow-sm" style={{ background: "#F9F9FB" }}>
					<div className="card-body">
						<h5
							className="card-title"
							style={{ fontSize: "15px", fontFamily: "lato" }}>
							TOTAL BOOKING
						</h5>
						<div className="card-text">
							<h1 style={{ fontSize: "100px" }}>{this.state.total.all}</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
