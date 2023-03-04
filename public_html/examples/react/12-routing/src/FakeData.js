// Here we store some fake static data to avoid using REST API calls, Redux, etc.

// Pretend that these products are loaded from a backend
export const FAKE_PRODUCTS = [
  {
    id: 1,
    name: "Jeans",
    description: "Blue Jeans",
    price: 123,
  },
  {
    id: 2,
    name: "Sneakers",
    description: "Regular sneakers",
    price: 226.99,
  },
  {
    id: 3,
    name: "T-shirt",
    description: "A shirt that reminds everyone of 'green thinking'",
    price: 57,
  },
];

export const FAKE_USER = {
  name: "Chuck",
  email: "microsoft@com.chuck",
};

export const FAKE_CART = {
  product_3: { product: FAKE_PRODUCTS[2], count: 2 },
  product_2: { product: FAKE_PRODUCTS[1], count: 1 },
};
