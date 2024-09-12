import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store"
import HomeView from "../views/User/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/UserRegistration/LoginBox.vue"),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("../views/UserRegistration/SignupBox.vue"),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import("../views/UserRegistration/ForgotPassword.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/User/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/User/ShopView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/User/BlogView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/User/ContactView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/User/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/User/CheckoutView.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/cart/:id',
    name: 'cartItem',
    component: () => import("../views/User/CartItemView.vue"),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("../views/Admin/Admin Views/AdminPage.vue"),
    children: [
      {
        path: '/admin/overview',
        name: 'overview',
        component: () => import("../views/Admin/Admin Views/OverviewPage.vue"),
      }, {
        path: '/admin/products',
        name: 'products',
        component: () => import("../views/Admin/Admin Views/ProductsPage.vue"),
      }, {
        path: '/admin/orders',
        name: 'orders',
        component: () => import("../views/Admin/Admin Views/OrdersPage.vue"),
      },
      {
        path: '/admin/finance',
        name: 'finance',
        component: () => import("../views/Admin/Admin Views/FinanceMetrics.vue"),
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: () => import("../views/Admin/AdminLogin.vue"),
  },

];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});


export default router;