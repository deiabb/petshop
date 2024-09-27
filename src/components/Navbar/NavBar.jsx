import styles from './NavBar.module.css'
import * as React from 'react';
import { useState } from 'react';
import logo from '../../assets/kikiPetLg.png'
import CartWidget from '../CartWidget';

export default function NavBar() {

    const [cart, setCart] = useState([1,2,3]);


    return (
        <nav className={styles.navBar}>
             
             <img className={styles.logo} src={logo} alt="Logo da KikiPet" />

             <button className={styles.btnSearch}>
                    <span class="material-symbols-outlined">
                    search
                    </span>
                    <input className={styles.search} type="text" placeholder='O que o seu pet precisa?' /> 
            </button>
                <CartWidget/>

            <ul className={styles.navList}>
                <li className={styles.navCategory}> 
                    <a className={styles.navLink} href="">Produtos</a>
                </li>
                <li className={styles.navCategory}>
                    <a className={styles.navLink} href="">Cães</a>
                    
                </li>
                <li className={styles.navCategory}>
                    <a className={styles.navLink} href="">Gatos</a>
                </li>
                
                <li className={styles.navCategory}>
                    <a className={styles.navLink} href="">Exóticos</a>
                </li>
                <li className={styles.navCategory}>
                    <a className={styles.navLink} href="">Sobre</a>
                </li>
            </ul>
           
        
            <i></i>
        </nav>
    )
}
    
   