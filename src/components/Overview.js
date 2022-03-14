import styles from './modules/Overview.module.scss';

function Overview (props) {

    let p = props.data;
    const tagItems = p.tags.map((tag, i) => <li key={i}>{tag}</li>);

    function adjustLine() {
        let line = document.getElementById('overview-line');
        line.style.height = window.getComputedStyle(document.getElementById('overview-desc')).height;
    }
    
    function adjustBox() {
        let box = document.getElementById('overview-box');
        let tags = document.getElementById('overview-tags');
        box.style.marginLeft = (parseInt(window.getComputedStyle(tags).marginLeft.replace(/px/,""))+60)+"px";
        box.style.top = (parseInt(window.getComputedStyle(tags).height.replace(/px/,""))+120)+"px";
    }

    window.addEventListener("resize", adjustLine);
    window.addEventListener("resize", adjustBox);

    return (
        <>
        <div className={'container ' + styles['overview-container']}>
            <h1 className={styles['overview-type']}>{p.type}</h1>
            <p className={styles['overview-date']}>{p.date}</p>
            <p id='overview-desc' className={styles['overview-desc']}>{p.desc}</p>
            <div id='overview-tags' className={styles['overview-tags']}>
                <ul>{tagItems}</ul>
            </div>

            <div id='overview-box' className={styles['overview-box']}></div>
            <div id='overview-line' className={styles['overview-line']}></div>

            <img src='images/dots.png' className={styles['dots-1']} />
            <img src='images/dots.png' className={styles['dots-2']} />
        </div>
        </>
    );
}

export default Overview;