import products from "../api/product.json" with { type: "json" };
import { showProductContainer } from "./homeProductCart.js";

showProductContainer(products);
