import React from 'react'
import './FeedsList.css'
import Post from "../../components/Post/Post";
const FeedsList = () => {
    return <div>
        <div className="feedsList">
            <div className="tab-header">
                <div className="tab active-tab">Global Feed</div>
                <div className="tab">Your Feed</div>
            </div>
        </div>
        {/*Posts x 9... */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

    </div>

}
export default FeedsList;