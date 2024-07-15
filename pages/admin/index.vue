<template>
  <div class="admin-password">
    <form @submit.prevent="submitForm">
      <v-card class="password-card">
        <v-card-title class="password-title text-center">
          관리자 암호
        </v-card-title>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          variant="outlined"
          dense
          required
        ></v-text-field>
        <v-btn type="submit" color="primary" class="submit-btn">Submit</v-btn>
        <p v-if="error" class="error-message">{{ error }}</p>
      </v-card>
    </form>
  </div>
</template>

<script setup>
const router = useRouter();

const password = ref("");
const error = ref("");

const submitForm = () => {
  if (password.value === "admin123") {
    router.push("/admin/admin");
  } else {
    error.value = "Invalid password. Please try again.";
    password.value = "";
  }
};
</script>

<style scoped>
.admin-password {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
}

.password-card {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.password-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.submit-btn {
  margin-top: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
