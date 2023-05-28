const ProductList = [
  {
    id: 1,
    title: "camera",
    price: 350,
  },
  {
    id: 2,
    title: "tripod",
    price: 350,
  },
  {
    id: 3,
    title: "Jordon",
    price: 300,
  },
];

function getProductData(id) {
  const product = ProductList.find((products) => products.id === id);

  if (product === undefined) return undefined;

  return product;
}

export { ProductList, getProductData };
