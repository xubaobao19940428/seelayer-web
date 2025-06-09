import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'umi';
import styles from './index.less';

// 直接导入路由配置
// 注意：这里的路径可能需要调整
import routes from '../../config/routes';

const { Header, Content } = Layout;

const BasicLayout: React.FC = () => {
    const location = useLocation();

    // 查找布局路由配置
    const layoutRoute = routes.find(route =>
        route.component && route.component.includes('/layout/index')
    );

    // 生成菜单项
    const generateMenuItems = () => {
        // 如果找不到布局路由或没有子路由，返回默认菜单
        console.log(layoutRoute)
        if (!layoutRoute || !layoutRoute.routes) {
            return [
                { key: '/home', label: <Link to="/home">我们是谁？</Link> },
                { key: '/feature1', label: <Link to="/feature1">文档/案例</Link> },
                { key: '/feature2', label: <Link to="/feature2">会多少钱</Link> },
            ];
        }

        // 从配置生成菜单
        return layoutRoute.routes.map(route => {
            const path = route.path.startsWith('/') ? route.path : `/${route.path}`;
            return {
                key: path,
                label: <Link to={path}>{route.meta?.title || route.path}</Link>,
            };
        });
    };

    const menuItems = generateMenuItems();

    return (
        <Layout className={styles.layout}>
            {/* <Header className={styles.header}>
                <div className={styles.logo}>LovePal AI</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    className={styles.menu}
                />
            </Header> */}
            <Content className={styles.content}>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default BasicLayout;
