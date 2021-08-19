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
                <Link>Checking & Savings</Link>
                <Link>Investing & Retirement</Link>
                <Link>Mortgage</Link>
                <Link>Auto</Link>
                <Link>Personal Loans</Link>
            </div>
        </div>
    );
};

export default Navigation;
