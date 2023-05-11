import React from 'react';

const Logo = () => {
    return (
        <div className = "logo">
            {/* Les images importées depuis la balise IMG sont directement accessibles dans "public". React va les chercher automatiquement la bas, pas besoin de préciser le chemin complet */}
            <img src = "./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;