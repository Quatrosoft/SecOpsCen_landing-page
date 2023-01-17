import { Col, Drawer, Dropdown, Menu, Row, Space } from 'antd'
import { DownOutlined, GlobalOutlined } from '@ant-design/icons'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Flag from 'react-world-flags'
import Image from 'next/image'


const onClick = ({ key }) => {
    console.log(key)
};
const items = [
    {
        label: <p>TR</p>,
        key: '1',
    },
    {
        label: <p>EN</p>,
        key: '2',
    },
];


const Navbar = () => {
    return (
        <header className={styles.navbarContainer}>
            <Row align='middle' justify='space-between' className={styles.innerContainer}>
                <Col xxl={7} xl={6} lg={4} md={5} sm={5} xs={12}>
                    <Link href={'/'} className={styles.logoContainer}>
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width="200"
                            height="60"
                        />
                    </Link>
                </Col>
                <Col xxl={10} xl={12} lg={13} md={0} sm={0} xs={0} align='middle' >
                    <Row align='middle' justify='space-between'>
                        <Link href={'/'} className={styles.headerPagination}>Home</Link>
                        <Link href={'/'} className={styles.headerPagination}>Why</Link>
                        <Link href={'/'} className={styles.headerPagination}>For Business</Link>
                        <Link href={'/'} className={styles.headerPagination}>Pricing</Link>
                        <Link href={'/'} className={styles.headerPagination}>Blog</Link>
                        <Link href={'/'} className={styles.headerPagination}>Contact</Link>
                    </Row>
                </Col>
                <Col xxl={7} xl={6} lg={7} md={0} sm={0} xs={0}>
                    <Row justify="end" align='middle' span={24} wrap={false}>
                        <Link href={'/'} className={styles.loginButton}>Sign in</Link>
                        <Link href={'/'} className={styles.registerButton}>Sign up</Link>
                        <Dropdown

                            menu={{
                                items,
                                onClick,
                            }} trigger={["click"]}>
                            <div
                                onClick={(e) => e.preventDefault()}
                                className={styles.languageChoices}
                            >
                                <Space>
                                    <Flag code="us" height="18" />
                                    <DownOutlined />
                                </Space>
                            </div>
                        </Dropdown>
                    </Row>
                </Col>
            </Row>
        </header>
    )
}

export default Navbar