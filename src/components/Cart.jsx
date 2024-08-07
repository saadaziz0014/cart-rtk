import { useSelector } from "react-redux"
import CartOne from "./CartOne"
import { useNavigate } from "react-router-dom"

export default function Cart() {
    const navigate = useNavigate()
    const cart = useSelector((state) => state)
    if (cart && cart.length == 0) {
        return (
            <>
                <h1 className="text-center">Move to Product Page to add items <span className="text-blue-500 cursor-pointer underline" onClick={() => navigate('/')}>Products</span> </h1>
            </>
        )
    }
    else {
        return (
            <>
                {cart.map((item) => (
                    <div className="flex flex-col space-y-4">
                        <CartOne {...item} />
                    </div>
                ))}
            </>
        )
    }
}