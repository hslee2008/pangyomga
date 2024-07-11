<template>
  <div
    class="profile-container mx-auto p-4 bg-white rounded-lg shadow-lg max-w-md"
  >
    <div class="flex items-center mb-4">
      <img
        :src="targetUser.photoURL"
        alt="Profile Picture"
        class="rounded-full h-16 w-16 mr-4"
      />
      <div>
        <h2 class="font-bold text-lg">{{ targetUser.displayName }}</h2>
        <p class="text-gray-600">{{ targetUser.status }}</p>
        <p>{{ targetUser.explanation }}</p>
      </div>
    </div>

    <div v-if="userInfo.uid !== uid">
      <v-btn
        @click="addFriend"
        variant="outlined"
        color="primary"
        width="calc(100% - 33px)"
        class="mx-4 mt-3"
      >
        친구 추가
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref as dbRef, onValue, set } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const route = useRoute();
const isRevealed = ref(false);
const userInfo = ref({});
const targetUser = ref({});

const uid = route.query.uid;

const status = ref("");
const explanation = ref("");

const { $auth, $db } = useNuxtApp();

onMounted(() => {
  onAuthStateChanged($auth, (user) => {
    userInfo.value = user;

    const userRef = dbRef($db, `users/${user.uid}`);
    onValue(userRef, (snapshot) => {
      isRevealed.value = snapshot.val()?.reveal ?? false;
    });
  });

  const userRef = dbRef($db, `users/${uid}`);
  onValue(userRef, (snapshot) => {
    targetUser.value = snapshot.val();
  });
});
</script>

<style>
.profile-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.profile-container img {
  border-radius: 50%;
}

.profile-container h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.profile-container p {
  margin-bottom: 0.75rem;
}

.profile-container .text-gray-600 {
  color: #718096;
}

.profile-container .text-gray-800 {
  color: #2d3748;
}
</style>
