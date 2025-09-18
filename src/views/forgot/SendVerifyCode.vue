<script setup>
import { ref } from "vue";
import { sendVerifyCode } from "../../services/api";
import { useRouter } from "vue-router";

const email = ref("");
const message = ref("");
const router = useRouter();

const handleSend = async () => {
  try {
    await sendVerifyCode({ email: email.value });
    message.value = "کد به ایمیل شما ارسال شد.";
    router.push("/forgot/check"); // بعد از موفقیت برو مرحله بعد
  } catch (err) {
    message.value = err.response?.data?.message || "خطا در ارسال کد";
  }
};
</script>

<template>
  <div class="container mt-5 col-md-4">
    <h3 class="mb-3 text-center">بازیابی رمز عبور</h3>
    <input v-model="email" type="email" class="form-control mb-3" placeholder="ایمیل" />
    <button class="btn btn-primary w-100" @click="handleSend">ارسال کد</button>
    <p class="text-danger mt-2">{{ message }}</p>
  </div>
</template>
