import React from 'react';

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
                <a class="active" href="#"><img src="./assests/Consensus_Logo_Final-WHITE.png.webp" class="logoImg" alt="CONSENSUS"/></a>
                <div class="topnav-right">
                <a href="App.js">Membership</a>
                <a href="#">Team</a>
                </div>
            </div>

            {/* Connect */}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}
        </div>
    );
};

export default NavBar; 