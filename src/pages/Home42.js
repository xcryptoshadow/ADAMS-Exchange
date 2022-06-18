
import React, { FC, useState, useEffect } from 'react';
import { ArwesThemeProvider,  Blockquote, FrameBox } from '@arwes/core';
import Disclaimer from '../components/Disclaimer';

const Home42 = () => {
    const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

    const [activate, setActivate] = React.useState(true);

    return (
    <>
    <div className="container">
        
        <article className="main">
        <ArwesThemeProvider>

            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
            If "42" is the answer to the “ultimate question of life, the universe, and everything, then perhaps the question is "what random and unexpected thing will happen to me today?". In the spirit of Life, The Universe and Everything, here is Adams coin.
            </FrameBox>
            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
            <p>Each token transfer is taxed 42% and then that tax is randomly given to one account holder. </p>
            </FrameBox>
            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
            <p>The more you hold and the longer you hold, the greater your chance of tax windfalls is. </p>
            </FrameBox>
            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
            <p>Tax distribution is done according to these rules:</p>
                <ol>
                <li>The contract owner can never win</li>
                <li>10 % of the time, there is a non-weighted distribution. Each wallet has an equal chance of winning, regardless of their token balance.</li>
                <li>90% of the time there is a weighted distribution. Each token owned increases your chance of winning.</li>
                </ol>
            </FrameBox>
        </ArwesThemeProvider>
        </article>
        <footer className="footer">
            <Disclaimer />
        </footer>
    </div>
    </>
    )
};

export default Home42;
