import { Minus, Plus, Trash } from "lucide-react"
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "../../app/slices/cartSlice";

export default function CartOne({ id, title, desc, quantity }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="border border-black p-4">
                <div className="flex justify-between">
                    <h1 className="font-bold">{title}</h1>
                    <div className="flex items-center space-x-2">
                        {quantity > 1 ? <Minus className="cursor-pointer" onClick={() => dispatch(decreaseQuantity(id))} /> : null}
                        <p>{quantity}</p>
                        <Plus className="cursor-pointer" onClick={() => dispatch(addToCart({ id, title, desc }))} />
                    </div>
                </div>
                <p>{desc}</p>
                <Trash className="flex cursor-pointer my-4" onClick={() => dispatch(removeFromCart(id))} size={20} color="#000" />
            </div>
        </>
    )
}