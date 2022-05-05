import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { API, newAPI } from "../helpers/const";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const clientContext = React.createContext();

const initState = {
  products: [],
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  myCart: null,
  productDetails: null,
  user: null,
  phones: [],
  macbooks: [],
  ipads: [],
  imacs: [],
  watch: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_IN_CART":
      return { ...state, cartCount: action.payload };
    case "GET_PRODUCTS_FROM_CART":
      return { ...state, myCart: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    case "GET_PHONES":
      return { ...state, phones: action.payload };
    case "GET_MACBOOKS":
      return { ...state, macbooks: action.payload };
    case "GET_IPADS":
      return { ...state, ipads: action.payload };
    case "GET_IMACS":
      return { ...state, imacs: action.payload };
    case "GET_WATCHS":
      return { ...state, watch: action.payload };
    default:
      return state;
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const getProducts = async () => {
    const response = await axios(`${API}${window.location.search}`);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  const getPhones = async () => {
    const response = await axios(`${API}?productCategory=iphone`);
    const action = {
      type: "GET_PHONES",
      payload: response.data,
    };
    dispatch(action);
  };
  const getMacbooks = async () => {
    const response = await axios(`${API}?productCategory=MacBook`);
    const action = {
      type: "GET_MACBOOKS",
      payload: response.data,
    };
    dispatch(action);
  };
  const getIpads = async () => {
    const response = await axios(`${API}?productCategory=iPad`);
    const action = {
      type: "GET_IPADS",
      payload: response.data,
    };
    dispatch(action);
  };

  const getImacs = async () => {
    const response = await axios(`${API}?productCategory=iMac`);
    const action = {
      type: "GET_IMACS",
      payload: response.data,
    };
    dispatch(action);
  };

  const getWatchs = async () => {
    const response = await axios(`${API}?productCategory=AppleWatch`);
    const action = {
      type: "GET_WATCHS",
      payload: response.data,
    };
    dispatch(action);
  };

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = currentPage * productsPerPage - productsPerPage;
  const products = state.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalCount = state.products.length;

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    const newProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };

    newProduct.subPrice = product.price * newProduct.count;
    cart.products.push(newProduct);
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    const action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return false;
    }
    let prod = cart.products.find((item) => {
      return item.product.id === id;
    });

    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newProducts = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.products = newProducts;
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    const action = {
      type: "DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const getProductsFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { products: [] };
    const action = {
      type: "GET_PRODUCTS_FROM_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountProductInCart = (id, count) => {
    if (count < 1) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
      }
      return item;
    });
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductsFromCart();
  };

  const getProductDetails = async (id) => {
    const response = await axios(`${API}/${id}`);
    const action = {
      type: "GET_PRODUCT_DETAILS",
      payload: response.data,
    };
    dispatch(action);
  };

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const addDelivery = async (newFeedback) => {
    await axios.post(newAPI, newFeedback);
  };

  return (
    <clientContext.Provider
      value={{
        addDelivery: addDelivery,
        getProducts: getProducts,
        handlePagination: handlePagination,
        addProductToCart: addProductToCart,
        checkProductInCart: checkProductInCart,
        deleteProductInCart: deleteProductInCart,
        getProductsFromCart: getProductsFromCart,
        changeCountProductInCart: changeCountProductInCart,
        getProductDetails: getProductDetails,
        getPhones: getPhones,
        getMacbooks: getMacbooks,
        getIpads: getIpads,
        getWatchs: getWatchs,
        getImacs: getImacs,
        authWithGoogle: authWithGoogle,
        logOut: logOut,

        products: products,
        totalCount: totalCount,
        productsPerPage: productsPerPage,
        cartCount: state.cartCount,
        myCart: state.myCart,
        productDetails: state.productDetails,
        user: state.user,
        phones: state.phones,
        macbooks: state.macbooks,
        ipads: state.ipads,
        watch: state.watch,
        imacs: state.imacs,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;
