import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8000/api/posts/");
    setPosts(res.data);
  };

  const uploadPost = async () => {
    const form = new FormData();
    form.append("image", image);
    form.append("caption", caption);
    await axios.post("http://localhost:8000/api/posts/", form, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input placeholder="Caption" onChange={(e) => setCaption(e.target.value)} />
      <button onClick={uploadPost}>Post</button>

      <div className="gallery">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <img src={`http://localhost:8000${post.image}`} alt="" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
      {posts.map((post) => (
  <ImageCard key={post.id} post={post} />
))}
    </div>
  );
}
