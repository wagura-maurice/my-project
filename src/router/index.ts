import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/auth/SignUp.vue';
import SignIn from '../views/auth/SignIn.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue';
import ResetPassword from '../views/auth/ResetPassword.vue';
import VerifyAccount from '../views/auth/VerifyAccount.vue';
import Welcome from '../views/frontend/Welcome.vue';
import Dashboard from '../views/backend/Dashboard.vue';
import NotFound from '../views/NotFound.vue';
import Unauthorized from '../views/Unauthorized.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized,
  },
  {
    path: '/signup', // Add sign-up route
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signin', // Add sign-in route
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/forgot-password', // Add forgot password route
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/reset-password/:token', // Add reset password route with a token parameter
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/verify-account/:token', // Add verify account route with a token parameter
    name: 'VerifyAccount',
    component: VerifyAccount,
  },
  {
    path: '/:catchAll(.*)', // Catch-all route for 404 Not Found
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router; // Export the router instance
