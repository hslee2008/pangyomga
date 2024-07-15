<template>
  <div style="width: 100%" class="mx-4">
    <h1>우을증 검사 결과</h1>
    <p>당신의 우울증 점수는 {{ score }}점 입니다.</p>

    <br />
  </div>
</template>

<script setup>
const route = useRoute();
const score = route.query.score;

const result = ref("");
</script>
