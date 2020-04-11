import React from 'react'
import './Tag.css'

export const Tag = ({ data }) => {
    const formatTag = (tag) => {
        return tag.toLowerCase().replace(' ', '')
    }
    
    return <p className="tag">#{formatTag(data.value)}</p>
}
