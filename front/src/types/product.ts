import { UUID } from "crypto"

export type Product = {
    id: UUID|string| undefined,
    name: string,
    description: string,
    count: number,
    price:number,
    saler:UUID|null,
    image: string
}