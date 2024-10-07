import React, { useState } from "react";
import styles from '../components/Counter.module.css'


export const Count = ({children}) => {
    return (
        <p>{children}</p>
    )
}

export default function Counter({}) {
    let [count, setCount] = useState(0);
    function aumenta() {
        setCount(count +1)
    }

    function diminui() {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(0)
        }
        
    }
    return (
        <>
            
            <div className={styles.btnsContainer}>
                <div className={styles.counterContainer}>
                    <button className={styles.btnCounter} onClick={diminui} >-</button>
                    <Count className={styles.counter}>{count}</Count>
                    <button className={styles.btnCounter} onClick={aumenta} >+</button>
                </div>
                    <button className={styles.btnRemove} onClick={()=>setCount(0)}>Remover</button>
            </div>
        </>
    )

}

