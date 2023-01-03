import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('客户管理', 'custom', <PieChartOutlined />),
  getItem('生产管理', 'produce', <DesktopOutlined />),
  getItem('财务管理', 'money', <UserOutlined />, [
  ]),
  getItem('人员管理', 'people', <TeamOutlined />, [
  ]),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate()

  const menuClick = (e:{key:string,keyPath:string[]})=>{
    // 点击跳转对应路由
    navigate(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
      </Sider>
      <Layout className="site-layout">
        {/* 头部 */}
        <Header className="site-layout-background" style={{ paddingLeft: '16px' }} >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 内容 */}
        <Content style={{ height: '100%', margin: '16px 16px 0' }}>
          <Outlet/>
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: 'center' }}>MyStudio赖兴平工作室</Footer>
      </Layout>
    </Layout>
  );
};

export default View