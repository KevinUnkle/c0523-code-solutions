const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const map1 = prices.map((price) => {
  const newObject = {};
  newObject.price = price;
  newObject.salePrice = price / 2;
  return newObject;
});
console.log(map1);

const map2 = prices.map((price) => {
  const newArray = [];
  newArray.push('$' + price);
  return newArray;
});
console.log(map2);
