import { createRouter, createWebHistory } from "vue-router"

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

import SendVerifyCode from "../views/forgot/SendVerifyCode.vue"
import CheckVerifyCode from "../views/forgot/CheckVerifyCode.vue"
import ResetPass from "../views/forgot/ResetPass.vue"

const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/sendVerifyCode", component: SendVerifyCode },
  { path: "/checkVerifyCode", component: CheckVerifyCode },
  { path: "/resetPass", component: ResetPass },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router