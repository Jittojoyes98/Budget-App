export const currencyChange=new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    useGrouping: false,
    minimumFractionDigits:0,
});