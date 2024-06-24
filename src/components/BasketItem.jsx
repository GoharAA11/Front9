
import { useContext } from "react"
import { BookContext } from "../context"
export const BasketItem = ({ title, price, id, count }) => {
    const { dispatch } = useContext(BookContext)
    return <>
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{price * count}</td>
            <td>
                <button onClick={() => dispatch({ type: "ADD_TO_BASKET", payload: id })}>+</button>
                <button onClick={() => dispatch({ type: "DECREMENT_ITEM", payload: id })}>-</button>
                <button onClick={() => dispatch({ type: "DELETE", payload: id })}>x</button>
            </td>
        </tr>
    </>
};
