import React, { createContext, useReducer } from "react";

export const BookContext = createContext();

export const initialState = {
    products: [],
    basket: [],
    totalValue: 0,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "ADD_TO_BASKET":
            const found = state.products.find((x) => x.id === action.payload);
            const basketItem = state.basket.find((x) => x.id === action.payload);
            if (basketItem) {
                return {
                    ...state,
                    basket: state.basket.map((x) =>
                        x.id === action.payload ? { ...x, count: x.count + 1 } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    basket: [...state.basket, { ...found, count: 1 }],
                };
            }
        case "DELETE":
            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== action.payload),
            };
        case "DECREMENT_ITEM":
            return {
                ...state,
                basket: state.basket.map((item) =>
                    item.id === action.payload && item.count > 1
                        ? { ...item, count: item.count - 1 }
                        : item
                ),
            };
        case "TOTAL":
            const total = state.basket.reduce(
                (acc, item) => acc + item.price * item.count, 0);
            return { ...state, totalValue: total };
        default:
            return state;
    }
};
