import PropTypes from 'prop-types';

export const accountPropType = PropTypes.arrayOf(
    PropTypes.shape({
        color: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired,
        id: PropTypes.any.isRequired,
        investment: PropTypes.bool,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        ytdInterest: PropTypes.number.isRequired,
    })
).isRequired;
