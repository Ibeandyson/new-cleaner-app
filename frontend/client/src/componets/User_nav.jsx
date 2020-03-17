import React, { Component } from 'react'
import axios from "axios"

export default class User_nav extends Component {
    state = {
		total: []
	};
	componentDidMount() {
		const email = "";
		const password = "";
		const local_token = localStorage.getItem("token");

		const token = Buffer.from(`${email}:${password}`, "utf8").toString(
			"base64"
		);

		const url = "http://localhost:5000/api/users/user_list";

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
                <h3 style={{}}>{this.state.total.username}</h3>
            </div>
        )
    }
}
