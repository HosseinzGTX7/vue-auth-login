<script setup>
import { ref } from "vue";
import { resetPassword } from "../../services/api";
import { useRouter } from "vue-router";

const password = ref("");
const confirmPassword = ref("");
const message = ref("");
const router = useRouter();

const handleReset = async () => {
  if (password.value !== confirmPassword.value) {
    message.value = "رمزها یکسان نیستند";
    return;
  }
  try {
    await resetPassword({ password: password.value });
    message.value = "رمز با موفقیت تغییر کرد";
    router.push("/login"); // بعد از تغییر رمز برو به صفحه ورود
  } catch (err) {
    message.value = err.response?.data?.message || "خطا در تغییر رمز";
  }
};
</script>

<template>
  <div class="container mt-5 col-md-4">
    <h3 class="mb-3 text-center">تنظیم رمز جدید</h3>
    <input v-model="password" type="password" class="form-control mb-3" placeholder="رمز جدید" />
    <input v-model="confirmPassword" type="password" class="form-control mb-3" placeholder="تکرار رمز جدید" />
    <button class="btn btn-primary w-100" @click="handleReset">ثبت</button>
    <p class="text-danger mt-2">{{ message }}</p>
  </div>
</template>
