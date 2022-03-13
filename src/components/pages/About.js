import React, { useState, useEffect } from 'react';
import styles from './modules/About.module.scss';

function About() {

    useEffect(() => {
        var area = document.getElementById('white-screen');
        area.classList.remove('transition-in');
    }, []);

    return (
        <>
        <div id={'main'}>
            <div id={styles['about']} className={'container-fluid d-flex ' + styles['about-container']}>
                <div className={'col-4 ' + styles['contact-info']}>
                    <p><span>E-mail: </span><a href='https://@mailto:g.hyunlee12@gmail.com' target={'_blank'}>g.hyunlee12@gmail.com</a></p>
                    <p><span>LinkedIn: </span><a href='https://www.linkedin.com/in/katie-lee-08849417b/' target={'_blank'}>linkedin.com/in/katie-lee</a></p>
                    <p><span>GitHub: </span><a href='https://github.com/kl17kl' target={'_blank'}>github.com/kl17kl</a></p>
                </div>
                <div className={'col-6 ' + styles['about-info']}>
                    <h1 className={styles['header']}>About Me</h1>
                    <p>Welcome to my project portfolio! I'm Katie, a recent graduate with a major in Computer Science. I'm passionate about delivering impactful solutions through software, web, and application development. Throughout my studies, I've enhanced my soft and technical skills and gained valuable co-op experience in application development, web development and design, and UX design. Interested in connecting? Feel free to reach out!</p>
                </div>
            </div>
            <div id={'white-screen'} className={'transition-in'}></div>
        </div>
        </>
    );
}

export default About;