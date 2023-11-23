import React from 'react';
import './styles.scss';
class Login extends React.Component {
    state = {};
    render() {
        return (
            <div className='bg-login' style={{paddingLeft:"60px", paddingRight:"60px"}} >
             <div class="col-md-12 text-center fw-bold fs-1 my-5">
                        Chào mừng bạn đến với nhà thuốc TN
                    </div>
                <div class="row align-items-center px-5">
                    
                    <div class="col-5">
                    <div class="card mb-5 border border-2 rounded-3 p-1">
                        <div class="card-body p-5">
                        <div class="col-md-12 text-center">
                            <h3 class="fw-bold text-success fs-1">ĐĂNG NHẬP</h3>
                            <p className='fs-5'>Vui lòng nhập tài khoản đăng nhập.<br>
                            </br> Nếu bạn không có vui lòng liên hệ với quản trị viên.</p>
                        </div>
                        {/* <form class="needs-validation login-form"> */}
                            <div class="col-md-12 mb-4">
                            <label for="account" class="form-label fs-4">Tài khoản</label>
                            <input type="text" class="form-control p-3" />
                            <div class="invalid-feedback">
                                Vui lòng nhập tại khoản
                            </div>
                            </div>
                            <div class="col-md-12 mb-4">
                            <label for="password" class="form-label fs-4">Mật khẩu</label>
                            <input type="password" class="form-control p-3"/>
                            <div class="invalid-feedback">
                                Vui lòng nhập mật khẩu
                            </div>
                            </div>
                            <div class="col-12 mt-4">
                                <a href='/'>
                                <button class="btn btn-primary p-3  w-100 fs-4 fw-bold" >Đăng nhập</button>
                                </a>
                            
                            </div>
                        {/* </form> */}
                        </div>
                    </div>
                    </div>
                    <div class="col-6 text-end">
                        <img src="/icons/home1.svg" className='img-login' />
                    </div>
                    <div class="col-md-12 text-center mb-4 fixed-bottom ">
                        © <span class="text-muted font-weight-bold mr-2 fs-5">2023<span> Bản quyền và thiết kế bởi NT</span></span></div>
                </div>
            
            </div>
        );
    }
}

export default Login;
