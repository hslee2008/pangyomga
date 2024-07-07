<template>
  <div style="width: 100%" class="mx-4">
    {{ mypersonality }}
  </div>
</template>

<script setup>
const route = useRoute();
const elasticity = route.query.elasticity;
const excited = route.query.excited;
const myway = route.query.myway;
const onestep = route.query.onestep;

const mypersonality = ref([]);

const text = ["유연한 성격", "활발한 성격", "마이웨이", "한발자국"];

onMounted(() => {
  // compare elasticity, excited, myway, onestep and get the biggest value, and the text accordingly
  let max = Math.max(elasticity, excited, myway, onestep);

  if (max == elasticity) {
    mypersonality.value.push("유연한 성격");
  }

  if (max == excited) {
    mypersonality.value.push("활발한 성격");
  }

  if (max == myway) {
    mypersonality.value.push("마이웨이");
  }

  if (max == onestep) {
    mypersonality.value.push("한발자국");
  }
});
</script>
