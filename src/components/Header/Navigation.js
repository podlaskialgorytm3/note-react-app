import React from "react";
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.scss'


const Navigation = () => (
    <nav>
    <ul className={styles.wrapper}>
        <li className={styles.navItem}>
            <NavLink end to="/articles" className={(e) => e.isActive ?  styles.navItemLinkActive : styles.navItemLink}>Articles</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to="/notes" className={(e) => e.isActive ?  styles.navItemLinkActive : styles.navItemLink}>Notes</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to="/" className={(e) => e.isActive ?  styles.navItemLinkActive : styles.navItemLink} >Twitters</NavLink>
        </li>
    </ul>
    </nav>
)



export default Navigation;