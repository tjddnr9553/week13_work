import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const loginUser = sessionStorage.getItem("loginId");

  useEffect(() => {
    axios.get("http://localhost:8687/board/list")
      .then(function (res) {
        if (res.status === 200) {
          setBoardList(res.data.list);
        } else {
          console.error(res.error);
        }
      })
  }, [])

  return (
    <div>
      <div className="container">
        <h4>글 목록</h4>

        {/* <form action="/board/getbytitle" method="post">
          제목: <input name="title" type="text" />
          <input type="submit" value="검색" />
        </form> */}
        <table border="1">
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board, index) => (
              <tr key={index}>
                <td>{board.num}</td>
                <td><Link to={`/board/edit/${board.num}`}>{board.title}</Link></td>
                <td>{board.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button><Link to="/board/add">글 작성</Link></button>
      </div>
    </div>
  )
}
export default BoardList