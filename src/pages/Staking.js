import React, { useState, useEffect, useCallback } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import ReactDOM from "react";
import { ArwesThemeProvider, Text, Button, FrameBox } from '@arwes/core';
import Disclaimer from "../components/Disclaimer";

import adamsCoinABI from '../abi/AdamsCoin.json';



const Staking = () => {
    const adamsCoinAddress = '0x87e128c6cD8Ffa3d8409187DE25CaBCaac1e2EF5';
    const adamsStakingAddress = 'TODO';
    
    const [stakingAmount, setStakingAmount] = useState("42");

    const stake = () => {
        // talk to cotnract
        alert('go stake');
    }

    

    return (
        <div className="container">
            <article className="main">
            <ArwesThemeProvider>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <h1>Stake Your Adams</h1>
                  </FrameBox>
              </ArwesThemeProvider>
                <ArwesThemeProvider>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    Stake your ADAMS to earn 42% APR.
                  </FrameBox>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <p>You currently have ____ ADAMS. How many would you like to stake?</p>
                  </FrameBox>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
              
                    <div className="right-button">
                    <input type="number" value={stakingAmount} onChange={(e) => setStakingAmount(e.target.value)} />
                      <Button animator={{ animate: false }} onClick={stake}>
                        <Text>Stake</Text>
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

export default Staking;
