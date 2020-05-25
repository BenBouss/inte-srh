import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Maj from '../data/maj.json'

class MajHome extends Component {
    render() {
        return (
            <div className="lastMaj col-xl-6">
                <div className="majTitle">
                    <h2>Les dernières mises à jour</h2>
                    <button><Link to="/mises-a-jour">Voir tout</Link></button>
                </div>
                <div className="whiteBlock">
                    <ul className="listMaj">
                        {Maj.map((majList, i) =>
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
export default MajHome;