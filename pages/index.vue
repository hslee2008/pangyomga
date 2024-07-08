<template>
  <div style="width: 100%" class="mx-4">
    <div
      style="height: calc(100vh - 100px)"
      class="d-flex justify-center align-center"
    >
      <div class="text-center">
        <v-slide-y-transition v-show="home1">
          <v-img src="/mga.png" width="100" class="ma-auto mb-2"></v-img>
        </v-slide-y-transition>
        <v-slide-y-transition v-show="home2">
          <div>
            <h1>마인즈</h1>
            <p>판교고 학생들을 위한</p>
            <p>맞춤형 서비스</p>
          </div>
        </v-slide-y-transition>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div ref="target" class="mx-4">
      <h1 class="text-center mb-5">마인즈</h1>

      <v-slide-x-transition>
        <v-card v-show="targetIsVisible" variant="outlined">
          <v-card-title>감정 나누기</v-card-title>
          <v-card-subtitle class="text-h4 font-weight-black" style="color: #DB1307">
            {{ share_emotion }}개
          </v-card-subtitle>
          <v-card-text>
            자신의 고민을 전문가 및 또래 친구들과 온라인으로 상담합니다.
          </v-card-text>
        </v-card>
      </v-slide-x-transition>
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { ref as dbRef, onValue } from "firebase/database";

const target = ref(null);
const targetIsVisible = ref(false);

const share_emotion = ref(0);

const { $db } = useNuxtApp();

const home1 = ref(false);
const home2 = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    setTimeout(() => (targetIsVisible.value = isIntersecting), 500);
  }
);

onMounted(() => {
  setTimeout(() => (home1.value = true), 300);
  setTimeout(() => (home2.value = true), 400);

  const db = dbRef($db, "community/share-emotion/number");
  onValue(db, (snapshot) => {
    share_emotion.value = snapshot.val();
  });
});
</script>
