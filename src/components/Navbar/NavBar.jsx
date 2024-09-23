import styles from './NavBar.module.css'
import * as React from 'react';
import logo from '../../assets/kikiPetLg.png'
import { useState, useEffect, useRef } from 'react';


function NavBar({categories}) {
    return (
        <nav className={styles.navBar}>
           
            <img className={styles.logo} src={logo} alt="Logo da KikiPet" />
            <button className={styles.btnSearch}>
                <span class="material-symbols-outlined">
                search
                </span>
                <input className={styles.search} type="text" placeholder='O que o seu pet precisa?' /> 
            </button>
            
           
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
    
    


export default NavBar