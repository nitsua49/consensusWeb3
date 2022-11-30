import React from 'react';
import navLogoImg from "./assets/Consensus_Logo_Final-WHITE.png.webp";
const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            {/* Right Side - Sections */}
            <div class="topnav">
                <a class="active" href="#"><img src={navLogoImg} class="logoImg" alt="CONSENSUS"/></a>
                <div class="topnav-right">
                <a href="App.js">Membership</a>
                <a href="#">Team</a>
                </div>
            </div>

            {/* Connect */}
            {isConnected ? (
                <div class="mintBodyC">
                    <h3>Connected</h3>
                </div>
            ) : (
            <div class="divButton">
                <button class="btn btn-primary btn-lg connectBtn" onClick={connectAccount}>Connect</button>
            </div>
            )}
        </div>
    );
};

export default NavBar; 