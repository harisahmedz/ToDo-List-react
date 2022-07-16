import React from 'react';
import styles from './todoDate.module.css';

const todoDate = (props)=>{
    const month =props.date.toLocaleString('en-US',{month:'long'});
    const date = props.date.getDate();
    const year = props.date.getFullYear();
    
    return (
    <div className={styles.date}>
        <h3>{month}</h3>
        <h4>{date}</h4>
        <h3>{year}</h3>
    </div>
    )
};
export default todoDate;