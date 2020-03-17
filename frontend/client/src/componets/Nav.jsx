import React from "react";
import "../App.css";
import Dropdown from "./Dropdwon";
import { Avatar } from "evergreen-ui";
import User_nav from "./User_nav"

export default function Nav() {
	return (
		<div>
			<nav className="navbar " style={{ backgroundColor: "#1070CA" }}>
				<ul class="nav">
					<li className="nav-item">
						<Avatar  size={40} marginLeft={20} marginRight={20} />
					</li>
					<li class="nav-item">
						<div
							style={{
								fontWeight: "100%",
								fontFamily: "lato",
								color: "white"
							}}>
						<User_nav/>
						</div>
					</li>
				</ul>

				<span className="navbar-brand">
					<Dropdown />
				</span>
			</nav>
		</div>
	);
}
