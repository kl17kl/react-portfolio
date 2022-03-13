import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './modules/Home.module.scss';
import bgVideo from '../video-bkgd.mp4';


function Home(props) {

    let ps = props.data;

    const [items] = useState([
        {id:'0', value: '1', label:'EKKN', type:'Point of Sale Application', date:'JAN 2022 - PRESENT', image: 'images/ekkn-preview.jpg'},
        {id:'1', value: '2', label:'HVAD', type:'Web Application', date:'NOV 2021 - DEC 2021', image: 'images/hvad-preview.png'},
        {id:'2', value: '3', label:'COAD', type:'Web Application', date:'JAN 2021 - APR 2021', image: 'images/coad-preview.png'}
    ])
    const [label, setLabel] = useState(items.at(0).label);
    const [type, setType] = useState(items.at(0).type);
    const [date, setDate] = useState(items.at(0).date);

    const handleItem = (e) => {
        var item = e.target;
        var data = items.find((e) => {
            return e.value === item.value;
        })
        if (data != undefined) {
            setType(data.type);
            setDate(data.date);
            sleep(400).then(() => {
                setLabel(data.label);
            })
        }
    }
        
    const checkItem = (e) => {
        if (e.target.className.includes('project--label')) { //User selects the label
            transition();
            var name = e.target.textContent;
            var item = items.find((e) => {
                return e.label === name;
            })
            var id = ('Home_project-' + item.value);
            var next = e.target.parentNode;
            for (var i=0; i<3; i++) {
                next = next.nextSibling;
                if (next.id.includes(id)) {
                    animateSelected(next, item.label);
                }
            }
        }
        else { //User selects the project card
            var id = e.target.parentNode.id;
            var data = items.find((e) => {
                return e.value === id.charAt(13);
            })
            if (data.label == label) {
                transition();
                animateSelected(e.target.parentNode, data.label);
            }
        }
    }

    const [animate, setAnimate] = useState(false);

    function transition() {
        setAnimate(true);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const navigate = useNavigate();

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

    useEffect(() => {
        var area = document.getElementById('white-screen');
        area.classList.remove('transition-in');
    }, []);

    return (
    <>
    {/* <video autoPlay={true} loop muted>
        <source src={bgVideo} type='video/mp4' />
    </video> */}
    <div id={'main'}>
        <div id={'main-project'} className={styles['project-container'] + ' container-fluid p-0'}>

            <div className={styles['projects'] + ' d-flex justify-content-center'}>
                <input type='radio' name='radio' value='1' id={styles['item-1']} className={animate ? styles['transition'] : ''} onClick={handleItem} defaultChecked />
                <input type='radio' name='radio' value='2' id={styles['item-2']} className={animate ? styles['transition'] : ''} onClick={handleItem} />
                <input type='radio' name='radio' value='3' id={styles['item-3']} className={animate ? styles['transition'] : ''} onClick={handleItem} />
                
                <div id={styles['project__text']}>
                    <p id={styles['project--label']} className={styles['project--label']} onClick={checkItem}>{label}</p>
                    <p id={styles['project--type']} className={animate ? styles['transition'] : ''}>{type}</p>
                    <p id={styles['project--date']} className={animate ? styles['transition'] : ''}>{date}</p>
                </div>

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