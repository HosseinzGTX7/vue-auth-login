<script setup>
import { ref } from "vue"
import { register } from "../services/api"
import { useRouter } from "vue-router"

const first_name = ref("")
const last_name = ref("")
const mobile = ref("")
const email = ref("")
const password = ref("")
const message = ref("")
const router = useRouter()

const handleRegister = async () => {
  try {
    await register({
      first_name: first_name.value,
      last_name: last_name.value,
      mobile: mobile.value,
      email: email.value,
      password: password.value,
    })
    message.value = "ثبت‌نام موفقیت‌آمیز بود!"
    router.push("/login")
  } catch (err) {
    message.value = err.response?.data?.Message || "خطا در ثبت‌نام"
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card shadow-lg p-4 rounded-4">
          <h3 class="text-center mb-4 fw-bold">ثبت‌نام</h3>

          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <input v-model="first_name" type="text" class="form-control form-control-lg text-end" placeholder="نام کوچک" required />
            </div>
            <div class="mb-3">
              <input v-model="last_name" type="text" class="form-control form-control-lg text-end" placeholder="فامیل" required />
            </div>
            <div class="mb-3">
              <input v-model="mobile" type="text" class="form-control form-control-lg text-end" placeholder="شماره موبایل" required />
            </div>
            <div class="mb-3">
              <input v-model="email" type="email" class="form-control form-control-lg text-end" placeholder="ایمیل" required />
            </div>
            <div class="mb-3">
              <input v-model="password" type="password" class="form-control form-control-lg text-end" placeholder="رمز عبور" required minlength="8" />
            </div>

            <button type="submit" class="btn btn-success w-100 btn-lg mt-2">ثبت‌نام</button>
          </form>


          <p class="text-danger mt-3 text-center">{{ message }}</p>
          <p class="text-center mt-3 text-muted">
            قبلاً ثبت‌نام کرده‌اید؟
            <router-link to="/login" class="text-decoration-none fw-bold">ورود</router-link>
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
