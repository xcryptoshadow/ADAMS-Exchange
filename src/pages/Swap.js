import React from "react";
import ReactDOM from "react";
import { useState } from 'react';
import { ArwesThemeProvider, Text, Button, FrameBox } from '@arwes/core';
import Disclaimer from "../components/Disclaimer";

const Swap = () => {
    const [token0, setToken0] = useState("42");
    const [token1, setToken1] = useState("42");

    const swap = () => {
        // talk to cotnract
        alert('go swap');
    }
    return (
        <div className="container">
            <article className="main">
            <ArwesThemeProvider>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <h1>Swapping is where things get fun</h1>
                  </FrameBox>
              </ArwesThemeProvider>
                <ArwesThemeProvider>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <p>Swap Goerli ETH for ADAMS, pay the tax and see who gets it. Maybe you'll get it, maybe someone else will.</p>
                    <p>Hold on to your ADAMS, the more you have, the better your chance of winning the tax is.</p>
                  </FrameBox>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <div className="right-button">
                        <h1>From</h1>
                        <input type="number" value={token0} onChange={(e) => setToken0(e.target.value)} />
                    </div>
                    <div className="right-button">
                        <h1>To</h1>
                        <input type="number" value={token1} onChange={(e) => setToken1(e.target.value)} />
                    </div>
                    <div className="right-button">
                    
                      <Button animator={{ animate: false }} onClick={swap}>
                        <Text>Swap</Text>
                      </Button>
                    </div>
                  </FrameBox>
                </ArwesThemeProvider>
            </article>
            <footer className="footer">
                <Disclaimer />
            </footer>
        </div>
    );
};

export default Swap;
