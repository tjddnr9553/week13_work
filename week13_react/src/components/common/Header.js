import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const loginUser = sessionStorage.getItem("loginId");

    useEffect(() => {
        if (loginUser) {
            setIsLogin(true);
        }
    }, [loginUser]);

    function logout() {
        axios.get("http://localhost:8687/member/logout")
            .then(function (res) {
                if (res.status === 200) {
                    const loginId = sessionStorage.getItem("loginId");
                    sessionStorage.removeItem("loginId");
                    alert(loginId + "님이 로그아웃 되었습니다.");
                    window.location.replace("/");
                } else {
                    console.error(res.error);
                }
            });
    }

    return (
        <div className="header">
            <button><Link to={"/"}>메인화면으로</Link></button>
            {isLogin && <button onClick={logout}>로그아웃</button>}
        </div>
    );
};

export default Header;
