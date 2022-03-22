import { Button, Form } from 'antd'
import Input from 'antd/lib/input/Input'
import React, { FC, useState } from 'react'
import { useActions } from '../hooks/useActions';
import { rules } from '../utils/rules';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions();


    const submit = () => {
        login(username, password);
    }
    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form.Item
                label='User Name'
                name='username'
                rules={[rules.required('Please enter your username')]}
            >
                <Input value={username} onChange={(e) => setUserName(e.target.value)} />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[rules.required('Please enter your password')]}
            >
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form >
    )
}

export default LoginForm