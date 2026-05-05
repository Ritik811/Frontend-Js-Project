const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (size) => {
  cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${size} </i>`;
};
