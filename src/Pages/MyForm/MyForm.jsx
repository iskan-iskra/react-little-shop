
import { Col, Row, Empty, } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import OrderForm from '../../Components/OrderForm/OrderForm'
import ProductCard from '../../Components/ProductCard/ProductCard'

export default function MyForm() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:"GET_PRODUCTS"})
    },[dispatch])
    const productsList = useSelector(state=>state.basketReducer.products)
    let totalCost
    if(productsList.length > 1){
        totalCost = productsList.reduce(function(a,b){return a.cost + b.cost})
    }
    if(productsList.length === 1){
        totalCost = productsList[0].cost
    }

    return (
        <Row gutter={[50,20]}>
            <Col xs={24} sm={24} lg={8}>
                <Row gutter={[10,10]} style={{justifyContent:'center'}}>
                {productsList.length > 0 &&
                    productsList.map(product=>
                        <Col className="gutter-row" xs={24} sm={12} lg={24} key={product.id}>
                            <ProductCard
                                ID={product.id}
                                NAME={product.name}
                                IMG={product.img}
                                COST={product.cost}
                                PRODUCT={product}
                                WITHOUTPHOTO
                            />
                        </Col>
                    )}
                    {productsList.length === 0 &&
                        <Empty style={{margin:'auto'}} description={'Коризна пуста'} />
                    }
                </Row>
            </Col>
            <Col xs={24} sm={24} lg={16}>
                <OrderForm
                    ORDERLIST={productsList}
                    ORDERCOST={totalCost}
                />
            </Col>
        </Row>
    )
}
