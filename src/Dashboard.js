import React, { useState } from 'react';
import { Layout, Menu, Card, Space, Button } from 'antd';
import './Dashboard.css';
import { PieChartOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import LineChart from './LineChart';




const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);

  };

  const HandleClick = () => {
    console.log('LiceChart');
  }


  return (
    <Layout>
    <Sider 
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon ={<PieChartOutlined />}>
          Nav 1
        </Menu.Item>
        <Menu.Item key="2" icon ={<PieChartOutlined />}>
          Nav 2
        </Menu.Item>
        <Menu.Item key="3" icon ={<PieChartOutlined />}>
          Nav 3
        </Menu.Item>
        <Menu.Item key="4" icon ={<PieChartOutlined />}>
          Nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0, textAlign: 'center'}} >DRONE EMPRIT</Header>
      <Content style={{ margin: '24px 16px', padding: '24', minHeight: 280, overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <Space direction="horisontal">
            <Card title="Card" style={{ width: 550 }}>
              <LineChart />
              <Button type="primary" shape="round" icon ={<VerticalAlignBottomOutlined /> } onclick={HandleClick}>
                Dwonload
              </Button>
            </Card>
            <Card title="Card" style={{ width: 550 }}>
              <LineChart />
              <Button type="primary" shape="round" icon ={<VerticalAlignBottomOutlined /> } onclick={HandleClick}>
                Dwonload 
              </Button>
            </Card>
          </Space>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Erwin Haryono ©2022 Created by rangersitem</Footer>
    </Layout>
  </Layout>
  );
}

export default Dashboard;