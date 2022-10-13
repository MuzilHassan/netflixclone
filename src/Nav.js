import React, { useEffect, useState } from "react";
import './Nav.css';
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            }
            else setShow(false);



        })
        return () => window.removeEventListener;
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}  `}>
            <img onClick={() => navigate('/')} className="nav__logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                alt="Logo" />
            <img onClick={() => navigate('/profile')} className="nav__avatar" src="https://avatars.githubusercontent.com/u/6759280?v=4" alt="avatar" />
        </div>
    )

}

export default Nav;