'use client'

import { cartState } from "./cart"
import { useRecoilState } from "recoil"

export default function Add({ productId }: { productId: number }) {
    const [cart, setCart]: [number[], any] = useRecoilState(cartState)

    const handleCart = () => {
        cart.includes(productId) ? () => {
            cart.splice(cart.indexOf(productId), 1)
        } : () => {
            cart.push(productId)
        }
    }

    return (
        <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {cart.includes(productId) ? "Удалить из корзины":"Добавить в корзину"}
        </button>
    )
}