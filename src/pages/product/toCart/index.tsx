import React, {useState} from 'react';
import styles from "./toCart.module.scss"

type ToCartProps = {
    count: number,
    onMinus: () => void;
    onClick: () => void;
    onPlus: () => void;
}

const Index = (props: ToCartProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <button onClick={props.onClick} className={styles.button}>
                В корзину
            </button>
            <div className={styles.counter}>
                <p className={styles.el} onClick={props.onMinus}>-</p>
                <p className={styles.el}>{props.count}</p>
                <p className={styles.el} onClick={props.onPlus}>+</p>
            </div>
        </div>
    );
};

export default Index;
