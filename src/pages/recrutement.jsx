import React from 'react';
import Header from '../components/Header'
import SidebarThem from '../components/SidebarThem'
import Sommaire from '../data/sommaire.json'

const Recrutement = (props) => {
    return (
        <div className="documentation themes">
            <Header />
            <SidebarThem />
            <div className="appMain">
                <div className="mainInner row">
                    <main className="mainContent col-xxl-8">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="heading-1 whiteBlock">
                                    <h1>{Sommaire[3].Thematique}</h1>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                </div>
                            </div>
                        </div>
                        {Sommaire[3].Chapitre.map((chap, i) => 
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
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Recrutement;