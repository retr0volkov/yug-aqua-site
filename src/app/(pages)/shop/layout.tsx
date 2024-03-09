'use client'

import CartElement from "@/components/cart"
import { RecoilRoot } from "recoil"

export default function MenuLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <RecoilRoot>
            <CartElement/>
            {children}
        </RecoilRoot>
    )
}
