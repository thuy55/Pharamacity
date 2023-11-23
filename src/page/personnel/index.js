import React from 'react';

import './styles.scss';
import { Search } from 'react-bootstrap-icons';
import { InputGroup, FormControl, Button, Form, Tab, Nav } from 'react-bootstrap';
class Detail extends React.Component {
    state = {};
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: "123",
                    name: "thanh thuy",
                    birthday: "20/12/2002",
                    phone: "154625321469",
                    email: "thuy@gmail.com",
                    address: "32 cgs dhdg dhđ dhy",
                    cccd: "4145145214",
                    chucvu: "nhân viên",
                    status: "hoạt động"
                },
                {
                    id: "321",
                    name: "thanh thuy 2",
                    birthday: "20/12/2002",
                    phone: "154625321469",
                    email: "thuy@gmail.com",
                    address: "32 cgs dhdg dhđ dhy",
                    cccd: "4145145214",
                    chucvu: "nhân viên",
                    status: "hoạt động"
                },
                {
                    id: "258",
                    name: "thanh thuy 3",
                    birthday: "20/12/2002",
                    phone: "154625321469",
                    email: "thuy@gmail.com",
                    address: "32 cgs dhdg dhđ dhy",
                    cccd: "4145145214",
                    chucvu: "nhân viên",
                    status: "hoạt động"
                }
            ],
            currentPage: 1,
            itemsPerPage: 2,
            selectedPersonnelId: null,
            showModalAdd: false,
            showModalRemove: false,
            showModalUpdate: false,
        };
    }
    handleClick = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
        });
    };
    handleClickIdCustomer = (customerId) => {
        this.setState({
            selectedPersonnelId: customerId,
        });
    };
    openModalAdd = () => {
        this.setState({
            showModalAdd: true,
        });
    };

    closeModalAdd = () => {
        this.setState({
            showModalAdd: false,
        });
    };
    openModalUpdate = () => {
        this.setState({
            showModalUpdate: true,
        });
    };

    closeModalUpdate = () => {
        this.setState({
            showModalUpdate: false,
        });
    };
    openModalRemove = () => {
        this.setState({
            showModalRemove: true,
        });
    };

    closeModalRemove = () => {
        this.setState({
            showModalRemove: false,
        });
    };
    handleNameChange = (newName) => {
        const { selectedPersonnelId, data } = this.state;
        const updatedData = data.map(personnel =>
            personnel.id === selectedPersonnelId
                ? { ...personnel, name: newName }
                : personnel
        );
        this.setState({ data: updatedData });
    };


    render() {
        const { data, currentPage, itemsPerPage, selectedPersonnelId, showModalAdd, showModalRemove, showModalUpdate } = this.state;

        // Calculate the index range for the current page
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(data.length / itemsPerPage);
        const selectedPersonnel = data.find(item => item.id === selectedPersonnelId);
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
                                <div className='col-3 text-center'>
                                    <img src='https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-avatar-nu-de-thuong.jpg' style={{ width: "150px" }}></img>
                                    <div className='mt-3 fs-5'>
                                        Mã nhân viên: value={selectedPersonnel?.id || ''}
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div className="col-md-12 mb-4">
                                        <label for="name" className="form-label fs-5">Tên nhân viên :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.name || ''} />
                                        <div className="invalid-feedback">
                                            Tên nhân viên
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Số điện thoại :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.phone || ''} />
                                        <div className="invalid-feedback">
                                            Số điện thoại
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Ngày sinh :</label>
                                        <input type="date" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.birthday || ''} />
                                        <div className="invalid-feedback">
                                            Ngày sinh
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Email :</label>
                                        <input type="email" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.email || ''} />
                                        <div className="invalid-feedback">
                                            Email
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Địa chỉ :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.address || ''} />
                                        <div className="invalid-feedback">
                                            Số nhà
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Tỉnh/ Thành phố :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Tỉnh/ Thành phố
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Quận/ Huyện/ Thị xã :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Quận/ Huyện/ Thị xã
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Xã/ Phường/ Thị trấn :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Xã/ Phường/ Thị trấn
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">CMND/CCCD :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.cccd || ''} />
                                        <div className="invalid-feedback">
                                            CMND/CCCD
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Chức vụ :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.chucvu || ''} />
                                        <div className="invalid-feedback">
                                            Chức vụ
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Mật khẩu :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.chucvu || ''} />
                                        <div className="invalid-feedback">
                                            Mật khẩu
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label fs-5">Trạng thái :</label>
                                        <input type="text" className="form-control p-2 rounded-3 fs-5" value={selectedPersonnel?.status || ''} />
                                        <div className="invalid-feedback">
                                            Trạng thái
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 px-3'>
                    <div className='row my-3'>
                        <div className='col-3'>
                            <div className="form-group">
                                <label>
                                    <h5 >Tìm kiếm</h5>
                                </label>
                                <InputGroup className="w-100 ms-3">
                                    <FormControl className='p-3 fs-5'
                                        placeholder="Tên/ Số điện thoại"
                                        style={{ height: '100%' }}
                                        aria-label="Light"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2" className='p-3'>
                                        <Search />
                                    </InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>
                        <div className='col-2 ms-5'>
                            <div className="form-group">
                                <label>
                                    <h5 >Trạng thái</h5>
                                </label>
                                <select className="form-control p-3 fs-5 ms-3 select2-hidden-accessible" required
                                >
                                    <option disabled selected className='fs-5'>Chọn trạng thái</option>
                                    <option value="1" className='fs-5'>Hoạt động</option>
                                    <option value="2" className='fs-5'>Không hoạt động</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <table className='table  table-hover table-bordered fs-5  mt-2 '>
                        <thead>
                            <tr className="table-secondary">
                                <th scope="col" className='p-3'>Mã NV</th>
                                <th scope="col" className='p-3'>Tên</th>
                                <th scope="col" className='p-3'>Năm sinh</th>
                                <th scope="col" className='p-3'>Số điện thoại</th>
                                <th scope="col" className='p-3'>Email</th>
                                <th scope="col" className='p-3'>Địa chỉ</th>
                                <th scope="col" className='p-3'>CCCD/CMND</th>
                                <th scope="col" className='p-3'>Chức vụ</th>
                                <th scope="col" className='p-3'>Trạng thái</th>
                                <th scope="col" className='p-3'></th>
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
                                    <td className='p-3'>{item.cccd}</td>
                                    <td className='p-3'>{item.chucvu}</td>
                                    <td className='p-3'>{item.status}</td>
                                    <td className='px-1 py-3 text-center'><i class="fa-solid fa-pen-to-square" onClick={this.openModalUpdate}></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center pt-3'>
                        {renderPageButtons()}
                    </div>
                </div>
                <div className="fixed-action-btn">
                    <button className="btn btn-primary rounded-circle" onClick={this.openModalAdd}>
                        <i class="fas fa-plus fa-2x p-3 py-4" aria-hidden="true"></i>
                    </button>
                    {showModalRemove && (
                        <div className="modal modalRemove border border-2 rounded-3">

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
                                    <button className='w-75 bg-light-secondary p-3 border border-1 rounded-3 fs-5 fw-bold' onClick={this.closeModalRemove}>HỦY</button>
                                </div>
                                <div className='col-6 text-center'>
                                    <button className='w-75 bg-danger p-3 border border-1 rounded-3 fs-5 fw-bold'>XÓA</button>
                                </div>
                            </div>

                        </div>
                    )}
                    <style jsx>{`
                            .modalRemove {
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

                    {showModalAdd && (
                        <div className="modal modalAdd border border-2 rounded-3">
                            <div className='modal-header d-flex justify-content-bettwen px-3 fw-bold'>
                                <label className='fs-3'>THÊM NHÂN VIÊN</label>
                                <span className='fs-4' slot='end' onClick={this.closeModalAdd}>X</span>
                            </div>
                            <div className='modal-content border border-0 p-4'>
                                <div className='row'>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Tên nhân viên :<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Tên nhân viên
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Số điện thoại :<span className='text-danger'>*</span></label>
                                        <input type="number" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Số điện thoại
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Mật khẩu :<span className='text-danger'>*</span></label>
                                        <input type="password" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Mật khẩu
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Ngày sinh :<span className='text-danger'>*</span></label>
                                        <input type="date" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Ngày sinh
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">CMND/CCCD :<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            CMND/CCCD
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Email :<span className='text-danger'>*</span></label>
                                        <input type="email" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Email
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Địa chỉ :<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Địa chỉ
                                        </div>
                                    </div>

                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Tỉnh:<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option disabled selected className='fs-5'>Chọn Tỉnh/Thành phố</option>
                                            <option value="1" className='fs-5'>Hồ Chí MiNH</option>
                                            <option value="2" className='fs-5'>Bình Định</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Quận/Huyện/Thành phố :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option disabled selected className='fs-5'>Chọn Quận/Huyện/Thành phố</option>
                                            <option value="1" className='fs-5'>Tân Bình</option>
                                            <option value="2" className='fs-5'>Bình Tân</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Xã/ Phường/ Thị Trấn :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option disabled selected className='fs-5'>Chọn Xã/ Phường/ Thị Trấn</option>
                                            <option value="1" className='fs-5'>Phường 1</option>
                                            <option value="2" className='fs-5'>Phường 2</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Chức vụ :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option value="1" className='fs-5'>Nhân viên</option>
                                            <option value="2" className='fs-5'>Quản lý</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Trạng thái :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option value="1" className='fs-5'>Hoạt động</option>
                                            <option value="2" className='fs-5'>Không hoạt động</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=' row d-flex justify-content-end mt-5'>
                                    <button className='w-25 bg-light-secondary p-3 border border-1 rounded-3 fs-5 fw-bold' onClick={this.closeModalAdd}>HỦY</button>
                                    <button className='w-25 ms-5 bg-primary p-3 border border-1 rounded-3 fs-5 fw-bold'>THÊM</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <style jsx>{`
                            .modalAdd {
                                display: block;
                                position: fixed;
                                top: 40%;
                                left: 55%;
                                transform: translate(-50%, -50%);
                                z-index: 1000;
                                background-color: white;
                                padding: 20px;
                                width: 50%; /* Set a specific width for the modal */
                                height: auto; /* Set a specific height for the modal */
                            }
                            `}
                    </style>
                    {showModalUpdate && (
                        <div className="modal modalAdd border border-2 rounded-3">
                            <div className='modal-header d-flex justify-content-bettwen px-3 fw-bold'>
                                <label className='fs-3'>SỬA THÔNG TIN NHÂN VIÊN</label>
                                <span className='fs-4' slot='end' onClick={this.closeModalUpdate}>X</span>
                            </div>
                            <div className='modal-content border border-0 p-4'>
                                <div className='row'>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Tên nhân viên :<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control p-3 rounded-3 fs-5" value={selectedPersonnel?.name || ''}
                                            onChange={(e) => this.handleNameChange(e.target.value)}
                                        />
                                        <div className="invalid-feedback">
                                            Tên nhân viên
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Số điện thoại :<span className='text-danger'>*</span></label>
                                        <input type="number" className="form-control p-3 rounded-3 fs-5" value={selectedPersonnel?.phone || ''} readOnly />
                                        <div className="invalid-feedback">
                                            Số điện thoại
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Mật khẩu :<span className='text-danger'>*</span></label>
                                        <input type="password" className="form-control p-3 rounded-3 fs-5" />
                                        <div className="invalid-feedback">
                                            Mật khẩu
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Ngày sinh :<span className='text-danger'>*</span></label>
                                        <input type="date" className="form-control p-3 rounded-3 fs-5" value={selectedPersonnel?.birthday || ''} />
                                        <div className="invalid-feedback">
                                            Ngày sinh
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">CMND/CCCD :<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control p-3 rounded-3 fs-5" value={selectedPersonnel?.cccd || ''} />
                                        <div className="invalid-feedback">
                                            CMND/CCCD
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Email :<span className='text-danger'>*</span></label>
                                        <input type="email" className="form-control p-3 rounded-3 fs-5" value={selectedPersonnel?.email || ''} readOnly />
                                        <div className="invalid-feedback">
                                            Email
                                        </div>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Địa chỉ :<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control p-3 rounded-3 fs-5" value={selectedPersonnel?.address || ''} />
                                        <div className="invalid-feedback">
                                            Địa chỉ
                                        </div>
                                    </div>

                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Tỉnh:<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option disabled selected className='fs-5'>Chọn Tỉnh/Thành phố</option>
                                            <option value="1" className='fs-5'>Hồ Chí MiNH</option>
                                            <option value="2" className='fs-5'>Bình Định</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Quận/Huyện/Thành phố :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option disabled selected className='fs-5'>Chọn Quận/Huyện/Thành phố</option>
                                            <option value="1" className='fs-5'>Tân Bình</option>
                                            <option value="2" className='fs-5'>Bình Tân</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Xã/ Phường/ Thị Trấn :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required
                                        >
                                            <option disabled selected className='fs-5'>Chọn Xã/ Phường/ Thị Trấn</option>
                                            <option value="1" className='fs-5'>Phường 1</option>
                                            <option value="2" className='fs-5'>Phường 2</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Chức vụ :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required value={selectedPersonnel?.chucvu || ''}
                                        >
                                            <option value="1" className='fs-5'>Nhân viên</option>
                                            <option value="2" className='fs-5'>Quản lý</option>
                                        </select>
                                    </div>
                                    <div className='col-6 px-4 pt-3'>
                                        <label className="form-label fs-5">Trạng thái :<span className='text-danger'>*</span></label>
                                        <select className="form-control p-3 fs-5  select2-hidden-accessible" required value={selectedPersonnel?.status || ''}
                                        >
                                            <option value="1" className='fs-5'>Hoạt động</option>
                                            <option value="2" className='fs-5'>Không hoạt động</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=' row d-flex justify-content-end mt-5'>
                                    <button className='w-25 bg-light-secondary p-3 border border-1 rounded-3 fs-5 fw-bold' onClick={this.closeModalUpdate}>HỦY</button>
                                    <button className='w-25 ms-5 bg-primary p-3 border border-1 rounded-3 fs-5 fw-bold'>CẬP NHẬT</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Detail;
