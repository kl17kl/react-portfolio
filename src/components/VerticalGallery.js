import React from 'react';
import Image from './Image.js';
import styles from './modules/VerticalGallery.module.scss';

function VerticalGallery(props) {

    let names = props.data.gallery.names;
    let images = props.data.gallery.images;

    const galleryItem = names.map((name, i) => 
    <div key={i} className={'container'}>
        <p className={'text-center ' + styles['gallery-name']}>{name}</p>
        <Image src={images.webp[i]} fallback={images.fallback[i]} className={styles['gallery-image']} alt={images.alt[i]} />
        <p className={'text-center'}>{images.label[i]}</p>
    </div>);

    return(
        <>
        <div className={'container-fluid pb-5 mb-5'}>
            {galleryItem}
        </div>
        </>
    );
};

export default VerticalGallery;