import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BoardAdd = () => {
  const [dto, setDto] = useState({ id: '', name: '', username: '', pwd: '', email: '', role: '' });
  const { id, name, username, pwd, email, role } = dto
  const [boardDto, setBoardDto] = useState({ title: "", content: "", writer: "" });
  const { title, content, writer } = boardDto;
  const loginUser = sessionStorage.getItem("loginId");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8687/member/get", {
      params: { username: loginUser },
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
  }, [loginUser])

  function addBoard() {
    axios.post('http://localhost:8687/board/add', { writerId: dto.id, title: boardDto.title, content: boardDto.content }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(function (res) {
        console.log(dto);
        if (res.status === 200) {
          alert("글 작성이 완료됐습니다.");
          navigate("/board/list");
        } else {
          alert('error:' + res.status);
        }
      })
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setBoardDto({
      ...boardDto,
      [name]: value
    })
  }

  return (
    <div>
      <div className="container">
        <h4>글 작성</h4>
        <table border="1">
          <tbody>
            <tr>
              <th>작성자</th>
              <td>
                <input name="writer" readOnly type="text" value={dto.username} />
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input name="title" type="text" onChange={onChange} />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea name="content" cols="35" rows="5" onChange={onChange}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button id="submit_btn" onClick={addBoard}>작성</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default BoardAdd