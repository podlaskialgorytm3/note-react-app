import React from "react";
import Navigation from "./Navigation";

import logo from '../../assets/images/logo.svg'
import Button from '../Button/Button'

import styles from './Header.moudle.scss'
const Header = () => (
    <header className={styles.wrapper}>
        <img src={logo} alt="FavNote"/>
        <Navigation />
        <Button secondary>Add new item</Button>
    </header>
)

export default Header;