import React from 'react'
import BodyBackgroundColor from "react-body-backgroundcolor";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import { Link } from "react-router-dom";

export default function Register_success() {
    return (
        <div>
              <BodyBackgroundColor backgroundColor="#DBE9F4">
                  <div className="contentregistersuccuss">
              <div className="card shadow-sm" style={{ background: "#F1FBFC" }}>
					<div className="card-body">
						<h1
							className="card-title"
							style={{ fontSize: "5opx", fontFamily: "lato" }}>
							Welcome On Board
						</h1>
						<div className="card-text">
                        <h3 style={{fontSize:'13px'}}>Registration successful <IoMdCheckmarkCircleOutline style={{fontSize:'20px', color:'#47B881'}}/></h3>
						</div>
					</div>
				</div>
                <Link as={Link} to="/">
										
										
								<div className="btn-success btn-sm">
                                    Go To Login
                                </div>
									</Link>
                </div>
                                </BodyBackgroundColor>
                            
        </div>
    )
}
