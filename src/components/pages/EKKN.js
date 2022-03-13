import React, { useState, useEffect } from 'react';
import Overview from '../Overview.js';
import Slideshow from '../Slideshow.js';
import Journey from '../Journey.js';
import Tools from '../Tools.js';
import Footer from '../Footer.js';
import stylesHome from './modules/Home.module.scss';
import styles from './modules/EKKN.module.scss';

function EKKN(props) {

    let p = props.data;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function loadTransition() {
        var area = document.getElementById('main-container');
        area.style.top = '20em';
    }

    const [display, setDisplay] = useState(false);
    const displaySlides = () => {
        if (window.innerWidth < 768)
            setDisplay(true);
        else
            setDisplay(false);
    }
    useEffect(() => { displaySlides(); }, []);

    window.addEventListener('resize', displaySlides);

    return (
        <>
        <div id={'main'}>
            <div className={'main-project-container'}>
                <div className={stylesHome['project-container'] + ' container-fluid p-0'} style={{top:'1em', overflow:'hidden'}}>
                    <div className={stylesHome['projects'] + ' d-flex justify-content-center'} styles={{cursor: "default"}} >
                        <div><p className={styles['project--label']}>{p.label}</p></div>
                        <label className={stylesHome['project']} styles={{cursor: "default"}} htmlFor={stylesHome['item-1']} id={stylesHome['project-1']}>
                            <img className={styles['background-image']} src={p.image} alt='project background' loading='eager' draggable='false' onLoad={loadTransition} />
                        </label>
                    </div>
                </div>
            
                <div id='main-container' className={styles['main-container'] + ' container-fluid p-0'}>

                    {<Overview data={p} />}

                    <div className={display ? 'd-none container' : 'd-block container'}>
                        <div className={'container ' + styles['image-container']}>
                            <p className={'text-center py-3'}><strong>Main Terminal</strong></p>
                            <img src='images/ekkn1.png' className={styles['image-1']} alt='screen preview 1' />
                            <img src='images/dots.png' className={styles['dots-1']} />
                        </div>  
                        <div className={'container ' + styles['image-container'] + ' ' + styles['buffer-bottom']}>
                            <img src='images/ekkn2.png' className={styles['image-2']} alt='screen preview 2' />
                            <p className={styles['label-1']}><strong>Item Manager</strong><br/>Add, modify, and delete items.<br />Lookup item description, price, discount, taxes, group name, and inventory.</p>
                            <div className={styles['line-1']}></div> 
                            <img src='images/ekkn2.png' className={styles['image-3']} alt='screen preview 3' />
                            <p className={styles['label-2']}><strong>Reports</strong><br/>View and export financial sales, daily sales, inventory, and item sales reports.<br/>Analyze product performances and trends based on consumer purchases.</p>
                            <div className={styles['line-2']}></div>
                        </div>
                    </div>
                    
                    {display ? <Slideshow data={p} /> : null}
                    {<Journey data={p} />}

                    <div className={'container ' + styles['db-container']}>
                        <h1 className={'text-title ' + styles['db-title']}>DATABASE DESIGN</h1>
                        <div className={'accent-bar ' + styles['db-bar']}></div>
                        <img src='/images/ekkn-db-design.png' className={styles['db-image']} alt='E.R. diagram' />
                        <br/>
                        <br/>
                        <p className='text-center'>An entity-relation model (or ER model) representing a level of design of the database.</p>
                    </div>

                    {<Tools />}
                    {<Footer />}

                </div>
            </div>
            <div id={'white-screen'}></div>
        </div>
        </>
    );
}

export default EKKN;
