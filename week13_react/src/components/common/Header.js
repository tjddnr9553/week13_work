import axios from "axios";
import { Link } from "react-router-dom"

function logout() {
    axios.get("http://localhost:8687/member/logout", {}, {})
        .then(function (res) {
            if (res.status = 200) {
                alert(res.data.username + "님이 로그아웃 됐습니다.");
            } else {
                console.error(res.error);
            }
        });
}

const Header = (props) => {
    return (
        <div className="header">
            <button><Link to={"/"}>메인화면으로</Link></button>
            <button onClick={logout}> 로그아웃</button>
        </div>
    )
}
export default Header