import Tag from "../Tag/Tag";
import './Post.css'

const heartIcon = "❤ "

const Post = () => {
    return (
        <div className="post">
            <div className="postHeader">
                <div className="avatar">
                    <img
                        alt="avatar-img"
                        src="https://api.realworld.io/images/demo-avatar.png"/>
                    {/*<img src="https://avatars.githubusercontent.com/u/77569458?s=96&v=4"/>*/}
                </div>
                <div className="post-author">
                    <p className="author-name">Gerome</p>
                    <p className="date-postedAt">Wed Nov 24 2021</p>
                </div>
                <p className="like">30 {heartIcon}
                ️</p>
            </div>
            <div className="post-content-description">
                <h3 className="title">Create a new implementation </h3>
                <p className="description">Create a new implementation like this has become so easy!!!!</p>
            </div>
            <div className="postcontent-footer">
                <p>Read more...</p>
                <div>
                    <Tag
                        tagName="implementaion"
                        isLight="light"
                    />
                    <Tag
                        tagName="react"
                        isLight="light"
                    />
                    <Tag
                        tagName="javascript"
                        isLight="light"
                    />
                    <Tag
                        tagName="frameworks"
                        isLight="light"
                    />
                </div>
            </div>
        </div>
    )
}
export default Post