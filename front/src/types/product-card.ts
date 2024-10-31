import { UUID } from "crypto"
import { SVGProps } from "react"

export type ProductCard = {
    id: UUID,
    name:string,
    price:number,
    // image: SVGProps<SVGImageElement>
    image: string
}