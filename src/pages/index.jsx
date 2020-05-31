import React from 'react'

import Header from '../components/Header'
import SidebarGlobale from '../components/SidebarGlobale'
import AppMain from '../components/AppMain'
import ThemesBlock from '../components/ThemesBlock'
import MajBlock from '../components/MajBlock'
import ModeleBlock from '../components/ModeleBlock'

const Homepage = () => {
    return (
        <div>
            <Header />
            <SidebarGlobale />
            <AppMain>
                <div className="row">
                    <div className="col-xs-12">
                        <div>
                            <h1>Titre de la documentation SRH</h1>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <MajBlock />
                    <ModeleBlock />
                </div>
                <ThemesBlock />
            </AppMain>
        </div>
    );
}

export default Homepage;