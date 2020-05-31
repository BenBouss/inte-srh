import React, { Component } from 'react'
import Maj from '../data/maj.json'
import UCList from '../components/UCList'

const MajBlock = () => {
    return (
        <div className="lastMaj col-xl-6">
            <div className="majTitle">
                <h2>Les dernières mises à jour</h2>
            </div>
            <div className="borderBlock">
                <UCList list={Maj}/>
            </div>
        </div>
    );
}

export default MajBlock;