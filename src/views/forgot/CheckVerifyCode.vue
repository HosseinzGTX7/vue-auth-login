<script setup>
import { ref } from "vue";
import { checkVerifyCode } from "../../services/api";
import { useRouter } from "vue-router";

const code = ref("");
const message = ref("");
const router = useRouter();

const handleCheck = async () => {
  try {
    await checkVerifyCode({ code: code.value });
    router.push("/forgot/reset"); // بعد از تأیید برو مرحله بعد
  } catch (err) {
    message.value = err.response?.data?.message || "کد نامعتبر است";
  }
};
</script>

<template>
  <div class="container mt-5 col-md-4">
    <h3 class="mb-3 text-center">تأیید کد</h3>
    <input v-model="code" type="text" class="form-control mb-3" placeholder="کد تأیید" />
    <button class="btn btn-success w-100" @click="handleCheck">تأیید</button>
    <p class="text-danger mt-2">{{ message }}</p>
  </div>
</template>
