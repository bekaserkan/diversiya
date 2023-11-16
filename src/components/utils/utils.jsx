export const calcTotalPrice = (items, localQuantities) => {
  const total = items.reduce((acc, item) => {
    const quantity = localQuantities[item.uid] || 1;
    const itemPrice = parseFloat(item.price) || 0; 

    return acc + quantity * itemPrice;
  }, 0);

  return total;
};
