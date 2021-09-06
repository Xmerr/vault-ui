import React from 'react';
import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';

/**
 * Toolbar when not logged in and navigating the offers
 */
const Navigation = () => {
    return (
        <div className={styles.toolbar}>
            <div>
                <Link to='/'>Checking & Savings</Link>
                <Link to='/'>Investing & Retirement</Link>
                <Link to='/'>Mortgage</Link>
                <Link to='/'>Auto</Link>
                <Link to='/'>Personal Loans</Link>
            </div>
        </div>
    );
};

export default Navigation;
