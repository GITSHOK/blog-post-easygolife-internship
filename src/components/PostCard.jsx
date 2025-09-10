import { Link } from 'react-router-dom';
import "../index.css";


function PostCard({ post }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-preview">
      <h2 className="post-title">{post.title}</h2>
      
      <div className="post-meta">
        Published on {formatDate(post.date)} by {post.author}
      </div>
      
      {post.tags && post.tags.length > 0 && (
        <div className="tags-container">
          <span className="tags-label">Tags:</span>
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
      
      {post.categories && post.categories.length > 0 && (
        <div className="categories-container">
          <span className="categories-label">Categories:</span>
          {post.categories.map((category, index) => (
            <span key={index} className="category">{category}</span>
          ))}
        </div>
      )}
      
      <div className="post-excerpt">
        <p>{post.summary}</p>
      </div>
      
      <div className="divider"></div>
      
        <Link to={`/post/${post.id}`} className="read-more">
            Read More
        </Link>
    </div>
  );
}

export default PostCard;