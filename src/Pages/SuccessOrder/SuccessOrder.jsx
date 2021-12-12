import React from 'react'
import { Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


export default function SuccessOrder() {
    const dispatch = useDispatch()
    const History = useHistory()
    const orderList = useSelector(state=>state.orderReducer.products)
    function backToMain(){
        History.push('/')
        dispatch({type:"CLEAR_ORDER"})
    }
    const columns = [
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Цена',
          dataIndex: 'cost',
          key: 'cost',
        }
    ];
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h2 style={{marginLeft:'16px'}}>Ваш заказ</h2>
            <Table dataSource={orderList} columns={columns} />
            <Button 
                type="primary"
                onClick={backToMain}
            >
                Продолжить покупки
            </Button>
        </div>
    )
}
