import Home from '../page/home/Home';
import Login from '../page/login';
import Customer from '../page/customer';
import Personnel from '../page/personnel';
import Bill from '../page/bill';
import warehouse from '../page/warehouse';

// không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/customer', component: Customer },
    { path: '/personnel', component: Personnel },
    { path: '/bill', component: Bill },
    { path: '/warehouse', component: warehouse },
];

// sẽ phải yêu cầu đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
