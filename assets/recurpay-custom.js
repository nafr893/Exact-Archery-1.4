function handleMutations(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      if (document.getElementsByClassName('recurpay__widget').length > 0) {
        const container = document.querySelector('.shopify-product-form');
        if (container) {
          const quantitySelector = container.querySelector('.quantity-selector');
          if (quantitySelector) {
            const addToCart = container.querySelector("add-to-cart-component");
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'quantity-cart-btn-wrapper';
            wrapperDiv.appendChild(quantitySelector);
            addToCart.appendChild(wrapperDiv);
            const addToCartButton = container.querySelector(".add-to-cart-button");
            wrapperDiv.appendChild(addToCartButton);
          }
        }
        recurpay_observer.disconnect();
        break;
      }
    }
  }
}

let recurpay_observer = new MutationObserver(handleMutations);
recurpay_observer.observe(document.body, { childList: true, subtree: true });
