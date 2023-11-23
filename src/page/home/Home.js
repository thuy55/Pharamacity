import React from 'react';
import './styles.scss';
class Home extends React.Component {
    state = {};
    render() {
        return (
            <div className='container'>
                <div className='row w-100'>
                    <div className='col-5 text-center'>
                        <img src="/icons/home1.svg" className='w-75'></img>
                    </div>
                    <div className='col-7'>
                        <div className=' fw-bold text-center text-success mt-5' style={{ fontSize: "35px" }}>
                            PHẦN MỀM QUẢN LÝ BÁN THUỐC TN
                        </div>
                        <div className='row ps-5 mt-5'>
                            <ul>
                                <li className='mb-3'>
                                    <i class="fa-solid fa-earth-asia fa-2x"></i>
                                    <span className='fs-4 fw-bold ms-4'>www.htpharmacity.vn</span>

                                </li>
                                <li className='mb-3'>
                                    <i class="fa-solid fa-phone-volume fa-2x"></i>
                                    <span className='fs-4 fw-bold ms-4'>Số điện thoại: 0123456789</span>

                                </li>
                                <li className='mb-3'>
                                    <i class="fa-solid fa-envelope fa-2x"></i>
                                    <span className='fs-4 fw-bold ms-4'>Email: htpharmacity@gmail.com</span>

                                </li>
                                <li className='mb-3'>
                                    <i class="fa-solid fa-location-dot fa-2x"></i>
                                    <span className='fs-4 fw-bold ms-4'>Địa chỉ: 12 Nguyễn Văn Bảo, phường 4, quận Gò Vấp, TPHCM</span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row fs-4 mx-3'>
                    <div>
                        Nhà thuốc TH - là một trong những cửa hàng bán thuốc lẻ uy tín hàng đầu tại Việt Nam.
                    </div>
                    <div>
                        <ul >
                            <li>
                                - Nhà thuốc An Khang chuyên cung cấp đa dạng các loại dược phẩm, sản phẩm thực phẩm chức năng, trang thiết bị
                                y tế, dược mỹ phẩm cùng nhiều sản phẩm chăm sóc sức khoẻ, tiêu dùng hàng ngày,....
                            </li>
                            <li>
                                - Mong muốn được chăm sóc, phục vụ sức khỏe cộng đồng với chất lượng tốt nhất và giá cả hợp lý với
                                đội ngũ dược sỹ chuyên môn cao, đáng tin cậy.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row mx-2 mt-4'>
                    <div className='col-3 fs-4 text-black'>
                        <div>
                            Lịch làm việc: Tất cả các ngày trong tuần
                        </div>
                        <div>
                            Giờ làm việc: 8:00- 21:00
                        </div>
                    </div>
                    <div className='col-3 text-center'>
                        <img src="/icons/dmca.png" className='w-50'></img>
                        <div className='mt-4'>
                            <img src="/icons/home2.png" className='w-75'></img>
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className='row mb-3'>
                            <div className='col-2 text-center'>
                                <i class="fa-solid fa-house-medical-flag fa-4x text-success"></i>
                            </div>
                            <div className='col-10 '>
                                <div className='text-success fs-3 fw-bold'>
                                    ĐẠT TIÊU CHUẨN GPP
                                </div>
                                <div className='fs-5'>
                                    Nhà thuốc đạt tiêu chuẩn GPP do Bộ Y Tế ban hành.
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-2 text-center'>
                                <i class="fa-solid fa-square-phone fa-4x text-danger"></i>
                            </div>
                            <div className='col-10 '>
                                <div className='text-success fs-3 fw-bold'>
                                    HỖ TRỢ 24/24
                                </div>
                                <div className='fs-5'>
                                    Hỗ trợ đặt hàng, tư vấn thuốc miễn phí.
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="fa-regular fa-handshake fa-4x text-primary"></i>
                            </div>
                            <div className='col-10 '>
                                <div className='text-success fs-3 fw-bold'>
                                    ĐƯỢC TIN MUA
                                </div>
                                <div className='fs-5'>
                                    Được đông đảo lượng người tiêu dùng mua thuốc.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-bottom fs-4 fw-bold text-center mb-2">
                    @ 2023 PM Thiết kế bởi TN
                </div>

            </div>
        );
    }
}

export default Home;
