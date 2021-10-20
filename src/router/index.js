import VueRouter from 'vue-router';

const Login = () => import('../pages/login');
const Home = () => import('../pages/home');
const Layout = () => import('../pages/layout');
const Edit = () => import('../pages/edit');

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/user/:type',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/edit',
        name: 'edit',
        component: Edit
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!localStorage.getItem('token') && to.name !== 'login') {
    console.log({ 1: to })

    next({ name: 'login', params: { type: 'SignIn' } })
  } else {
    console.log({ 2: to })

    next()
  }
})

export default router
