import React from 'react';
import { PrimaryToolbar } from '@elements/toolbars';
import { Banner, BriefStatement, Featured, SO } from '../views';
import styles from '../home.module.scss';

const Home = () => {
    return (
        <>
            <PrimaryToolbar navigation />
            <div className={styles.home}>
                <Banner />
                <BriefStatement />
                <Featured />
                <SO />
            </div>
        </>
    );
};

export default Home;
