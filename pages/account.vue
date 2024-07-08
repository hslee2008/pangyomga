<template>
  <div style="width: 100%" class="mx-4">
    <h1 class="text-center">나의 활동</h1>

    <br />

    <v-card variant="outlined" class="py-3" width="100%">
      <div class="d-flex align-center">
        <v-avatar class="ml-5">
          <v-img :src="userInfo.photoURL"></v-img>
        </v-avatar>
        <div>
          <v-card-title style="padding: 0 1rem !important">
            {{ userInfo.displayName }}
          </v-card-title>
          <v-card-subtitle style="padding: 0 1rem !important">
            {{ userInfo.email }}
          </v-card-subtitle>
        </div>
      </div>

      <v-btn
        @click="logout"
        variant="outlined"
        color="red"
        width="calc(100% - 33px)"
        class="mx-4 mt-3"
      >
        로그아웃
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { onAuthStateChanged } from "firebase/auth";

const userInfo = ref({});

const { $auth } = useNuxtApp();

onMounted(() => {
  onAuthStateChanged($auth, (user) => {
    userInfo.value = user;
  });
});

const logout = () => {
  $auth.signOut();
  router.push("/");
};
</script>
