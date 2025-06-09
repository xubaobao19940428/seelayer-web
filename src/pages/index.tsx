import React, { useState, useEffect, useRef } from 'react';
import { Layout, Menu, Button, Row, Col, Card, Typography, Space, Drawer } from 'antd';
import {
    GithubOutlined,
    WechatOutlined,
    QqOutlined,
    MailOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import './index.less';
import logoImg from '@/assets/logo.png';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const navItems = [
    { key: 'home', label: '首页' },
    { key: 'case', label: '案例汇聚' },
    { key: 'docs', label: '操作文档' },
    { key: 'about', label: '关于我们' },
];

const introCards = [
    {
        title: '标准导航界面，方便跳转',
        desc: '从此不再迷路，导航清晰明了。',
    },
    {
        title: '支持多端，手机/平板/PC',
        desc: 'USB随时用，手机扫码也能访问。',
    },
    {
        title: '数据隔离，安全可靠',
        desc: '数据隔离存储，安全有保障。',
    },
];

const caseCards = [
    { title: '【软件导航】开发工具', img: 'https://placehold.co/120x80', count: 234 },
    { title: '【案例】销售管理系统', img: 'https://placehold.co/120x80', count: 112 },
    { title: '【案例】教育教务系统', img: 'https://placehold.co/120x80', count: 98 },
    { title: '【软件导航】办公工具', img: 'https://placehold.co/120x80', count: 567 },
    { title: '【精选】', img: 'https://placehold.co/120x80', count: 33 },
];

const adCards = [
    {
        title: '广告招租',
        desc: '欢迎投放您的广告',
        img: 'https://placehold.co/180x100',
    },
    {
        title: 'To-C',
        desc: '上百款好用软件导航和教程汇总',
        img: 'https://placehold.co/180x100',
    },
    {
        title: 'To-B',
        desc: '一站式行业解决方案',
        img: 'https://placehold.co/180x100',
    },
];

const keywords = ['软件', '网页', '应用'];

const blindspotCards = [
    {
        title: '半透明界面，方便观看',
        desc: '如果是笔记本用户',
        img: 'https://placehold.co/260x160/cccccc/fff?text=图片1',
    },
    {
        title: '全透明界面，鼠标穿透',
        desc: '鼠标穿透，不影响操作',
        img: 'https://placehold.co/260x160/cccccc/fff?text=图片2',
    },
    {
        title: '动态调整，实时更新',
        desc: '对厂商来说，每次软件更新了内容，会有一堆人追着问如何操作，之前的功能演示视频，反而成了待更新的错误信息，透见 SeeLayer 的核心附加功能之一，就是实时更新\n\n动态鼠标，文字随动',
        img: 'https://placehold.co/260x160/cccccc/fff?text=图片3',
    },
];

const IndexPage: React.FC = () => {
    // 关键词轮播状态
    const [kwIndex, setKwIndex] = useState(0);
    const [prevKwIndex, setPrevKwIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timerRef = useRef<any>();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrevKwIndex(kwIndex);
            setKwIndex(idx => (idx + 1) % keywords.length);
            setIsAnimating(true);
        }, 2000);
        return () => clearInterval(timer);
    }, [kwIndex]);

    useEffect(() => {
        if (isAnimating) {
            const t = setTimeout(() => setIsAnimating(false), 500);
            return () => clearTimeout(t);
        }
    }, [isAnimating]);

    return (
        <Layout className="main-layout">
            {/* 顶部导航栏 */}
            <Header className="main-header">
                <div className="logo-bar">
                    <div className="logo">
                        <img src={logoImg} alt="logo" className="logo-img" />
                    </div>
                    <Button
                        className="main-menu-mobile"
                        type="text"
                        icon={<MenuOutlined style={{ fontSize: 26 }} />}
                        onClick={() => setMenuOpen(true)}
                    />
                </div>
                <div className="main-menu-pc">
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        items={navItems}
                        className="main-menu"
                    />
                </div>
                <Button type="primary" className="login-btn">
                    登录/注册
                </Button>
                <Drawer
                    title={<img src={logoImg} alt="logo" className="logo-img" style={{ height: 32 }} />}
                    placement="right"
                    onClose={() => setMenuOpen(false)}
                    open={menuOpen}
                    className="main-menu-drawer"
                    width={240}
                >
                    <Menu
                        mode="vertical"
                        defaultSelectedKeys={['home']}
                        items={navItems}
                        onClick={() => setMenuOpen(false)}
                    />
                    <Button type="primary" className="login-btn-mobile" block style={{ marginTop: 24 }}>
                        登录/注册
                    </Button>
                </Drawer>
            </Header>
            <Content className="main-content">
                {/* 主标题区 */}
                <section className="hero-section">
                    <Title level={1} className="hero-title">
                        <span>世界上第一款透明的</span>
                        <span className="kw-roller">
                          {isAnimating ? (
                            <>
                              <span className="kw-roller-item out" key={prevKwIndex}>
                                {keywords[prevKwIndex]}
                              </span>
                              <span className="kw-roller-item in" key={kwIndex}>
                                {keywords[kwIndex]}
                              </span>
                            </>
                          ) : (
                            <span className="kw-roller-item show" key={kwIndex}>
                              {keywords[kwIndex]}
                            </span>
                          )}
                        </span>
                        <span>导航应用</span>
                    </Title>
                    <Paragraph className="hero-desc">
                        甄选SaaS导航，帮你高效找到合适的软件工具。<br />
                        适合开发、运营、市场、设计、管理等各类岗位，支持多端访问，安全可靠。
                    </Paragraph>
                    <Space>
                        <Button type="primary" size="large">体验软件导航</Button>
                        <Button size="large">合作咨询</Button>
                    </Space>
                    <Text className="hero-note">*永久免费使用</Text>
                </section>

                <section className="blindspot-section">
                    <h2 className="blindspot-title">软件导航——职场容易忽视的盲区</h2>
                    <div className="blindspot-subtitle">透见 SeeLayer，发现灵感来源于硬件工作的繁琐</div>
                    <div className="blindspot-cards">
                        {blindspotCards.map((item, idx) => (
                            <div className="blindspot-card" key={idx}>
                                <img src={item.img} alt={item.title} className="blindspot-img" />
                                <div className="blindspot-card-title">{item.title}</div>
                                <div className="blindspot-card-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 三栏介绍区 */}
                <section className="intro-section">
                    <Row gutter={24} justify="center">
                        {introCards.map((item, idx) => (
                            <Col xs={24} sm={8} key={idx}>
                                <Card className="intro-card" variant="borderless" hoverable>
                                    <Title level={4}>{item.title}</Title>
                                    <Paragraph>{item.desc}</Paragraph>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>

                {/* 案例汇聚/操作文档区 */}
                <section className="case-section">
                    <Title level={3} className="section-title">案例汇聚 操作文档</Title>
                    <Paragraph className="section-desc">
                        收录行业主流SaaS，真实案例和操作文档持续更新，SaaS用户和从业者的交流专区
                    </Paragraph>
                    <Row gutter={16} className="case-row" wrap={false} style={{ overflowX: 'auto' }}>
                        {caseCards.map((item, idx) => (
                            <Col key={idx} flex="0 0 180px">
                                <Card
                                    className="case-card"
                                    cover={<img alt={item.title} src={item.img} style={{ borderRadius: 8 }} />}
                                    variant="borderless"
                                    hoverable
                                >
                                    <Title level={5}>{item.title}</Title>
                                    <Text type="secondary">{item.count}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>

                {/* 广告/三栏区 */}
                <section className="ad-section">
                    <Title level={3} className="section-title">基本不花钱！嘿嘿嘿 想不到吧</Title>
                    <Paragraph className="section-desc">
                        甄选SaaS导航，帮你高效找到合适的软件工具。<br />
                        以广告模式维持免费运营，欢迎联系投放广告/ToC/ToB，量大更优惠，长期合作更划算。
                    </Paragraph>
                    <Row gutter={24} justify="center">
                        {adCards.map((item, idx) => (
                            <Col xs={24} sm={8} key={idx}>
                                <Card className="ad-card" variant="borderless" hoverable>
                                    <img src={item.img} alt={item.title} className="ad-img" />
                                    <Title level={5}>{item.title}</Title>
                                    <Paragraph>{item.desc}</Paragraph>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Content>
            {/* 页脚 */}
            <Footer className="main-footer">
                <div className="footer-main">
                    <div className="footer-logo">
                        <img src={logoImg} alt="logo" className="logo-img" />
                    </div>
                    <div className="footer-desc">
                        To B——让你的软件高效精准触达企业
                        <br />To C——一站式软件导航体验
                    </div>
                    <div className="footer-social">
                        <Button shape="circle" icon={<GithubOutlined />} />
                        <Button shape="circle" icon={<WechatOutlined />} />
                        <Button shape="circle" icon={<QqOutlined />} />
                        <Button shape="circle" icon={<MailOutlined />} />
                    </div>
                </div>
                <div className="footer-copy">
                    <Text type="secondary">© 2024 飞书导航. All rights reserved.</Text>
                </div>
            </Footer>
        </Layout>
    );
};

export default IndexPage; 