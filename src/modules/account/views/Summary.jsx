import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as accountsApi from '@api/accounts';
import { formatCurrency, formatInterestRate, maskAccountNumber } from '@helpers';
import styles from './account.module.scss';

export const Summary = ({ account, fetchData }) => {
    Summary.propTypes = {
        account: PropTypes.shape({
            accountNumber: PropTypes.string.isRequired,
            available: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
            current: PropTypes.number.isRequired,
            id: PropTypes.any.isRequired,
            interestRate: PropTypes.number,
            nickname: PropTypes.string.isRequired,
            ytdInterest: PropTypes.number.isRequired,
        }).isRequired,
        fetchData: PropTypes.func.isRequired,
    };

    const [mask, setMask] = useState(true);
    const [nicknameToggle, setNicknameToggle] = useState(false);
    const [nickname, setNickname] = useState(null);

    const enableNicknameInput = () => {
        setNickname(account.nickname);
        setNicknameToggle(true);
    };

    const changeNickname = async () => {
        await accountsApi.setNickname(account.id, { nickname });
        setNicknameToggle(false);
        setNickname(null);
        fetchData();
    };

    return (
        <div className={styles.summary} style={{ borderColor: account.color }}>
            <div className={styles.row}>
                <div>
                    {nicknameToggle ? (
                        <>
                            <TextField
                                value={nickname}
                                onChange={({ target }) => setNickname(target.value)}
                            />
                            <Button
                                color='secondary'
                                onClick={() => setNicknameToggle(false)}
                                size='small'
                                variant='text'
                            >
                                Cancel
                            </Button>
                            <Button
                                color='secondary'
                                onClick={changeNickname}
                                size='small'
                                variant='text'
                            >
                                Submit
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography variant='h5'>{account.nickname}</Typography>
                            <Button
                                color='secondary'
                                onClick={enableNicknameInput}
                                size='small'
                                variant='text'
                            >
                                Edit Nickname
                            </Button>
                        </>
                    )}
                </div>
                <Typography>Available Balance</Typography>
                <Typography>Current Balance</Typography>
                <Typography>Interest YTD</Typography>
                <Typography>Annual Percentage Yield</Typography>
            </div>
            <div className={styles.row}>
                <div>
                    <Typography variant='subtitle2'>
                        Account Number:{' '}
                        {mask ? maskAccountNumber(account.accountNumber) : account.accountNumber}
                    </Typography>
                    <Button
                        color='secondary'
                        onClick={() => setMask(!mask)}
                        size='small'
                        variant='text'
                    >
                        {mask ? 'Show' : 'Hide'}
                    </Button>
                </div>
                <Typography>{formatCurrency(account.available)}</Typography>
                <Typography>{formatCurrency(account.current)}</Typography>
                <Typography>{formatCurrency(account.ytdInterest)}</Typography>
                <Typography>{formatInterestRate(account.interestRate)}</Typography>
            </div>
        </div>
    );
};
