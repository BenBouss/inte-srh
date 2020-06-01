import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Account from './Account'
import ThemList from './ThemsList'

class SidebarThem extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        show: false
    }
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render() {
        return(
            <div className="sidebar">
                <div className="heading-3">Sommaire</div>
                <div className="currentThem flex-items-center">
                    <img className="logoThem" src={require(`../${this.props.them.ThemIcon}`)} alt={this.props.them.Thematique}  />
                    <div>{this.props.them.Thematique}</div>
                </div>
                <nav className="navChap">
                    <ul>
                        {this.props.them.Chapitre.map((chap, i) =>
                            <li key={i}>
                                <Link to={`/theme/${this.props.them.Path}`}>{chap.ChapTitre}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <Account />
            {/* <div className="sidebar summary">
                <div className="heading-3">Sommaire
                {this.state.show && <div className="closeButton" onClick={this.toggle}></div>}
                </div>
                {this.state.show ? null :
                    <div className="themButton" onClick={this.toggle}>
                        <div>
                            <img className="logoThem" src={require(`../${this.props.them.ThemIcon}`)} alt={this.props.them.Thematique}  />
                            <div className="themAll">Voir toutes les thématiques</div>
                        </div>
                        <div className="heading-4">{this.props.them.Thematique}</div>
                    </div>
                }
                {this.state.show && 
                    <div className="navThem" onClick={this.toggle}>
                        <ThemList />
                    </div>
                }
                {this.state.show ? null : 
                    <nav className="navChap">
                        <ul>
                            {this.props.them.Chapitre.map((chap, i) =>
                                <li key={i}>
                                    <Link to={`/theme/${this.props.them.Path}`}>{chap.ChapTitre}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                }
                <Account />
            </div> */}
            </div>
        );
    }
}

export default SidebarThem;