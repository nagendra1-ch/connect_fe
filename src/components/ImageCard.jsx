import React from "react";

export default function ImageCard({ post }) {
  return (
    <div className="image-card">
      <img
        src={`http://localhost:8000${post.image}`}
        alt={post.caption || "User post"}
        className="image-preview"
      />
      <div className="image-info">
        <p className="image-username">@{post.user}</p>
        {post.caption && <p className="image-caption">{post.caption}</p>}
        <p className="image-time">
          {new Date(post.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
