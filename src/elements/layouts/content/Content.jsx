import React from 'react';
import PropTypes from 'prop-types';
import styles from './content.module.scss';

export const Content = ({ children }) => {
    Content.propTypes = {
        children: PropTypes.node,
    };

    return <div className={styles.content}>{children}</div>;
};
