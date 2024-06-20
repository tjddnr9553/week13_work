import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const MemberDetail = () => {
    const [dto, setDto] = useState({ username: '', name: '', pwd: '', email: '', role: '' });
    const { id, username, name, pwd, email, role } = dto;
    const loginUsername = sessionStorage.getItem("loginId");
    console.log(loginUsername);

    useEffect(() => {
        axios.get("http://localhost:8687/member/get", {
            params: { username: loginUsername },
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (res) {
                if (res.status === 200) {
                    console.log(res.data.dto);
                    setDto(res.data.dto)
                    console.log("정보 가져오기 성공");
                }
            })
    }, [loginUsername])

    const onChange = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name]: value
        })
    }

    function edit() {
        axios.put("http://localhost:8687/member/edit", { id: dto.id, username: dto.username, name: dto.name, pwd: pwd, email: dto.email, role: dto.role }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                if (res.status === 200) {
                    console.log("수정 성공");
                    alert("다시 로그인 후 이용해주시기 바랍니다.")
                    logout();
                } else {
                    console.log("수정 실패")
                }
            })
    }

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

    function del_mem() {
        axios.post(`http://localhost:8687/member/del/${dto.username}`, { username: dto.username })
            .then(function (res) {
                if (res.status === 200) {
                    console.log(res.data.username + "탈퇴 성공");
                    sessionStorage.removeItem("loginId");
                    window.location.replace("/");
                } else {
                    console.log("탈퇴 실패")
                }
            })
    }

    return (
        <div>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input id="username" name="username" type="text" value={dto.username} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>PWD</td>
                            <td>
                                <input id="pwd" name="pwd" type="password" placeholder="변경할 비밀번호를 입력해주세요." onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>NAME</td>
                            <td>
                                <input id="name" name="name" type="text" value={dto.name} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>EMAIL</td>
                            <td>
                                <input id="email" name="email" type="text" value={dto.email} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td><button id="edit_btn" onClick={edit}>수정</button></td><td><button id="del_btn" onClick={del_mem}>탈퇴</button></td>
                        </tr>
                    </tbody>
                </table>
                <button id="menu_btn">
                    <Link to={"/"}>메뉴로</Link>
                </button>
            </div>
        </div >
    )
}
export default MemberDetail