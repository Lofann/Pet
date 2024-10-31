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
        image: 'https://zadachi-po-khimii.ru/wp-content/uploads/2015/01/apple.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 100,
        image: 'https://static.miraheze.org/mylittleponywiki/thumb/b/b5/S9E26_Applejack.png/270px-S9E26_Applejack.png'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://pogrebokpro.ru/GetImageFromTable.ashx?TableName=dir_goods&Id=10830&size=full'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://himpitertorg.ru/image/cache/catalog/products/otdushki/zelenoejablokootdushka-900x900.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/a7/5c/6bd10780d88949d10ec6958bd546.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg'
    },  {
        id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
        name: 'test',
        price: 10,
        image: 'https://delivery.syemslona.ru/up/catalog/detail/45009.jpg'
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