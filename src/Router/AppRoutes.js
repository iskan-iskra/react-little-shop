import About from "../Pages/About/About"
import ErrorPage from "../Pages/Error/ErrorPage"
import MainPage from "../Pages/MainPage/MainPage"
import MyForm from "../Pages/MyForm/MyForm"
import SuccessOrder from "../Pages/SuccessOrder/SuccessOrder"

const AppRoutes = [
    {
        path: '/' || '',
        component: MainPage,
        exact: true,
        PageName: 'Магазин',
        showInMenu: true
    },
    {
        path: '/form',
        component: MyForm,
        exact: true,
        PageName: 'Корзина',
        showInMenu: true
    },
    {
        path: '/About',
        component: About,
        exact: true,
        PageName: 'About',
        showInMenu: true
    },
    {
        path: '/404',
        component: ErrorPage,
        exact: true,
        PageName: '404',
        showInMenu: false
    },
    {
        path:'/success-order',
        component: SuccessOrder,
        exact: true,
        PageName: 'Order',
        showInMenu: false
    }
]
export default AppRoutes