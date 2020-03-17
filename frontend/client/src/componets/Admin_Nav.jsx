import React from "react";
import "../App.css";

import { Avatar } from "evergreen-ui";
import Admin_Drawar from "./Admin_Drawar";

export default function Admin_Nav() {
	return (
		<div>
			<nav className="navbar " style={{ backgroundColor: "#1070CA" }}>
				<ul className="nav">
				<li className="nav-item">
						<Avatar name="Admin" size={40} marginLeft={20}  marginRight={20}/>
					</li>
					<li className="nav-item">
						<h3
							style={{
								fontWeight: "100%",
								fontFamily: "lato",
								color: "white",
							}}>
							Admin
						</h3>
					</li>

					
				</ul>

				<span className="navbar-brand">
					<Admin_Drawar />
				</span>
			</nav>
		</div>
	);
}
