import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes';

const Navbar: FC = () => {
    const navigate = useNavigate();
    const { logout } = useActions();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth && <div style={{ color: 'white' }}>{user.username}</div>}
                <Menu theme='dark' mode='horizontal' selectable={false}>
                    {isAuth
                        ?
                        <Menu.Item onClick={logout}
                            key={1}>
                            Logout
                        </Menu.Item>
                        :
                        <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
                            Login
                        </Menu.Item>
                    }
                </Menu>
            </Row>
        </Layout.Header >
    )
}

export default Navbar
