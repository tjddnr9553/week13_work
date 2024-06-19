const BoardAdd = () => {
  return (
    <div>
      <div class="container">
        <h3>글작성</h3>
        <form action="/board/add" method="post">
          <table border="1">
            <tbody>
              <tr>
                <th>작성자</th>
                <td>
                  <input name="writer" readOnly type="text" value="작성자 이름" />
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <input name="title" type="text" />
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <textarea name="content" cols="30" rows="10"></textarea>
                </td>
              </tr>
              <tr>
                <th>작성</th>
                <td>
                  <input type="submit" value="작성" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}
export default BoardAdd