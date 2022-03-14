import React, { useState, useEffect } from 'react';
import Overview from '../Overview.js';
import Image from '../Image.js';
import VerticalGallery from '../VerticalGallery.js';
import Journey from '../Journey.js';
import Tools from '../Tools.js';
import Footer from '../Footer.js';
import stylesHome from './modules/Home.module.scss';
import styles from './modules/EKKN.module.scss';

function EKKN(props) {

    let p = props.data;

    // The animation for the page load-in
    function loadTransition() {
        var area = document.getElementById('main-container');
        area.style.top = '20em';
    }

    // Change the display of the image section depending on the screen size
    const [display, setDisplay] = useState(false);
    const displaySlides = () => {
        if (window.innerWidth < 768)
            setDisplay(true);
        else
            setDisplay(false);
    }
    window.addEventListener('resize', displaySlides);

    useEffect(() => { 
        displaySlides(); 
        loadTransition();
    }, []);

    return (
        <>
        <div id={'main'}>
            <div className={'main-project-container'}>
                {/* Above the fold: project title and background image */}
                <div className={stylesHome['project-container'] + ' container-fluid p-0'} style={{top:'1em', overflow:'hidden'}}>
                    <div className={stylesHome['projects'] + ' d-flex justify-content-center'} styles={{cursor: "default"}} >
                        <div><p className={styles['project--label']}>{p.label}</p></div>
                        <label className={stylesHome['project']} styles={{cursor: "default"}} htmlFor={stylesHome['item-1']} id={stylesHome['project-1']}>
                            <Image className={styles['background-image']} src={p.image.webp} fallback={p.image.fallback} alt={p.image.alt} />                        
                        </label>
                    </div>
                </div>
            
                <div id='main-container' className={styles['main-container'] + ' container-fluid p-0'}>
                    {/* Overview section */}
                    {<Overview data={p} />}
                    {/* The images section: either a vertical gallery display or loose image display depending on screen size */}
                    <div className={display ? 'd-none container' : 'd-block container'}>
                        <div className={'container ' + styles['image-container']}>
                            <p className={'text-center pt-3'}><strong>{p.gallery.names[0]}</strong></p>
                            <p className={'text-center pb-4'}>{p.gallery.images.label[0]}</p>
                            <Image className={styles['image-1']} src={p.gallery.images.webp[0]} fallback={p.gallery.images.fallback[0]} alt={p.gallery.images.alt[0]} />
                            <Image className={styles['dots-1']} src={'images/dots.webp'} fallback={'images/dots.png'} />  
                        </div>  
                        <div className={'container ' + styles['image-container'] + ' ' + styles['buffer-bottom']}>
                            <Image className={styles['image-2']} src={p.gallery.images.webp[1]} fallback={p.gallery.images.fallback[1]} alt={p.gallery.images.alt[1]} />
                            <p className={styles['label-1']}><strong>{p.gallery.names[1]}</strong><br/>{p.gallery.images.label[1]}</p>
                            <div className={styles['line-1']}></div> 
                            <Image className={styles['image-3']} src={p.gallery.images.webp[2]} fallback={p.gallery.images.fallback[2]} alt={p.gallery.images.alt[2]} />
                            <p className={styles['label-2']}><strong>{p.gallery.names[2]}</strong><br/>{p.gallery.images.label[2]}</p>
                            <div className={styles['line-2']}></div>
                        </div>
                    </div>
                    {display ? <VerticalGallery data={p} /> : null}
                    {/* Journey section */}
                    <br/>
                    {<Journey data={p} />}
                    <br/>
                    {/* The database showcase section */}
                    <div className={'container pb-5 ' + styles['db-container']}>
                        <h1 className={'text-title ' + styles['db-title']}>DATABASE DESIGN</h1>
                        <div className={'accent-bar ' + styles['db-bar']}></div>
                        <Image className={styles['db-image']} src={p.gallery.images.webp[3]} fallback={p.gallery.images.fallback[3]} alt={p.gallery.images.alt[3]} />
                        <br/>
                        <br/>
                        <p className='text-center'>An entity-relation model (or ER model) representing a level of design of the database.</p>
                        <br/>
                    </div>
                    {/* Tools in the stack section */}
                    <br/>
                    {<Tools />}
                    <br/>
                    {<Footer />}
                </div>
            </div>
            <div id={'white-screen'}></div>
        </div>
        </>
    );
}

export default EKKN;
