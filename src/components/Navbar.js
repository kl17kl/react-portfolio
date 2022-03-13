import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';


function Navbar(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const navigate = useNavigate();

    function checkNav(destination) {
        setClick(false);
        if (window.location.pathname != destination) {
            document.body.style.pointerEvents='none';
            var area = document.getElementById('white-screen');
            area.classList.add('transition-in');
    
            sleep(2000).then(() => {
                document.body.style.pointerEvents='all';
                navigate(destination);
            });
        }
    }

    return (
    <>
        <nav className='container-fluid'>
            <div className='row text-center overflow-hidden'>
                <div id='home' className='col d-flex justify-content-center align-items-start'>
                     <a className='n-item' onClick={() => checkNav('/')}>HOME</a>
                </div>
                <div id='brand' className='col-8'>
                    <div className='col'>
                        <div className='brand d-flex row justify-content-center align-items-start'>KATIE LEE</div>
                        <div className='brand__sub d-flex row justify-content-center align-items-end'>DEVELOPER | UI & UX DESIGNER</div>
                    </div>            
                </div>
                <div id='about' className='col d-flex justify-content-center align-items-start'>
                    <a className='n-item' onClick={() => checkNav('/About')}>ABOUT</a>
                </div>
                {/* The hamburger menu for smaller screens */}
                <div className='col menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-xmark' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/' className="nav-link" onClick={() => checkNav('/')}>HOME</Link></li>
                    <li><Link to='/about' className="nav-link" onClick={() => checkNav('/About')}>ABOUT</Link></li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;