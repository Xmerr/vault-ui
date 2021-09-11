import PropTypes from 'prop-types';

export const accountPropType = PropTypes.arrayOf(
    PropTypes.shape({
        available: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        current: PropTypes.number.isRequired,
        id: PropTypes.any.isRequired,
        interestRate: PropTypes.number,
        investment: PropTypes.bool.isRequired,
        nickname: PropTypes.string.isRequired,
        typeName: PropTypes.string.isRequired,
        ytdInterest: PropTypes.number.isRequired,
    })
).isRequired;
