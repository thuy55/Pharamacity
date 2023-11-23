import Home from '../page/home/Home';
import Login from '../page/login';
import Customer from '../page/customer';

// không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/customer', component: Customer },
];

// sẽ phải yêu cầu đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
