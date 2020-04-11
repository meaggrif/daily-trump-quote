import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './RandomQuote.css'

export const RandomQuote = () => {
    const [quote, setQuote] = useState(null) 

    useEffect(() => {
        const fetchRandomQuote = async() => {
            const { data } = await axios.get('https://api.tronalddump.io/random/quote')
            setQuote(data.value)
        }  

        fetchRandomQuote()
    }, [])

    return (
        <div className="quote-wrapper">
            <div>
                <p className="quote">{quote}</p>
                <p className="sub-title"> ~ Donald Trump</p>
            </div>
        </div>
    )
}
