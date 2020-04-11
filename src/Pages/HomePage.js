import React from 'react'
import { Title } from '../components/Title'
import { RandomQuote } from '../components/RandomQuote'
import { Tags } from '../components/Tags'

import './HomePage.css';

export const HomePage = () => {
    return (
        <div className="home-wrapper">
            <img className="poop" src="https://www.pngkit.com/png/full/17-173279_donald-trump-turd-donald-trump-poop-emoji.png"/>
            <Title />
            <RandomQuote />
            <Tags />
        </div>
    )
}
