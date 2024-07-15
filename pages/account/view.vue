<template>
  <div class="profile-container bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
    <div class="flex items-center mb-4">
      <img
        :src="targetUser.photoURL"
        alt="Profile Picture"
        class="rounded-full h-16 w-16 mr-4"
      />
      <div>
        <h2 class="font-bold text-xl text-gray-900">{{ targetUser.displayName }}</h2>
        <p class="text-gray-600">{{ targetUser.status }}</p>
        <p class="text-gray-800">{{ targetUser.explanation }}</p>
      </div>
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
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 28rem;
  margin: 1.5rem auto;
}

.profile-container img {
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
}

.profile-container h2 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 0.25rem;
}

.profile-container p {
  margin-bottom: 0.5rem;
}

.profile-container .text-gray-600 {
  color: #718096;
}

.profile-container .text-gray-800 {
  color: #2d3748;
}
</style>
