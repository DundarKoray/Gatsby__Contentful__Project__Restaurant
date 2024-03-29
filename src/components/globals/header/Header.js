import React from 'react';
import defaultImg from '../../../images/bcg/homeBcg.jpeg'
import './header.css'


const HomeHeader = ({img, children}) => {
    const backgroundStyle= {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img}) center/cover fixed no-repeat`
    }
    return (
        <header className="home-header" style={backgroundStyle}>
            {children}
        </header>
    );
};


const SubPageHeader = ({img, children}) => {
    const backgroundStyle1= {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img}) center/cover fixed no-repeat`
    }
    return (
        <header className="sub-page-header" style ={backgroundStyle1}>
            {children}
        </header>
    );
};


HomeHeader.defaultProps = {
    img: defaultImg,
}

SubPageHeader.defaultProps = {
    img: defaultImg,
}

export { HomeHeader, SubPageHeader};