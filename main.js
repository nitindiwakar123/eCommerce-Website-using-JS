import './style.css'

import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';
import { getCartProductFromLS } from './getCartProductFromLS';

const arrLocalStorageProducts = getCartProductFromLS();

//Define a function name `showProductContainer` that takes an array of products as input.
showProductContainer(products);