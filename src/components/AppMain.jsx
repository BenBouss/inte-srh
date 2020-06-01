import React from 'react'

const AppMain = (props) => {
    return (
        <div className={"appMain " + props.className}>
            <div className="mainInner row">
                <main className={props.className === "home" ? "mainContent col-xxl-9 " : "mainContent col-xxl-8"}>
                    {props.children}
                </main>
            </div>
        </div>
    );
}

export default AppMain;