import React from "react";
import styles from './Section.module.css';


const Section = ({ title, children }) => {
    return (
        <div>
            <h2 className={styles.Title}>{title}</h2>
            {children}
        </div>
    )
}


export default Section;