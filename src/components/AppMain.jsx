import React from 'react'

const AppMain = (props) => {
    return (
        <div className="appMain">
            <div className="mainInner row">
                <main className="mainContent col-xxl-10">
                    {props.children}
                </main>
            </div>
        </div>
    );
}

export default AppMain;