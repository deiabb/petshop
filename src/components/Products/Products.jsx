import React, {useState, useEffect} from 'react';
import styles from './Products.module.css'
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';


export default function Products(props){
   const [products, setProducts] = useState([]);

   useEffect(() => {
    fetchProducts('petshop')
    .then((response) => {
        setProducts(response)
    })
   }, []);

   

    return (
    
            <div className={styles.productsArea}>
                
                {
                    products.map((product) =>
                        
                        <ProductCard key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
                )}
            </div>
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