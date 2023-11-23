import React from 'react';

import './styles.scss';

class Detail extends React.Component {
    state = {};
    render() {
        return (
            <div className='container'>
                <div className='row ms-3 mt-4'>
                    <div className='card border border-2 rounded-3'>
                        <div className='card-content p-3'>
                            <div className='row'>
                                <div className='col-2 text-center'>
                                        <img src='https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-avatar-nu-de-thuong.jpg' style={{width: "150px"}}></img>
                                    <div className='mt-3'>
                                        Mã khách hàng: 123
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div class="col-md-12 mb-4">
                                        <label for="name" class="form-label fs-5">Tên khách hàng :</label>
                                        <input type="text" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                            Tên khách hàng
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Số điện thoại :</label>
                                        <input type="text" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                            Số điện thoại
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Năm sinh :</label>
                                        <input type="date" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                            Năm sinh
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Email :</label>
                                        <input type="email" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                            Email
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3 px-4'>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Địa chỉ :</label>
                                        <input type="text" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                            Số nhà
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Tỉnh/ Thành phố :</label>
                                        <input type="text" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                        Tỉnh/ Thành phố 
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Quận/ Huyện/ Thị xã :</label>
                                        <input type="text" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
                                        Quận/ Huyện/ Thị xã
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="password" class="form-label fs-5">Xã/ Phường/ Thị trấn :</label>
                                        <input type="text" class="form-control p-2 rounded-3"/>
                                        <div class="invalid-feedback">
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
                                            <div className='btn p-2 bg-danger w-75 fw-bold fs-5'>
                                            <i class="fa-solid fa-trash-can"></i> Xóa
                                                    </div>
                                        </div>
                                        <div className='col-6 text-center'>
                                        <div className='btn p-2 bg-primary w-75 fw-bold fs-5'>
                                        <i class="fa-solid fa-file-invoice-dollar"></i>   Đơn hàng
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
                        <tr>
                            <th scope="col">Mã KH</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Năm sinh</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col">Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123</td>
                            <td>Nguyễn Văn A</td>
                            <td>2000</td>
                            <td>1231355622</td>
                            <td>a@gmail.com</td>
                            <td>12a lê văn tám quận 8</td>
                        </tr>
                        <tr>
                            <td>126</td>
                            <td>Nguyễn Văn D</td>
                            <td>2000</td>
                            <td>1231355622</td>
                            <td>a@gmail.com</td>
                            <td>12a lê văn tám quận 8</td>
                        </tr>
                    </tbody>
                        
                    </table>
                </div>
                
            </div>
        );
    }
}

export default Detail;
