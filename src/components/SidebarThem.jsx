import React, { Component } from 'react'
import AccountComp from './AccountComp'
import Sommaire from '../data/sommaire.json'

function Title(props) {
    return(
        <h3>{props.title.Thematique}</h3>
    );
}

class SidebarThem extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="sidebar">
                <div className="heading-3">Titre de la documentation SRH</div>
                <div className="heading-2">Sommaire</div>
                <div>
                    <Title title={Sommaire[3]}/>
                    <nav>
                        <ul>
                            {Sommaire[3].Chapitre.map((chap, i) =>
                                <li key={i}>{chap.ChapTitre}</li>
                            )}
                        </ul>
                    </nav>
                </div>
                <AccountComp />
            </div>
        );
    }
}

export default SidebarThem;