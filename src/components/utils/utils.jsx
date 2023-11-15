export const calcTotalPrice = (items) => {
  const total = items.reduce((acc, game) => {
    return acc + parseFloat(game.price == null ? 0 : game.price); // Convert to number
  }, 0);

  return total;
};