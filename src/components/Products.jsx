import * as React from 'react';
import styles from './Products.module.css'
import Counter from './Counter.jsx';



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

const Product = ({product: {nome, preco, descricao}}) => {
    return (
        <>
            <div className={styles.cardProduct}>
                <h3>{nome}</h3>
                <p className={styles.productPrice} >R$ {preco}</p>
                <p className={styles.productDescription} >{descricao}</p>
                <Counter/>
            </div>
        </>
    )
}