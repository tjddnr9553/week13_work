import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Join = () => {

    const [dto, setDto] = useState({ name: '', username: '', pwd: '', email: '', role: '' });
    const { name, username, pwd, email, role } = dto;
    const navigate = useNavigate();
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name]: value
        })
    }

    const join = () => {
        console.log({ name: name, username: username, pwd: pwd, email: email });
        axios.post('http://localhost:8687/member/join', { name: name, username: username, pwd: pwd, email: email }, {})
            .then(function (res) {
                console.log(dto);
                if (res.status === 200) {
                    alert(res.data.dto.name+"님 가입이 완료됐습니다.");
                    navigate("/board/list");
                } else {
                    alert('error:' + res.status);
                }
            })
    }
    return (
        <div>
            <div className="container">
                <h3>회원가입</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <label htmlFor="username"><input id="username" name="username" type="text" onChange={onChange} /></label>
                            </td>
                        </tr>
                        <tr>
                            <td>PWD</td>
                            <td>
                                <label htmlFor="pwd"><input id="pwd" name="pwd" type="password" onChange={onChange} /></label>
                            </td>
                        </tr>
                        <tr>
                            <td>NAME</td>
                            <td>
                                <label htmlFor="name"><input id="name" name="name" type="text" onChange={onChange} /></label>
                            </td>
                        </tr>
                        <tr>
                            <td>EMAIL</td>
                            <td>
                                <label htmlFor="email"><input id="email" name="email" type="email" onChange={onChange} /></label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label htmlFor="submit_btn"><button id="submit_btn" onClick={join}>가입</button></label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Join;