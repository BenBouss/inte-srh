import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import ThemsHome from '../components/ThemHome'
import MajHome from '../components/MajHome'
import ModHome from '../components/ModHome'
import SidebarGlobale from '../components/SidebarGlobale'

const Homepage = () => {
    return (
        <div>
            <Header />
            <SidebarGlobale />
            <div className="appMain">
                <div className="mainInner row">
                    <main className="mainContent col-xxl-9">
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