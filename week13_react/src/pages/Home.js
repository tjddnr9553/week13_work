import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/layout.css"

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
                if (res.status === 200) {
                    sessionStorage.setItem("loginId", username);
                    window.location.reload();
                } else {
                    alert('아이디 혹은 비밀번호를 확인해주세요.');
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
                alert('아이디 혹은 비밀번호를 확인해주세요.');
            });
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
                                <td colSpan={2} ><button id="login_btn" type="submit" onClick={login}>로그인</button></td>
                            </tr>
                        </tbody>
                    </table>
                    < button > <Link to={"/member/join"} className="main_link">아직 회원이 아니신가요?</Link></button>
                </div>
            )
                : (
                    <div className="user-welcome">
                        <h3>즐거운 시간 보내세요.</h3>
                        <div className="menu">
                            <ul className="menu_list">
                                <li><Link to={"/member/detail"}>내 정보</Link></li>
                            </ul>
                            <ul className="menu_list">
                                <li><Link to={"/board/list"}>게시판</Link></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
export default Home;