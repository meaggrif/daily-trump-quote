import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Tag } from './Tag'
import './Tags.css'

export const Tags = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        const fetchAllTags = async() => {
            const {data} = await axios.get('https://api.tronalddump.io/tag')
            setTags(data._embedded.tag)
        }
        
        fetchAllTags()

    }, [])


    return (
        <div>
            <h3 className="tags-header">Recent Tags</h3>
            <div className="tags-wrapper">
            {tags.map((tag) => {
                return <Tag key={tag.value} data={tag} />
                })}
            </div>
        </div>
    )
}