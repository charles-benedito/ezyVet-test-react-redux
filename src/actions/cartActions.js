export function addToCart(item) {
  return {
      type: 'ADD_TO_CART',
      item: item
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE_FROM_CART',
      item: item
  };
}

export function increaseQuantity(item) {
  return {
      type: 'INCREASE_QUANTITY',
      item: item
  };
}

export function decreaseQuantity(item) {
  return {
      type: 'DECREASE_QUANTITY',
      item: item
  };
}

export function clearCart() {
  return {
      type: 'CLEAR_CART'
  };
}

