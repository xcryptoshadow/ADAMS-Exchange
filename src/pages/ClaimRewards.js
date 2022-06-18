import React, { useState, useEffect, useCallback } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { ethers } from "ethers";

import Disclaimer from "../components/Disclaimer";
import { ArwesThemeProvider, Table, Text, Button, FrameBox } from '@arwes/core';
  
import adamsCoinABI from '../abi/AdamsCoin.json';

const ClaimRewards = () => {
    const adamsCoinAddress = '0x87e128c6cD8Ffa3d8409187DE25CaBCaac1e2EF5';
    const [rewardsAvailable, setRewardsAvailable] = useState('');

    // provider for checking if user has claimed rewards
    const provider = useProvider();
    console.log("ClaimRewards provider ", provider);
    const adamsCoinContractProvider = useContract({
      addressOrName: adamsCoinAddress,
      contractInterface: adamsCoinABI,
      signerOrProvider: provider,
    });

    // signer for claiming rewards
    const { data: signer, isError: isSignerError, isLoading: isSignerLoading } = useSigner();
    const adamsCoinContractSigner = useContract({
      addressOrName: adamsCoinAddress,
      contractInterface: adamsCoinABI,
      signerOrProvider: signer,
    });

    const claimRewards = async () => {
      // talk to contract
      await adamsCoinContractSigner.claimRewards()
        .then( returnValue => {setRewardsAvailable(0)})
        .catch(error => console.log(error));
    }

    // checks if user has rewards available for claiming
    const checkContractHasRewards = async() => {
      let rewardsAvailable = await adamsCoinContractProvider.checkRewards('0xcb082454a4D41cc44F031600A5F3bc00Ae66Fc6f');
      console.log("rewardsAvailable ", rewardsAvailable);
      rewardsAvailable = ethers.utils.formatEther(rewardsAvailable);
      console.log("rewardsAvailable ", rewardsAvailable);
      return rewardsAvailable;
    }

    useEffect(() => {
      console.log("check if user has claimed rewards");
      const checker = async () => {
        await checkContractHasRewards()
          .then( returnValue => {setRewardsAvailable(returnValue); console.log("checked if has rewards ", returnValue)})
          .catch(error => {setRewardsAvailable(0); console.log(error)});
      };
      checker();
    }, []);

    return (
      <div className="container">
      <article className="main">
      <ArwesThemeProvider>
            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
              <h1>ADAMS Rewards</h1>
            </FrameBox>
        </ArwesThemeProvider>
          <ArwesThemeProvider>
            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
              <p>Rewards are the heart of ADAMS Coin. We tax each swap 42% and then give all of that to a random person. It's like Oprah, but for nerds.</p>
            </FrameBox>
            <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
              <div className="right-button">
                  <h1>Your Rewards: {rewardsAvailable}</h1>
              </div>
              <div className="right-button">
              
                <Button animator={{ animate: false }} onClick={claimRewards}>
                  <Text>Claim</Text>
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

export default ClaimRewards;


/**

    const _generateRandomText = () => {
      return '0x8a7D9289Ee4FF2A9C8af60D2eea1007147F454C7';
    }
    const headers = [
      { id: 'a', data: 'Wallet ID' },
      { id: 'b', data: 'Reward Amount' }
    ];
    const dataset = Array(10).fill(0).map((_, index) => ({
      id: index,
      columns: [
        { id: 'p', data: '0x8a7D9289Ee4FF2A9C8af60D2eea1007147F454C7' },
        { id: 'q', data: '42000' }
      ]
    }));

 * 
 * <FrameBox className="adamsFrameBox" animator={{ animate: false }}>

                  <p><h1>These Lucky People Need To Come Claim Their ADAMS!</h1></p>

               <Table animator={{ animate: false }} headers={headers} dataset={dataset}/>
            </FrameBox>
 */