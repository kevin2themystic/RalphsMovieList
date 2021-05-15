import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Header () {
    return (
        <div className="component header-component">
            <div className="row">
                <div className="col-md-3">
                    <Avatar alt="Ralph Haglock Photo" 
                            src="/images/ralph-hagloch-photo.jpg" 
                            style={{width: 210, height: 210}} />                          
                </div>
                <div className="col-md-9">
                    <div className="header-name">Ralph's List</div>
                    <div className="header-title">Movies We Watched Together</div>
                    <div className="header-subtitle">1999 - 2016</div>                        
                </div>
            </div>   
        </div>
    );
}

export default Header;