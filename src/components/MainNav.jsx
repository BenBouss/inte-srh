import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MainNav extends Component {
    render() {
        return (
            <nav>
                <ul className="menuNav">
                    <li className="menuHome"><NavLink exact to="/">Accueil</NavLink></li>
                    <li className="menuModeles"><NavLink to="/modeles">Index des modèles</NavLink></li>
                    <li className="menuMaj"><NavLink to="/mises-a-jour">Mises à jour</NavLink></li>
                    <li className="menuFav"><NavLink to="/favoris">Mes favoris</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default MainNav;
