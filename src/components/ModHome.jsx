import React, { Component } from 'react'
import Modele from '../data/maj.json'

class ModHome extends Component {
    render() {
        return (
            <div className="indexMod col-xl-6">
                <div className="modTitle">
                    <h2>Index des modèles</h2>
                    <button>Voir tout</button>
                </div>
                <div className="whiteBlock">
                    <ul className="listMaj">
                        {Modele.map((majList, i) =>
                        <li key={i} className="itemUC">
                            <div className="itemUCOuter">
                                <div className="itemUCInner">
                                    <div className="titleUC">{majList.MajTitre}</div>
                                    <div className="refInternet">{majList.MajRef}</div>
                                </div>
                            </div>
                            
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
export default ModHome;