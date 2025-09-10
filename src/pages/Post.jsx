import { useParams } from "react-router-dom";
import PostsData from "../components/PostCard.json";
import "../index.css";

function Post() {
    const { id } = useParams();
    const post = PostsData.find(p => p.id === parseInt(id));

    if (!post) return <div className="post-not-found">Post not found</div>;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="post-container">
            <div className="post-header">
                <h1 className="post-title">{post.title}</h1>
                <div className="img-container">
                <img className="post-img" src={`/images/${post.image}`} alt={post.title} />
                </div>
                <div className="post-meta">
                    <span className="post-author">By {post.author}</span>
                    <span className="post-date">Published on {formatDate(post.date)}</span>
                    {post.readTime && <span className="read-time">{post.readTime} read</span>}
                </div>
            </div>
            
            <div className="post-content">
                {post.summary && (
                    <div className="post-summary">
                        {post.summary}
                    </div>
                )}
                
                <div className="post-body">
                    {post.content && (
                        typeof post.content === 'string' ? 
                        <p>{post.content}</p> : 
                        post.content
                    )}
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
            </div>
            
            <div className="post-footer">
                <div className="post-actions">
                    <a href="/" className="back-to-all-posts">← Back to All Posts</a>
                </div>
                <div className="post-id">Post ID: {post.id}</div>
            </div>
        </div>
    );
}

export default Post;