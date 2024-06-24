
import { useContext } from "react"
import { BookContext } from "../context"
import { BasketItem } from "./BasketItem";

export const Basket = () => {
    const { state: { basket } } = useContext(BookContext);

    return <>
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((elm) => (
                        <BasketItem key={elm.id} {...elm} />
                    ))}
                </tbody>
            </table>
        </div>
    </>
};
