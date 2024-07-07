<template>
  <div>
    <div
      style="height: calc(100vh - 100px)"
      class="d-flex justify-center align-center"
    >
      <div class="text-center">
        <v-slide-y-transition v-show="home1">
          <v-img src="/mga.png" width="100" class="ma-auto"></v-img>
        </v-slide-y-transition>
        <v-slide-y-transition v-show="home2">
          <div>
            <h1>마인즈</h1>
            <p>판교고 학생들을 위한 맞춤형 청소년 서비스</p>
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

    <div ref="target">
      <h1>test</h1>
      <v-expand-transition>
        <v-card v-show="targetIsVisible">
          <v-card-title></v-card-title>
        </v-card>
      </v-expand-transition>
    </div>
  </div>
</template>

<script setup>
// vue intersect observer
import { onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = ref(false);

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
});
</script>
