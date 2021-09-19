export const formatCurrency = amount => {
    const isNegative = amount < 0;
    const absoluteAmount = Math.abs(amount);

    const plat = Math.floor(absoluteAmount / 1000);

    if (plat >= 10) {
        return `${absoluteAmount / 1000}pp`;
    }

    const gold = Math.floor((absoluteAmount % 1000) / 100);
    const silver = Math.floor((absoluteAmount % 100) / 10);
    const copper = absoluteAmount % 10;

    let result = '';
    let shouldShow = false;

    if (plat > 0) {
        result += `${plat}pp `;
        shouldShow = true;
    }

    if (shouldShow || gold > 0) {
        result += `${gold}gp `;
        shouldShow = true;
    }

    if (shouldShow || silver > 0) {
        result += `${silver}sp `;
        shouldShow = true;
    }

    if (shouldShow || copper > 0) {
        result += `${copper}cp `;
    }

    result = isNegative ? `-${result}` : result;

    return result.length > 0 ? result : '0cp';
};
