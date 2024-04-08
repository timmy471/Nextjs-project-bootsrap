export const formatAmount = (
  amount?: number | string,
  widthDecimals = true
) => {
  if (!amount) return 0;

  if (!widthDecimals)
    return amount.toString().replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return Number(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
