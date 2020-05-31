import React from 'react'
import Header from '../components/Header'
import SidebarThem from '../components/SidebarThem'
import AppMain from '../components/AppMain'
import DynamicScrollToTop from '../components/DynamicScrollToTop';
import Sommaire from '../data/sommaire.json'

const ThemPage = ({ match }) => {
    const {
        params: { themPath }
    } = match;
    const them = Sommaire.find(({ Path }) => Path === themPath );
    
    return (
        <div className="documentation theme">
            <Header />
            <SidebarThem them={them}/>
            <AppMain them={them}>
                <DynamicScrollToTop />
                <div className="row">
                    <div className="col-xs-12">
                        <div className="heading-1 whiteBlock">
                            <h1>{them.Thematique}</h1>
                        </div>
                    </div>
                </div>
                {them.Chapitre.map((chap, i) =>
                <div className="row" key={i}>
                    <div className="col-xs-12">
                        <h2>{chap.ChapTitre}</h2>
                        <div className="whiteBlock">
                            <ul>
                                {chap.UC.map((UCList, i) =>
                                <li key={i} className="itemUC">
                                    <div className="itemUCOuter">
                                        <div className="itemUCInner">
                                            <div className="titleUC">{UCList.UCTitre}</div>
                                            <div className="refInternet">{UCList.UCRef}</div>
                                        </div>
                                    </div>
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                )}
            </AppMain>
        </div>
    );
}

export default ThemPage;