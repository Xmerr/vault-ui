export const formatCurrency = amount => {
    const plat = Math.floor(amount / 1000);
    const gold = Math.floor((amount % 1000) / 100);
    const silver = Math.floor((amount % 100) / 10);
    const copper = amount % 10;

    let result = '';

    if (plat > 0) {
        result += `${plat}pp `;
    }

    if (gold > 0) {
        result += `${gold}gp `;
    }

    if (silver > 0) {
        result += `${silver}sp `;
    }

    if (copper > 0) {
        result += `${copper}cp `;
    }

    return result.length > 0 ? result : '0cp';
};
