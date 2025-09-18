<script setup>
import { ref } from "vue"
import { login } from "../services/api"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const message = ref("")
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await login({ email: email.value, password: password.value })
    localStorage.setItem("token", res.data.token) // ذخیره JWT
    message.value = "ورود موفق!"
    router.push("/") // بعد از ورود به صفحه اصلی برو
  } catch (err) {
    message.value = err.response?.data?.message || "خطا در ورود"
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card shadow-lg p-4 rounded-4">
          <h3 class="text-center mb-4 fw-bold">ورود</h3>

          <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control form-control-lg text-end" placeholder="ایمیل" />
          </div>
          <div class="mb-3">
            <input v-model="password" type="password" class="form-control form-control-lg text-end" placeholder="رمز عبور" />
          </div>

          <button class="btn btn-primary w-100 btn-lg mt-2" @click="handleLogin">ورود</button>
          </form>
          
          <p class="text-danger mt-3 text-center">{{ message }}</p>
          <p class="text-center mt-3 text-muted">
            حساب کاربری ندارید؟
            <router-link to="/register" class="text-decoration-none fw-bold">ثبت‌نام</router-link>
          </p>
          <p class="text-center mt-1">
            <router-link to="/forgot/send" class="text-decoration-none text-info">فراموشی رمز عبور؟</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f5f6fa
}

.card {
  background: white
}

input::placeholder {
  text-align: right
}
</style>
