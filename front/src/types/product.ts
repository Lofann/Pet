import { UUID } from "crypto"

export type Product = {
    id: UUID,
    name: string,
    description: string,
    count: number,
    price:number,
    saler:UUID,
    image: string
}