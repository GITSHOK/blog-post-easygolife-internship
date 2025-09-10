import PostsData from '../components/PostCard.json';
import PostCard from '../components/PostCard.jsx';
import "../index.css";

function Posts(){
    return(
        <div className="posts-page">
            <div className='header'>
                <span className='header-title'>HELLO! WELCOME TO MY BLOG WEBSITE</span>
                <span className='header-note'>Find interesting posts about aviation right below</span>
            </div>
            <div className="posts-grid">
                {PostsData.map((post) =>(
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Posts;