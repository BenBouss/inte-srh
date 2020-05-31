import React from 'react'

const UCList = (props) => {
    return (
        <ul className="ucList">
            {props.list.map((list, i) =>
            <li key={i} className="itemUC">
                <div className="itemUCOuter flex-items-center">
                    <div>
                        <div className="titleUC">{list.UCTitre}</div>
                        <div className="refInternet">{list.UCRef}</div>
                    </div>
                </div>
            </li>
            )}
        </ul>
    );
}

export default UCList;