import * as React from 'react';
import styles from './Products.module.css'
import Counter from './Counter.jsx';
import { useState } from 'react';


export default function Products({products}){
   
    return (
        <>
            
            <div className={styles.productsArea}>
            {products.map((singleProduct) => {
                return <Product product={singleProduct}/>
            })}
            </div>
        </>
    )
}

const Product = ({product: {nome, preco, descricao, img}}) => {
    const [showDescription, setShownDescription] = useState(false);

    function handleShowDescription() {
        setShownDescription(!showDescription);
    }
    return (
        <>
            <div className={styles.cardProduct}>
                <div className={styles.imgProduct}>
                    <img className={styles.image} src={img} alt="" />
                </div>
                <h3 className={styles.titleProduct}>{nome}</h3>
                <p className={styles.productPrice} >R$ {preco}</p>
                <Counter/>
                <button className={styles.btnDescription} onClick={handleShowDescription}>{showDescription ? 'Esconder' : 'Mostrar descrição'}</button>
                {showDescription && <p className={styles.productDescription}>{descricao}</p>}
            </div>
           
        </>
    )
}