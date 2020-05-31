import React from 'react'
import { Link } from 'react-router-dom'
import Modele from '../data/maj.json'
import UCList from './UCList'

const ModeleBlock = () => {
    return (
        <div className="indexMod col-xl-6">
            <div className="modTitle flex-items-center">
                <h2>Index des modèles</h2>
                <button><Link to="/modeles">Voir tout</Link></button>
            </div>
            <div className="borderBlock">
                <UCList list={Modele}/>
            </div>
        </div>
    );
}

export default ModeleBlock;