import { AnyAction } from "redux";
import cartSlice, {
  addToCart,
  updateQuantity, removeFromCart
} from "../../../features/cart/cart-slice";

describe("cart slice", () => {
  describe("cart reducer", () => {
    it("should return the initial state", () => {
      const cartStore = cartSlice(undefined, {} as AnyAction);

      expect(cartStore.cart).toEqual([]);
    });
  });

  it("should add item to cart", () => {
    const itemToAdd = {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "mens clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantity: 1,
    };

    const cartStore = cartSlice(undefined, {
      type: addToCart.type,
      payload: itemToAdd,
    });
    expect(cartStore.cart).toEqual([itemToAdd]);
  });

  it("addToCart: should increase quantity when item is already in cart", () => {
    const itemToAdd = {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "mens clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantity: 1,
    };

    const itemsInCart = [
      {
        id: 1,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "mens clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        quantity: 2,
      },
    ];

    const state = {
      cart: [itemToAdd],
    };

    const cartStore = cartSlice(state, {
      type: addToCart.type,
      payload: itemToAdd,
    });
    expect(cartStore.cart).toEqual(itemsInCart);
  });

  it("updateQuantity: should update item quantity in cart", () => {
    const itemsInCart = [
      {
        id: 1,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "mens clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        quantity: 3,
      },
    ];

    const state = { cart: itemsInCart };

    const itemValues = { id: 1, value: 3 };

    const cartStore = cartSlice(state, {
      type: updateQuantity.type,
      payload: itemValues,
    });
    expect(cartStore.cart).toEqual(itemsInCart);
  });

  it("should remove item from cart", () => {

    const itemToRemove = {
        id: 2,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "mens clothing",
        image:
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        quantity: 1,
      };
    
    const itemsInCart = [
        {
            id: 2,
            title: "Mens Cotton Jacket",
            price: 55.99,
            description:
              "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            category: "mens clothing",
            image:
              "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            quantity: 1,
          },
        
        
      ];

      
    const state = { cart: itemsInCart }

    const cartStore = cartSlice(state, {
      type: removeFromCart.type,
      payload: itemToRemove,
    });
    
    expect(cartStore.cart).toEqual([]);
  });
});
