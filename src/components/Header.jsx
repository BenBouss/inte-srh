import React from 'react'

const Header = () => (
    <header className="mainHeader">
        <div className="searchBox col-md-6 col-xxl-4">
            <form>
                <input type="text" placeholder="Rechercher dans la documentation"/>
                <button type="submit"></button>
            </form>
        </div>
    </header>
);

export default Header;