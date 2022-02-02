import React from 'react'
import './TagsList.css'
import Tag from "../../components/Tag/Tag";
const TagsList = () => {
    return <div className="tags-list">
        <p>Popular Tags</p>
        <Tag tagName="welcome"/>
        <Tag tagName="implementations"/>
        <Tag tagName="codebaseShow"/>
        <Tag tagName="introduction"/>
    </div>
}
export default TagsList;