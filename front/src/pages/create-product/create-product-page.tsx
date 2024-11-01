import { Link } from "react-router-dom"

import { Helmet } from "react-helmet-async"

export default function CreateProductPage(): JSX.Element {
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
                                // ref={priceRef}
                                type="string"
                                className="field price-field"
                                placeholder="Введите стоимость в рублях"
                                required={true}
                            // defaultValue={newSurvey?.price}
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
                                // ref={priceRef}
                                type="number"
                                className="field price-field"
                                placeholder="Введите стоимость в рублях"
                                required={true}
                            // defaultValue={newSurvey?.price}
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
                                // ref={priceRef}
                                type="number"
                                className="field price-field"
                                placeholder="Введите стоимость в рублях"
                                required={true}
                            // defaultValue={newSurvey?.price}
                            />
                        </div>
                    </div>
                    <div className="survey-description">
                    <div>
                      <label>Описание</label>
                    </div>
                    <div>
                      <textarea
                        // ref={descriptionRef}
                        className="field description-field"
                        placeholder="Введите описание"
                        // defaultValue={newSurvey?.description}
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
                                // ref={priceRef}
                                type="string"
                                className="field price-field"
                                placeholder="Введите стоимость в рублях"
                                required={true}
                            // defaultValue={newSurvey?.price}
                            />
                        </div>
                    </div>
                    <div className="form-line">
                        <div>
                            <label>
                                Продавец<span className="required-field">*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                // ref={priceRef}
                                type="string"
                                className="field price-field"
                                placeholder="Введите стоимость в рублях"
                                required={true}
                            // defaultValue={newSurvey?.price}
                            />
                        </div>
                    </div>
                
                    <div className="form-line">
                    <button className="btn">Создать</button>
                    </div>
                </div>

        </div>
            </main>

        </>
    )
}
