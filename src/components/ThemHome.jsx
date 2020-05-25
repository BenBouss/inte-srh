import React, { Component } from 'react'
import Sommaire from '../data/sommaire.json'
import { Link } from 'react-router-dom';

class ThemsHome extends Component {
    render() {
        return (
            <div className="row themes">
                <div className="col-xs-12">
                    <h2>Thèmes</h2>
                </div>
                {Sommaire.map((them, i) => 
                <div className="col-xs-12 col-md-6 col-xl-4 col-xxl-3" key={i}>
                    <div className="themInfo whiteBlock" key={i}>
                        <Link to="/theme/Recrutement-embauche">
                            <img src={require(`../${them.ThemIcon}`)} alt={them.Thematique}  />
                            <h3>{them.Thematique}</h3>
                            <div className="nbUC">{them.NbUC +" Documents"}</div>
                        </Link>
                    </div>
                </div>
                )}
            </div>
        );
    }
}
export default ThemsHome;