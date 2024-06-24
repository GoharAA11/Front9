
import { ProductItem } from "./ProductItem";
import { useContext } from "react"
import { BookContext } from "../context"

export const ProductList = () => {
    const { state: { products } } = useContext(BookContext)


    return <>
        <div>
            <h3>ProductList</h3>
            <div className="list">
                {products.map((elm) => (
                    <ProductItem key={elm.id} {...elm} />
                ))}
            </div>
        </div>
    </>

};
