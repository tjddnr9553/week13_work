const BoardEdit = () => {
  return (
    <div>
      <div class="container">
        <h3>글목록</h3>
        <a href="/board/add">글 작성</a>
        <form action="/board/getbytitle" method="post">
          제목: <input name="title" type="text" />
          <input type="submit" value="검색" />
        </form>
        <table border="1">
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><a href="/board/edit/1">Example Title</a></td>
              <td>Example Writer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default BoardEdit