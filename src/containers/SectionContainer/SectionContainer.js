import React from 'react'
import './SectionContainer.css'
import FeedsList from "../FeedsList/FeedsList";
import TagsList from "../TagsList/TagsList";
const SectionContainer = () => {
    return <div className="section-container">
        <div className="feeds-list">
            <FeedsList />
        </div>
        <div>
            <div className="tags-list">
                <TagsList />
            </div>
        </div>

    </div>
}
export default SectionContainer;