import styles from './NavBar.module.css'
import KikiLogo from './../assets/kikiPet.png'


function Menu() {
    return (
        <nav>
            <ul className={styles.navList} >
                <li className={styles.navItem} 
                >
                    <img className={styles.logo} src={KikiLogo} alt="" /></li>
                
                <li className={styles.navItem} >Produtos</li>
                <li className={styles.navItem} >Cães</li>
                <li className={styles.navItem} >Gatos</li>
                <li className={styles.navItem} >Sobre</li>
            </ul>
        </nav>
    )
}

export default Menu