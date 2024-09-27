import React, { useState } from "react";
import styles from '../components/Counter.module.css'
// import { Count } from "./Count";




export const Count = ({children}) => {
    return (
        <p>{children}</p>
    )
}


export default function Counter() {
    let [count, setCount] = useState(0);
 
    return (
        <>
            
            <div className={styles.btnsContainer}>
                <div className={styles.counterContainer}>
                    <button className={styles.btnCounter} onClick={()=>setCount(count > 0 ? count -1 : count)}>-</button>
                    <Count className={styles.counter}>{count}</Count>
                    <button className={styles.btnCounter} onClick={()=>setCount(count +1)}>+</button>
                </div>
                    <button className={styles.btnRemove} onClick={()=>setCount(0)}>Remover</button>
            </div>
        </>
    )

}

