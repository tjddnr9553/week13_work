import React from "react";

const Footer = () => {
    const loginUser = sessionStorage.getItem("loginId");
    
    return (
        <div className="footer">
            {loginUser && <p>{loginUser}님 환영합니다</p>}
        </div>
    );
};

export default Footer;
