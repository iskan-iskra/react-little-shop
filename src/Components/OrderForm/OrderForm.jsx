import React from 'react'
import { Form, Input, Button, DatePicker, InputNumber } from 'antd'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const monthFormat = 'YYYY/MM';

export default function OrderForm({ORDERLIST, ORDERCOST}) {
    const dispatch = useDispatch()
    const History = useHistory()

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch({type:"ADD_ORDER", payload: ORDERLIST})
        dispatch({type:"CLEAR_PRODUCTS"})
        form.resetFields()
        History.push('/success-order')
      };
    const onReset = () => {
        form.resetFields()
    }


    const config = {
        rules: [{required: true, message: 'Пожалуйста, заполните поле!' }],
    };

    function isDisabled() {
        if(ORDERLIST.length > 0){
            return false;
        }
        return true;
    }

    return (
        <Form 
            style={{
                    minWidth:'300px',
                    width:'60%',
                    margin:'auto',
                    background:'white',
                    padding: '20px',
                   }}
            autoComplete="off"
            onFinish={onFinish}
            form={form}
        >
            <Form.Item
                name="card_number"
                {...config}
            >
                <InputNumber
                    disabled={isDisabled()}
                    style={{width:'100%'}}
                    placeholder='Номер карты'
                    maxLength={16}
                    minLength={16}
                    min={0}
                />
            </Form.Item>
            <Form.Item
                style={{width:'calc(50% - 8px)', display: 'inline-block', marginRight: '8px'}}
                name="card_code"
                {...config}
            >
                <InputNumber
                    disabled={isDisabled()}
                    placeholder="CVV"
                    maxLength={3}
                    minLength={3}
                    min={0}
                />
            </Form.Item>
            <Form.Item
                style={{width:'calc(50% - 8px)', display: 'inline-block', marginLeft:'8px'}}
                name="card_date"
                {...config}
            >
                <DatePicker
                    disabled={isDisabled()}
                    style={{width:'100%'}}
                    disabledDate={disabledDate}
                    format={monthFormat} 
                    picker="month" 
                    placeholder="срок действия"
                />
            </Form.Item>
            <Form.Item
                name="card_owner"
                {...config}
            >
                <Input 
                    placeholder='Имя владельца карты'
                    disabled={isDisabled()}
                    maxLength={50}
                    style={{textTransform:'uppercase'}}
                />
            </Form.Item>
            <Form.Item style={{marginBottom:'0'}}>
                <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}> 
                    <Button type='primary' htmlType="submit" disabled={isDisabled()}>
                        Оплатить
                    </Button>
                    <div>
                        {ORDERCOST && "Всего к оплате " + ORDERCOST + "$"}
                    </div>
                    <Button 
                        type='default'
                        htmlType="button"
                        onClick={onReset}
                        disabled={isDisabled()}
                    >
                        Очистить
                    </Button>
                </div>
                
            </Form.Item>
        </Form>
    )
}
