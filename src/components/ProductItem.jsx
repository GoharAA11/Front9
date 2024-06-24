
import { useContext } from "react"
import { BookContext } from "../context"

export const ProductItem = ({ title, id, price, photo, }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <div>
            <img src={photo} alt={title} />
            <p>{title}</p>
            <p><strong>{price} USD</strong></p>
            <button onClick={() => dispatch({ type: "ADD_TO_BASKET", payload: id })}>Move</button>
        </div>
    );
};
