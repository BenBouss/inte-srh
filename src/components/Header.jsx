import React from 'react'
import ReactTooltip from 'react-tooltip'
import logoTissot from '../assets/logo-tissot.png'
import MainNav from '../components/MainNav'
import Searchbox from '../components/Searchbox'

const Header = () => (
    <header className="mainHeader">
        <div className="sidebarHeader flex-items-center">
            <div className="backButton" data-tip data-for="Retour"><a href="https://www.editions-tissot.fr/mon-espace/mon-compte.aspx"></a></div>
            <img src={logoTissot} alt="Edition Tissot" />
            <span className="appType">Documentation</span>
        </div>
        <MainNav />
        <Searchbox />
        <ReactTooltip id="Retour" place="bottom" type="dark" effect="solid" arrowColor="transparent">Retour à Mon Espace</ReactTooltip>
    </header>
);

export default Header;