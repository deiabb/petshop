import React from 'react';
import styles from './CartWidget.module.css';




export default function CartWidget() {
  
    return (
       
        <>
                <p className={styles.cart}>
                <span class="material-symbols-outlined">
                shopping_cart_checkout
                </span>
                </p>
                <p>0</p>
                <p className={styles.counter} ></p>
                

        </>
    )
}