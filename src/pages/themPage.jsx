import React from 'react'
import Header from '../components/Header'
import SidebarThem from '../components/SidebarThem'
import AppMain from '../components/AppMain'
import DynamicScrollToTop from '../components/DynamicScrollToTop';
import Sommaire from '../data/sommaire.json'
import UCList from '../components/UCList'

const ThemPage = ({ match }) => {
    const {
        params: { themPath }
    } = match;
    const them = Sommaire.find(({ Path }) => Path === themPath );
    
    return (
        <div>
            <Header />
            <SidebarThem them={them}/>
            <AppMain className={"documentation"} them={them}>
                <DynamicScrollToTop />
                <div className="row">
                    <div className="col-xs-12">
                        <div className="heading-1">
                            <h1>{them.Thematique}</h1>
                        </div>
                    </div>
                </div>
                {them.Chapitre.map((chap, i) =>
                <div className="row" key={i}>
                    <div className="col-xs-12">
                        <h2>{chap.ChapTitre}</h2>
                        <div className="borderBlock">
                            <UCList list={chap.UC}/>
                        </div>
                    </div>
                </div>
                )}
            </AppMain>
        </div>
    );
}

export default ThemPage;