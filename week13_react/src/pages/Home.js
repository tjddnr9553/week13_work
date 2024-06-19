import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [dto, setDto] = useState({ username: '', pwd: '' });
    const [isLogin, setIsLogin] = useState(false);
    const { username, pwd } = dto;
    const loginUser = sessionStorage.getItem("loginId");
    const navigate = useNavigate();
    const onChange = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name]: value
        });
    }
    useEffect(() => {
        const loginUsername = sessionStorage.getItem("loginId");
        if (loginUsername) {
            setIsLogin(true);
        }
    }, [])

    function login() {
        console.log({ username: username, pwd: pwd });
        axios.post('http://localhost:8687/login', { username: username, pwd: pwd }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (res) {
                if (res.status = 200) {
                    sessionStorage.setItem("loginId", username);
                    navigate("/")
                } else {
                    alert('error:' + res.status);
                }
            })
    }

    return (
        <div>
            {!isLogin ? (
                <div className="container">
                    <h4>로그인</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td><input id="username" name="username" type="text" onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>PWD</td>
                                <td><input id="pwd" name="pwd" type="password" onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td><button id="login_btn" type="submit" onClick={login}>로그인</button></td>
                            </tr>
                        </tbody>
                    </table>
                    < button > <Link to={"/member/join"} className="main_link">아직 회원이 아니신가요?</Link></button>
                </div>
            )
                : (<h3>{loginUser}님 환영합니다.</h3>
                )
            }
        </div >
    )
}
export default Home;