import React from "react";

import BodyBackgroundColor from "react-body-backgroundcolor";
import { Button } from "evergreen-ui";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import User_total_booking from "./User_total_booking"
import User_completed_booking from "./User_completed_booking"
import User_pending_booking from "./User_pending_booking"
import ls from 'local-storage'
import component from "@reactions/component";
 



export default function Dashboard() {
				
	
		token: ls.get('token')

	return (

		<div>
			
		<BodyBackgroundColor backgroundColor="#DBE9F4">
			


			<div>
			
				<Nav />
				<div className="dashboard">
					<div className="container">
						<div className="row">
							<div className="col-md-4 px-3 my-3 text-center ">
								< User_total_booking/>
							</div>
							<div className="col-md-4 px-3 my-3 text-center">
								<User_completed_booking/>
							</div>
							<div className="col-md-4 px-3 my-3 text-center">
								<User_pending_booking/>
							</div>
							
						</div>
					</div>

					

					<div className="text-center">
						<Link as={Link} to="/User_booking">
							<Button
							    appearance="primary"
								marginTop={50}
								marginBottom={50}
								height={50}
								marginRight={16}
								iconBefore="edit">
								Make Booking
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</BodyBackgroundColor>
		</div>
	);
}
