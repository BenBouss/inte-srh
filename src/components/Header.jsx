import React from 'react'
import logoTissot from '../assets/logo-tissot.png'
import MainNav from '../components/MainNav'
import Searchbox from '../components/Searchbox'

const Header = () => (
    <header className="mainHeader">
        <div className="sidebarHeader flex-items-center">
            <img src={logoTissot} alt="Edition Tissot" />
            <span className="appType">Documentation</span>
        </div>
        <MainNav />
        <Searchbox />
    </header>
);

export default Header;