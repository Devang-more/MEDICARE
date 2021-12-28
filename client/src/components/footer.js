// import { FormatQuoteRounded } from "@mui/icons-material";
import React from "react";
import './../style/footer.css';

function Footer() {
    return(
        <div className="main_footer">
            <div className="container_footer">
                <div className="row_footer">        {/* footer of every page*/}
                    <div className="col1">
                        <h4>Popular features</h4>
                        <ul>
                            <li>24x7 available</li>
                            <li>Interaction with doctors via chat section</li>
                            <li>Location features</li> 
                        </ul>
                    </div>
                    <div className="col2">
                        <h4>Medicare</h4>
                        <ul> 
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Location</li>
                            
                        </ul>
                    </div>        
                                       
                </div>
            
            </div>
        
        </div>
        )

}
export default Footer;