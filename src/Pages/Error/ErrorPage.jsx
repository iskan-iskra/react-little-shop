import React from 'react'
import { Result, Button } from 'antd';
import { useHistory } from 'react-router';
export default function ErrorPage() {
    const History = useHistory()
    function backToMain(){
        History.push('/')
    }
    return (
        <div style={{position:'fixed',
                     top:'0',
                     left:'0',
                     width:'100%',
                     height:'100%',
                     display: 'flex',
                     justifyContent:'center',
                     alignItems: 'center'
                    }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={backToMain}>Back Home</Button>}
            />,
        </div>
    )
}
