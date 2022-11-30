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
            {/* Left Side - Socials */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            {/* Right Side - Sections */}
            <div class="topnav">
                <a class="active" href="#home"><img src="assests/Consensus_Logo_Final-WHITE.png.webp" class="logoImg" alt="CONSENSUS"/></a>
                <div class="topnav-right">
                <a href="App.js">Membership</a>
                <a href="#about">Team</a>
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