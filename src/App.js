import { Layout, Menu } from "antd";
import { BrowserRouter, NavLink, useLocation } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import AppRoutes from "./Router/AppRoutes";
import 'antd/dist/antd.css';
import './Style/App.scss';

const { Header, Content, Footer } = Layout;

function App() {
  let currentLocation = useLocation().pathname
  return (
    <BrowserRouter>
      <Layout className='site-layout'>
        <Header className='site-layout-header'>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[currentLocation] || ['/']}>
            {AppRoutes.map(route => 
              route.showInMenu &&
              <Menu.Item key={route.path}>
                <NavLink to={route.path}>{route.PageName}</NavLink>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content className='site-layout-content'>
          <div className='site-layout-content__container'>
            <AppRouter/>
          </div>
        </Content>
        <Footer className='site-layout-footer'>
          Test App ©2021 Created by iskan_iskra
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
