import { Route, Routes  } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import { AppRoute } from '../consts';
import ProductPage from '../pages/product-page/product-page';
import AllProductPage from '../pages/all-product-page/all-product-page';
import SalerPage from '../pages/saler-page/saler-page';
import CreateProductPage from '../pages/create-product/create-product-page';

// Корневой компонент
// Здесь же вся внешняя маршрутизация
export default function App(): JSX.Element {
  // const authorizationStatus = AuthorizationStatus.Auth;

  return (

        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
            <Route path={AppRoute.Product} >
              <Route index element={<AllProductPage/>}/>
              <Route path = ':id' element={<ProductPage/>}/>
            </Route>
            <Route path={AppRoute.Saler} >
              <Route path = ':id' element={<SalerPage/>}/>
            </Route>
            <Route path={AppRoute.CreateProduct} element={<CreateProductPage/>} >

            </Route>




        </Routes>

  )
}
