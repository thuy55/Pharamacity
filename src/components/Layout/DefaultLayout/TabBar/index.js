import React from 'react';

import './styles.scss';

class TabBar extends React.Component {
    state = {};
    render() {
        return (
            <div className="wrapTabBar">
                <div className="wrapLogo">
                    <img src='../logo.jpg' className='w-100' alt='logo'></img>
                </div>

                <div className="wrapItem">
                    {/* <ul> */}
                    <li className="itemUseAll">
                        <a href="/">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2318/2318736.png"
                                className="sizeImg"
                            />
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/sell">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4862/4862191.png"
                                className="sizeImg"
                            />
                            <span>Bán thuốc</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/bill">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4862/4862191.png"
                                className="sizeImg"
                            />
                            <span>Hoá đơn</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/warehouse">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2821/2821850.png"
                                className="sizeImg"
                            />
                            <span>Kho thuốc</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/personnel">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2534/2534879.png"
                                className="sizeImg"
                            />
                            <span>Nhân viên</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/supplier">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3321/3321752.png"
                                className="sizeImg"
                            />
                            <span>Nhà cung cấp</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/customer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3201/3201521.png"
                                className="sizeImg"
                            />
                            <span>Khách hàng</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/order">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
                                className="sizeImg"
                            />
                            <span>Đơn hàng</span>
                        </a>
                    </li>
                    <li className="itemUseAll">
                        <a href="/statistic">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2318/2318736.png"
                                className="sizeImg"
                            />
                            <span>Thống kê</span>
                        </a>
                    </li>
                    {/* </ul> */}
                </div>
            </div>
        );
    }
}

export default TabBar;
