import React, { useEffect, useState } from "react";

const getPostsEndpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  // useEffect 훅 사용
  useEffect(() => {
    // getPostsEndpoint에서 GET 요청을 보냄
    fetch(getPostsEndpoint, { method: "GET" })
      .then((response) => response.json()) // 응답을 JSON 형태로 변환
      .then((data) => setPosts(data)); // 변환된 데이터를 setPosts를 사용하여 상태에 저장
  }, []); // 빈 의존성 배열 -> 이 효과는 컴포넌트가 마운트될 때만 실행됨

  return (
    <div>
      <h2>게시글 목록</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button onClick={() => setCount(count + 1)}>눌러눌러~</button>
    </div>
  );
}

export default Posts;
