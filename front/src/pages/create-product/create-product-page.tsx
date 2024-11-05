import { Link, useNavigate, useParams } from "react-router-dom"

import { Helmet } from "react-helmet-async"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Product } from "../../types/product"
import { randomUUID } from "crypto"
import { AppRoute } from "../../consts"


export default function CreateProductPage(): JSX.Element {
    const navigate = useNavigate()
    const id = useParams().id
    const apiUrl = `http://127.0.0.1:8000/api/products/`;


    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const countRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const salerRef = useRef<HTMLInputElement>(null);


    const normalizeStringData = (data: React.RefObject<HTMLInputElement>) => {
        return data.current?.value === undefined ? '' : data.current?.value
      }
    
      const normalizeTextData = (data: React.RefObject<HTMLTextAreaElement>) => {
        return data.current?.value === undefined ? '' : data.current?.value
      }
    
      const normalizeNumberData = (data: React.RefObject<HTMLInputElement>): number => {
        return data.current?.value === undefined ? 0 : data.current?.valueAsNumber
      }



    const [data, setData] = useState<Product>();
    
    useEffect(() => {
        if (id){
      axios.get(apiUrl+id).then((resp) => {
        setData(resp.data);
      });}}, [setData]);
     
    const createProduct = () =>{
        let product:Product = {
            id: id,
            name: normalizeStringData(nameRef),
            description: normalizeTextData(descriptionRef),
            count: normalizeNumberData(countRef),
            price: normalizeNumberData(priceRef),
            saler: null,
            image: normalizeStringData(imageRef)
        }
        if (id){
            axios.put(apiUrl,product)
        }
        else{
            axios.post(apiUrl,product)
        }
        navigate(`${AppRoute.Main}`)
    }  

    return (
        <>



            <main className="main">

                <h1>Product Constructor</h1>
                <div className="constructor">
                <div className="form">
                    <div className="form-line">
                        <div>
                            <label className="label">
                                Наименование<span className="required-field">*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                ref={nameRef}
                                type="string"
                                className="field price-field"
                                placeholder="Введите наименование"
                                required={true}
                                defaultValue={data?.name}
                            />
                        </div>
                    </div>
                    <div className="form-line">
                        <div>
                            <label>
                                Стоимость<span className="required-field">*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                ref={priceRef}
                                type="number"
                                className="field price-field"
                                placeholder="Введите стоимость в рублях"
                                required={true}
                                defaultValue={data?.price}
                            />
                        </div>
                    </div>
                    <div className="form-line">
                        <div>
                            <label>
                                Количество<span className="required-field">*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                ref={countRef}
                                type="number"
                                className="field price-field"
                                placeholder="Введите количество, шт"
                                required={true}
                                defaultValue={data?.count}
                            />
                        </div>
                    </div>
                    <div className="survey-description">
                    <div>
                      <label>Описание</label>
                    </div>
                    <div>
                      <textarea
                        ref={descriptionRef}
                        className="field description-field"
                        placeholder="Введите описание"
                        defaultValue={data?.description}
                      />
                    </div>
                  </div>
                  <div className="form-line">
                        <div>
                            <label>
                                Ссылка на изображение<span className="required-field">*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                ref={imageRef}
                                type="string"
                                className="field price-field"
                                placeholder="Введите ссылку на изображение"
                                required={true}
                                defaultValue={data?.image}
                            />
                        </div>
                    </div>
                    {/* <div className="form-line">
                        <div>
                            <label>
                                Продавец<span className="required-field">*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                ref={salerRef}
                                type="string"
                                className="field price-field"
                                placeholder="Введите продавца"
                                required={true}
                            // defaultValue={newSurvey?.price}
                            />
                        </div>
                    </div> */}
                
                    <div className="form-line">
                    <button onClick={()=> createProduct()} className="btn">{ id ? 'Сохранить' : 'Создать' }</button>
                    </div>
                </div>

        </div>
            </main>

        </>
    )
}
