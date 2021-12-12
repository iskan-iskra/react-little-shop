import React, { useEffect, useMemo } from 'react'
import { Row, Col} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function MainPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:"GET_PRODUCTS"})
    },[dispatch])
    const productsList = useSelector(state=>state.productsReducer.products)
    const memoProductsList = useMemo(()=>productsList.map(product=>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xxl={4} key={product.id}>
            <ProductCard
                ID={product.id}
                NAME={product.name}
                IMG={product.img}
                COST={product.cost}
                PRODUCT={product}
            />
        </Col>
    ), [productsList])
    return (
        <Row gutter={[10,10]}>
            {productsList.length > 0 && memoProductsList
            }
            {productsList.length === 0 &&
                <div style={{textAlign: 'center', margin: 'auto'}}>нет товаров</div>
            }
        </Row>
    )
}
