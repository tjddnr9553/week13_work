import { Link } from "react-router-dom"

const MemberDetail = () => {
    return (
        <div>
            <div class="container">
                <form action="/member/edit" method="post">
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input id="username" name="username" type="text" placeholder="USERNAME_PLACEHOLDER" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>PWD</td>
                                <td>
                                    <input id="pwd" name="pwd" type="text" placeholder="PASSWORD_PLACEHOLDER" />
                                </td>
                            </tr>
                            <tr>
                                <td>NAME</td>
                                <td>
                                    <input id="name" name="name" type="text" placeholder="NAME_PLACEHOLDER" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>EMAIL</td>
                                <td>
                                    <input id="email" name="email" type="text" placeholder="EMAIL_PLACEHOLDER" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="수정" />
                                    <button>
                                        <a href="/member/del?username=USERNAME_PLACEHOLDER">삭제</a>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button>
                    <Link to={"/"}>메뉴로</Link>
                </button>
            </div>
        </div>
    )
}
export default MemberDetail