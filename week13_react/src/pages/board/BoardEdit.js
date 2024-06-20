import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../styles/layout.css";

const BoardEdit = () => {
  const { id } = useParams();
  const [board, setBoard] = useState({ num: '', writer: "", title: "", content: "" });
  const [loggedInUser, setLoggedInUser] = useState(""); // State to hold logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch board details
    axios.get(`http://localhost:8687/board/edit/${id}`)
      .then(function (res) {
        if (res.status === 200) {
          setBoard(res.data.dto);
        } else {
          console.error(res.error);
        }
      })
      .catch(function (error) {
        console.error("There was an error fetching the board detail!", error);
      });

    // Retrieve logged-in user from session storage or state
    const user = sessionStorage.getItem("loginId");
    if (user) {
      setLoggedInUser(user);
    }
  }, [id]);

  const del_board = () => {
    // Delete board if logged-in user matches board's writer
    if (loggedInUser === board.writer) {
      axios.delete(`http://localhost:8687/board/del/${id}`)
        .then(function (res) {
          if (res.status === 200) {
            alert("삭제되었습니다.");
            navigate("/board/list");
          } else {
            console.error(res.error);
          }
        })
        .catch(function (error) {
          console.error("There was an error deleting the board!", error);
        });
    } else {
      alert("작성자만 삭제할 수 있습니다.");
    }
  };

  const edit = () => {
    axios.put(`http://localhost:8687/board/edit/${id}`, { title: board.title, content: board.content })
      .then(function (res) {
        if (res.status === 200) {
          setBoard(res.data);
          alert("게시물 수정이 완료되었습니다.");
          navigate("/board/list");
        } else {
          console.error(res.error);
        }
      })
      .catch(function (error) {
        console.error("There was an error fetching the board detail!", error);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value
    });
  };

  return (
    <div className="container detail-container">
      <h4>게시글 수정 페이지</h4>
      <table className="board-edit-table">
        <tbody>
          <tr>
            <td className="form-group">작성자</td>
            <td>{board.writer}</td>
          </tr>
          <tr>
            <td className="form-group">제목</td>
            <td><input type="text" name="title" value={board.title} onChange={onChange} style={{ width: "100%" }} /></td>
          </tr>
          <tr>
            <td className="form-group">내용</td>
            <td><textarea cols={30} rows={3} name="content" value={board.content} onChange={onChange}></textarea></td>
          </tr>
          <tr>
            <td>
              <button id="edit_btn" onClick={edit}>수정</button>
            </td>
            <td>
              {loggedInUser === board.writer && (
                <button id="del_btn" onClick={del_board}>삭제</button>
              )}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Link to="/board/list"><button id="menu_btn" style={{ "margin-left": "35%" }}>목록</button></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardEdit;
