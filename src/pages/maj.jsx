import React from 'react'
import Header from '../components/Header'
import SidebarGlobale from '../components/SidebarGlobale'

const MajPage = () => {
    return (
        <div>
            <Header />
            <SidebarGlobale />
            <div className="appMain">
                <div className="mainInner row">
                    <main className="mainContent col-xxl-9">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="heading-1 whiteBlock">
                                    <h1>Mises à jour</h1>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default MajPage;