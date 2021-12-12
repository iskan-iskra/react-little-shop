import React from 'react'
import { DollarOutlined } from '@ant-design/icons';
import { Card, Button, Image, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import photoPlaceHolder from '../../content/photo_placeholder.png'
const { Meta } = Card
export default function ProductCard({ID, NAME, IMG, COST, PRODUCT, WITHOUTPHOTO}) {
    const dispatch = useDispatch()
    const basketList = useSelector(state=>state.basketReducer.products)

    const openNotificationWithIcon = (type, text) => {
        notification[type]({
            message: text,
            duration: 1.5,
            });
    };

    
    function addToBasket(){
        dispatch({type:"ADD_PRODUCT",payload:PRODUCT})
        openNotificationWithIcon('success', `${NAME} добавлен в корзину`)
    }
    function deletFromBasket(){
        dispatch({type:"REMOVE_PRODUCT",payload:PRODUCT})
        openNotificationWithIcon('warning', `${NAME} удален из корзины`)
    }
    let check = !!basketList.find(el=>el.id===ID)
    return (
        <Card
            hoverable={true}
            cover={
                !WITHOUTPHOTO &&
                <Image
                alt={NAME}
                src={IMG || 'error'}
                fallback={photoPlaceHolder}
                preview={false}
                />
                
            }
            actions={[
                <Button 
                    type="primary" 
                    icon={<DollarOutlined />} 
                    size={'middle'}
                    onClick={addToBasket}
                    disabled={check}
                >
                    Купить
                </Button>,
                <Button 
                    type="primary" 
                    icon={<DollarOutlined />} 
                    size={'middle'}
                    onClick={deletFromBasket}
                    disabled={!check}
                >
                    Удалить
                </Button>
            ]}
        >
            <Meta
                title={NAME}
                description={COST}
            />
        </Card>
    )
}
