import React from 'react'
import logoTissot from '../assets/logo-tissot.png'
import MainNav from '../components/MainNav'

const Header = () => (
    <header className="mainHeader">
        <div className="sidebarHeader">
            <img src={logoTissot} alt="Edition Tissot" />
            <span className="appType">Documentation</span>
        </div>
        <MainNav />
        <div className="searchBox">
            <form>
                <input type="text" placeholder="Rechercher dans la documentation"/>
                <button type="submit"></button>
            </form>
        </div>
    </header>
);

export default Header;