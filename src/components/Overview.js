import styles from './modules/Overview.module.scss';

function Overview (props) {

    let p = props.data;
    const tagItems = p.tags.map((tag, i) => <li key={i}>{tag}</li>);

    return (
        <>
        <div className={'container ' + styles['overview-container']}>
            <h1 className={styles['overview-type']}>{p.type}</h1>
            <p className={styles['overview-date']}>{p.date}</p>
            <p className={styles['overview-desc']}>{p.desc}</p>
            <div className={styles['overview-tags']}>
                <ul>{tagItems}</ul>
            </div>

            <div className={styles['overview-box']}></div>
            <div className={styles['overview-line']}></div>

            <img src='images/dots.png' className={styles['dots-1']} />
            <img src='images/dots.png' className={styles['dots-2']} />
            <img src='images/dots.png' className={styles['dots-3']} />
        </div>
        </>
    );
}

export default Overview;