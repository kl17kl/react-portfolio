import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './modules/Home.module.scss';

function Home(props) {

    const [items] = useState([props.data.EKKN, props.data.HVAD, props.data.COAD]);
    const [label, setLabel] = useState(items.at(0).label);
    const [type, setType] = useState(items.at(0).type);
    const [date, setDate] = useState(items.at(0).date);

    // This function updates the center displayed data (project name, type, and duration)
    const handleItem = (e) => {
        var item = e.target;
        var data = items.find((e) => { return e.value === parseInt(item.value); })
        if (data != undefined) {
            setType(data.type);
            setDate(data.date);
            sleep(400).then(() => {
                setLabel(data.label);
            })
        }
    }
    
    // This function checks to see if the user selects a project card/label that is in focus
    const checkItem = (e) => {
        if (e.target.className.includes('project--label')) {
            setAnimate(true);
            var name = e.target.textContent;
            var item = items.find((e) => { return e.label === name; })
            var id = ('Home_project-' + item.value);
            var next = e.target.parentNode;
            for (var i=0; i<3; i++) {
                next = next.nextSibling;
                if (next.id.includes(id)) { // If user selects project label...
                    animateSelected(next, item.label); // ...Play animation and navigate to page
                }
            }
        } else {
            var id = e.target.parentNode.id;
            var data = items.find((el) => { return el.value === parseInt(id.charAt(13)); })
            try {
                if (data.label == label) { // If the user selects a project card that is in focus (in the center)...
                    setAnimate(true);
                    animateSelected(e.target.parentNode, data.label); // ...Play animation and navigate to page
                }
            } catch(ignore){}
        }
    }

    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();
    function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

    // This function first plays an animation (zooms into project picture) then navigates to the project page
    function animateSelected(target, label) {
        document.body.style.pointerEvents='none';
        var area = document.getElementById('main-project'); 
        area.style.overflow = 'hidden';
        target.classList.add(styles['selected']);

        sleep(1200).then(() => {
            document.body.style.pointerEvents='all';
            navigate('/' + label);
        });
    }

    // Automatically play page load-in transition
    useEffect(() => {
        var area = document.getElementById('white-screen');
        area.classList.remove('transition-in');
    }, []);


    return (
    <>
    <div id={'main'}>
        <div id={'main-project'} className={styles['project-container'] + ' container-fluid p-0'}>
            <div className={styles['projects'] + ' d-flex justify-content-center'}>
                {/* The radio buttons */}
                <input type='radio' name='radio' value='1' id={styles['item-1']} className={animate ? styles['transition'] : ''} onClick={handleItem} defaultChecked />
                <input type='radio' name='radio' value='2' id={styles['item-2']} className={animate ? styles['transition'] : ''} onClick={handleItem} />
                <input type='radio' name='radio' value='3' id={styles['item-3']} className={animate ? styles['transition'] : ''} onClick={handleItem} />
                {/* The center display text */}
                <div id={styles['project__text']}>
                    <p id={styles['project--label']} className={styles['project--label']} onClick={checkItem}>{label}</p>
                    <p id={styles['project--type']} className={animate ? styles['transition'] : ''}>{type}</p>
                    <p id={styles['project--date']} className={animate ? styles['transition'] : ''}>{date}</p>
                </div>
                {/* The project cards */}
                <label className={styles['project']} htmlFor={styles['item-1']} id={styles['project-1']} onClick={checkItem}>
                    <img src={items.at(0).image} alt='project photo 1' loading='eager' draggable='false' />
                </label>
                <label className={styles['project']} htmlFor={styles['item-2']} id={styles['project-2']} onClick={checkItem}>
                    <img src={items.at(1).image} alt='project photo 2' loading='eager' draggable='false' />
                </label>
                <label className={styles['project']} htmlFor={styles['item-3']} id={styles['project-3']} onClick={checkItem}>
                    <img src={items.at(2).image} alt='project photo 3' loading='eager' draggable='false' />
                </label>
            </div>
        </div>
        <div id={'white-screen'} className={'transition-in'}></div>
    </div>
    </>
  );
}

export default Home;