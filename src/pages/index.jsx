import React from 'react'
import { Link } from 'react-router-dom'

import logoTissot from '../assets/logo-tissot.png'
import Header from '../components/Header'
import ThemsHome from '../components/ThemHome'
import MajHome from '../components/MajHome'
import ModHome from '../components/ModHome'

const Homepage = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebarHeader">
                    <img src={logoTissot} alt="Edition Tissot" />
                    <span className="appType">Documentation</span>
                </div>
                <div className="sidebarMenu">
                    <ul className="menuNav">
                        <li className="menuHome menuActif"><a href="">Accueil</a></li>
                        <li className="menuModeles"><a href="">Modèles téléchargeables</a></li>
                        <li className="menuMaj"><a href="">Mises à jour</a></li>
                        <li className="menuFav"><a href="">Mes favoris</a></li>
                    </ul>
                </div>
                <div className="sidebarAccount">
                    <span className="accountIcon">J</span>
                    <span>johndoe@mail.com</span>
                </div>
            </div>
            <div className="appMain">
                <div className="mainInner">
                    <Header />
                    <main className="mainContent col-xxl-10">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="heading-1 whiteBlock">
                                    <h1>Titre de la documentation SRH</h1>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                </div>
                            </div>
                        </div>
                        <ThemsHome />
                        <div className="row">
                            <MajHome />
                            <ModHome />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Homepage;