import ProductCardsList from "../../components/product-list/product-list";
import { ProductCards } from "../../types/product-cards";



export default function AllProductPage(): JSX.Element {

    
    const prodictlist:ProductCards = [{
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  
]

    return (
      <>
  
  

            <main className="main">

                <h1>ALL PAGE</h1>

                <ProductCardsList products={prodictlist}/>

            </main>

      </>
    )
  }