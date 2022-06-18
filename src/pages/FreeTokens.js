import React, { useState, useEffect, useCallback } from "react";
import Disclaimer from "../components/Disclaimer";
import { ArwesThemeProvider, Text, Button, FrameBox } from '@arwes/core';
import { useAccount, useContract, useContractEvent, useProvider, useSigner } from "wagmi";
  
import adamsVaultABI from '../abi/AdamsVault.json';
//export const adamsVaultABI = avABI;

const FreeTokens = () => {
    // contract addresses 
    const adamsCoinAddress = '0x87e128c6cD8Ffa3d8409187DE25CaBCaac1e2EF5';
    const adamsVaultAddress = '0xa20e128fFec6F8A59eF0C507901855cE9dB4279B';

    // provider for checking if user has claimed rewards
    const provider = useProvider();
    const adamsVaultContractProvider = useContract({
      addressOrName: adamsVaultAddress,
      contractInterface: adamsVaultABI,
      signerOrProvider: provider,
    });

    // signer for claiming rewards
    const { data: signer, isError: isSignerError, isLoading: isSignerLoading } = useSigner();
    console.log("FreeTokens signer ", signer);
    
    const adamsVaultContractSigner = useContract({
      addressOrName: adamsVaultAddress,
      contractInterface: adamsVaultABI,
      signerOrProvider: signer,
    });

    // state mgmt
    const [hasClaimed, setHasClaimed] = useState(false);

    // checks is a user has already claimed tokens
    // TODO: always returns false. not sure why.
    const checkContractHasClaimed = async() => {
      const hasClaimed = await adamsVaultContractProvider.hasClaimedDistribution();
      console.log("hasClaimed ", hasClaimed);
      return hasClaimed;
    }

    useEffect(() => {
      console.log("check if user has claimed rewards");
      const checker = async () => {
        await checkContractHasClaimed()
          .then( returnValue => {setHasClaimed(returnValue); console.log("checked if has claimed ", returnValue)})
          .catch(error => console.log(error));
      };
      checker();
    }, []);

    const claimTokens = async () => {
        // talk to contract
        await adamsVaultContractSigner.claimDistribution()
          .then( returnValue => {setHasClaimed(true)})
          .catch(error => console.log(error));

    }

    return (
        <>
        <div className="container">
            <article className="main">
            <ArwesThemeProvider>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <h1>Free ADAMS For All!</h1>
                  </FrameBox>
              </ArwesThemeProvider>
                <ArwesThemeProvider>
                  <FrameBox className="adamsFrameBox" animator={{ animate: false }}>
                    <p>Adams's Coin is more fun when more people have it.</p>
                    <p>Want some free coins? Connect your wallet and click below for 4,200 free coins.</p>
                    <div className="right-button">
                      {hasClaimed && (
                      <Text>You already got yours</Text>
                      )}
                      {!hasClaimed && (
                      <Button animator={{ animate: false }} onClick={claimTokens}>
                        <Text>Claim Free Tokens</Text>
                      </Button>
                      )}
                    </div>
                  </FrameBox>
                </ArwesThemeProvider>
            </article>
            <footer className="footer">
                <Disclaimer />
            </footer>
        </div>
        </>
    );
};

export default FreeTokens;
