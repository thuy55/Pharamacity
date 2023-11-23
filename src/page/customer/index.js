import React, { useState, useRef } from 'react';

import './styles.scss';

class Detail extends React.Component {
    state = {};
    constructor(props) {
        super(props);

        // Use the Data array as the initial state
        this.state = {
            data: [
                {
                    id: "123",
                    name: "thanh thuy",
                    birthday: "20/12/2002",
                    phone: "154625321469",
                    email: "thuy@gmail.com",
                    address: "32 cgs dhdg dhđ dhy"
                },
                {
                    id: "321",
                    name: "thanh thuy 2",
                    birthday: "20/12/2002",
                    phone: "154625321469",
                    email: "thuy@gmail.com",
                    address: "32 cgs dhdg dhđ dhy"
                },
                {
                    id: "258",
                    name: "thanh thuy 3",
                    birthday: "20/12/2002",
                    phone: "154625321469",
                    email: "thuy@gmail.com",
                    address: "32 cgs dhdg dhđ dhy"
                }
            ],
            currentPage: 1,
            itemsPerPage: 2,
            selectedCustomerId: null,
            showModal: false,
        };
    }
    handleClick = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
        });
    };
    handleClickIdCustomer = (customerId) => {
        this.setState({
            selectedCustomerId: customerId,
        });
    };
    openModal = () => {
        this.setState({
            showModal: true,

        });
        console.log("aaaa");
    };

    closeModal = () => {
        this.setState({
            showModal: false,
        });
    };

    render() {
        console.log('Render: showModal', this.state.showModal);
        const { data, currentPage, itemsPerPage, selectedCustomerId, showModal } = this.state;

        // Calculate the index range for the current page
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(data.length / itemsPerPage);
        const selectedCustomer = data.find(item => item.id === selectedCustomerId);
        const renderPageButtons = () => {
            const pageButtons = [];

            // Display all buttons if there are few pages
            if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) {
                    pageButtons.push(
                        <button className='p-2 px-3 fs-4 border border-1 me-2'
                            key={i}
                            onClick={() => this.handleClick(i)}
                            style={{ fontWeight: i === currentPage ? 'bold' : 'normal' }}
                        >
                            {i}
                        </button>
                    );
                }
            } else {
                // Display a subset of buttons with ellipsis
                const startPage = Math.max(1, currentPage - 2);
                const endPage = Math.min(totalPages, startPage + 4);

                if (startPage > 1) {
                    pageButtons.push(<span key="startEllipsis">...</span>);
                }

                for (let i = startPage; i <= endPage; i++) {
                    pageButtons.push(
                        <button className='p-2 fs-4 px-3  border border-1 me-2'
                            key={i}
                            onClick={() => this.handleClick(i)}
                            style={{ fontWeight: i === currentPage ? 'bold' : 'normal' }}
                        >
                            {i}
                        </button>
                    );
                }
                if (endPage < totalPages) {
                    pageButtons.push(<span key="endEllipsis">...</span>);
                }
            }
            return pageButtons;
        };
        return (
            <div className='container'>
                <div className='row ms-3 mt-4'>
                    <div className='card border border-2 rounded-3'>
                        <div className='card-content p-4'>
                            <div className='row'>
                                <div className='col-2 text-center'>
                                    <img src='https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-avatar-nu-de-thuong.jpg' style={{ width: "150px" }}></img>
                                    <div className='mt-3 fs-5'>
                                        Mã khách hàng: 123
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div className="col-md-12 mb-4">
                                        <label for="name" className="form-label fs-5">Tên khách hàng :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedCustomer?.name || ''} />
                                        <div className="invalid-feedback">
                                            Tên khách hàng
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Số điện thoại :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedCustomer?.phone || ''} />
                                        <div className="invalid-feedback">
                                            Số điện thoại
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Năm sinh :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedCustomer?.birthday || ''} />
                                        <div className="invalid-feedback">
                                            Năm sinh
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Email :</label>
                                        <input type="email" className="form-control p-2 rounded-3 fs-5" value={selectedCustomer?.email || ''} />
                                        <div className="invalid-feedback">
                                            Email
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Địa chỉ :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedCustomer?.address || ''} />
                                        <div className="invalid-feedback">
                                            Số nhà
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Tỉnh/ Thành phố :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Tỉnh/ Thành phố
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Quận/ Huyện/ Thị xã :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Quận/ Huyện/ Thị xã
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label for="password" className="form-label fs-5">Xã/ Phường/ Thị trấn :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Xã/ Phường/ Thị trấn
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 px-4'>
                                    <div className='card border border-3'>
                                        <div className='card-content p-3 fs-5'>
                                            <div className='text-center fw-bold'>
                                                Đơn đặt hàng gần nhất
                                            </div>
                                            <div className=''>
                                                Mã đơn hàng: 123456
                                            </div>
                                            <div className=''>
                                                Thuốc đã mua:
                                                <div>
                                                    <ul>
                                                        <li>
                                                            thuốc nhỏ mắt
                                                        </li>
                                                        <li>
                                                            thuốc cảm cúm
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className=' row d-flex justify-content-bettwen'>
                                                <div className='col-8 fw-bold'>
                                                    Tổng tiền: 133.000
                                                </div>
                                                <div className='col-4 text-end'>
                                                    <div className='btn p-1 bg-success w-75 fw-bold fs-5'>
                                                        Xem chi tiết
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col-6 text-center'>
                                            <button className='btn p-2 bg-danger w-75 fw-bold fs-5' onClick={this.openModal} >
                                                <i className="fa-solid fa-trash-can"></i> Xóa
                                            </button>
                                            {showModal && (
                                                <div className="modal border border-2 rounded-3">

                                                    <div className="w-100 mt-2 text-center" >
                                                        <img style={{ height: "100px" }}
                                                            src='../delete.gif'
                                                            alt="Payment Image"
                                                        />
                                                        <h4 className="m-2">Xóa toàn bộ mục đã chọn?</h4>
                                                    </div>
                                                    <form method="POST" autoComplete="off" encType="multipart/form-data" className="ajax-form m-3 mt-0 bg-content-2 p-1 rounded-2    text-center">
                                                        <small className="text-center m-1 text-danger fs-5">( Bạn có thật sự muốn xóa, sẽ không thể khôi phục lại dữ liệu trong tương lai. )</small>
                                                    </form>
                                                    <div className=' row d-flex justify-content-bettwen mt-5'>
                                                        <div className='col-6 text-center'>
                                                            <button className='w-75 bg-light-secondary p-3 border border-1 rounded-3 fs-5 fw-bold' onClick={this.closeModal}>HỦY</button>
                                                        </div>
                                                        <div className='col-6 text-center'>
                                                            <button className='w-75 bg-danger p-3 border border-1 rounded-3 fs-5 fw-bold'>XÓA</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            )}

                                            <style jsx>{`
                                                .modal {
                                                    display: block;
                                                    position: fixed;
                                                    top: 40%;
                                                    left: 50%;
                                                    transform: translate(-50%, -50%);
                                                    z-index: 1000;
                                                    background-color: white;
                                                    padding: 20px;
                                                    width: 400px; /* Set a specific width for the modal */
                                                    height: 300px; /* Set a specific height for the modal */
                                                }
                                                `}
                                            </style>
                                        </div>
                                        <div className='col-6 text-center'>
                                            <div className='btn p-2 bg-primary w-75 fw-bold fs-5'>
                                                <i className="fa-solid fa-file-invoice-dollar"></i> Đơn hàng
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 px-3'>
                    <table className='table  table-hover table-bordered fs-5'>
                        <thead>
                            <tr className="table-secondary">
                                <th scope="col" className='p-3'>Mã KH</th>
                                <th scope="col" className='p-3'>Tên</th>
                                <th scope="col" className='p-3'>Năm sinh</th>
                                <th scope="col" className='p-3'>Số điện thoại</th>
                                <th scope="col" className='p-3'>Email</th>
                                <th scope="col" className='p-3'>Địa chỉ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(item => (
                                <tr key={item.id} onClick={() => this.handleClickIdCustomer(item.id)}>
                                    <td className='p-3'>{item.id}</td>
                                    <td className='p-3'>{item.name}</td>
                                    <td className='p-3'>{item.birthday}</td>
                                    <td className='p-3'>{item.phone}</td>
                                    <td className='p-3'>{item.email}</td>
                                    <td className='p-3'>{item.address}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center pt-3'>
                        {renderPageButtons()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Detail;
