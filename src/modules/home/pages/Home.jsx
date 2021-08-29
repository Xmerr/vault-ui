import React from 'react';
import { PrimaryToolbar } from '@elements/toolbars';
import { useSelector } from 'react-redux';
import { Banner, BriefStatement, Featured, SignOff } from '../views';
import styles from '../home.module.scss';

export const Home = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    return (
        <>
            <PrimaryToolbar navigation loggedIn={isLoggedIn} />
            <div className={styles.home}>
                <Banner />
                <BriefStatement />
                <Featured />
                <SignOff />
            </div>
        </>
    );
};

export default Home;
