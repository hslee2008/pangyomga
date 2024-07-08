<template>
  <div style="width: 100%" class="mx-4">
    <h1>ADHD 검사하기</h1>

    <br />

    <v-card v-for="(item, i) in adhd" :key="i" elevation="0">
      <v-card-text>{{ item }}</v-card-text>

      <div class="d-flex justify-center">
        <v-rating
          v-model="answers[i]"
          length="5"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half-full"
          color="yellow"
          background-color="grey"
        ></v-rating>
      </div>

      <br />
    </v-card>

    <br /><br />

    <div class="d-flex justify-center">
      <v-btn @click="submitAnswers" block color="primary">결과보기</v-btn>
    </div>

    <br /><br />

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-card-title>나는 ADHD인가?</v-card-title>
        <v-card-subtitle>{{ totalScore }}점</v-card-subtitle>

        <br />

        <div class="mx-4">
          <v-card v-if="totalScore <= 60" variant="outlined" class="pb-2">
            <v-card-title>안전</v-card-title>
            <v-card-subtitle>0 ~ 60</v-card-subtitle>
          </v-card>
          <v-card v-else-if="totalScore <= 90" variant="outlined" class="pb-2">
            <v-card-title>약간 위험</v-card-title>
            <v-card-subtitle>61 ~ 90</v-card-subtitle>
          </v-card>
          <v-card v-else variant="outlined" class="pb-2">
            <v-card-title>심각</v-card-title>
            <v-card-subtitle>91 ~ 135</v-card-subtitle>
          </v-card>
        </div>

        <iframe height="100%" src="http://www.snuh.org/health/nMedInfo/nView.do?category=DIS&medid=AA000358" style="border: none"></iframe>
     
        <v-card-actions class="d-flex justify-center">
          <v-btn variant="tonal" @click="dialog = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const dialog = ref(false);
const totalScore = ref(0);
const adhd = [
  "한 번 시작한 일을 끝내기 힘듭니까?",
  "일을 쉽게 질려합니까?",
  "일을 자주미루는 편입니까?",
  "머리뜯기, 다리떨기 등 산만한 행동을 합니까?",
  "집중하는 시간이 불규칙합니까?",
  "주의력이 부족합니까?",
  "새로운 상황에서 적응하기 힘든편입니까?",
  "중독에 잘 빠집니까?",
  "쉽게 빠지고 쉽게 질려합니까?",
  "강박증이 있습니까?",
  "어떤 일을 할때 마감시간을 잘못 맞춥니까?",
  "물건을 잘 잃어버립니까?",
  "계획을 세우는 조직력이 부족하다고 생각하십니까?",
  "밤에 잠에들기가 힘듭니까?",
  "시간을 상대적으로 생각합니까? (시간개념이 없다는 뜻)",
  "실수를 자주합니까?",
  "충동적으로 과소비합니까?",
  "어떤 일에 대해 지나친 반응을 합니까?",
  "자신의 차례를 기다리지 못해 답답한 적이 있습니까?",
  "즉흥적으로 행동하는 편입니까?",
  "가끔 폭식을 합니까?",
  "자제력이 부족합니까?",
  "신경이 예민합니까?",
  "폭발적으로 화를 낼때가 있습니까?",
  "감정기복이 심합니까?",
  "자존감과 성취감이 낮습니까?",
  "감정을 과도하게 평가합니까?",
];

// Use a reactive object to ensure reactivity with arrays
const answers = reactive(Array(adhd.length).fill(0));

const submitAnswers = () => {
  console.log("User's answers:", answers);
  totalScore.value = answers.reduce((a, b) => a + b, 0);
  dialog.value = true;
};
</script>

<style>
.selected-button {
  background-color: #1976d2 !important; /* Vuetify primary color */
  color: white !important;
}
</style>
