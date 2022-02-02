import React from 'react'
import './Tag.css'

const Tag = ({tagName, isLight}) => {
    return <span className={`tag ${isLight}`}>
        {tagName}
    </span>
}
export default Tag;