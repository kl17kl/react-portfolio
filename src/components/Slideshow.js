import React, {useState} from 'react';
import styles from './modules/Slideshow.module.scss';

function Slideshow(props) {

    let names = props.data.demo.names;
    let images = props.data.demo.images;

    const [focus, setFocus] = useState(0);
    const label = ["Lookup item description, price, discount, taxes, group name, and inventory.","View and export financial sales, daily sales, inventory, and item sales reports. Analyze product performances and trends based on consumer purchases."]
     
    const slideImages = images.map((image, i) => 
    <div key={i}>
        <p className={focus==i ? 'd-block text-center ' + styles['slide-label']: 'd-none'}>{names[i]}</p>
        <img src={image} className={focus==i ? 'd-block ' + styles['slide-image'] : 'd-none ' + styles['slide-image']} alt='Screen image' />
        <p className={focus==i ? 'd-block' : 'd-none'}>{label[i]}</p>
    </div>);
    
    function switchSlide(n) {
        if (focus+n < 0) {
            setFocus(images.length-1);
        }
        if (focus+n >= images.length) {
            setFocus(0);
        }
        else {
            setFocus(focus+n)
        }
    }


    return (
        <>
        <div className={'container ' + styles['slides-container']}>
            {slideImages}
            <div className={styles['slides-background']}></div>
            <p className={styles['prev']} onClick={() => switchSlide(-1)}>&#10094;</p>
            <p className={styles['next']} onClick={() => switchSlide(1)}>&#10095;</p>
        </div>
        </>
    );
}

export default Slideshow;