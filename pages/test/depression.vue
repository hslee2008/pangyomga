<template>
  <div class="container">
    <h1>우울증 자가 진단</h1>

    <!-- Questions Section -->
    <v-card v-for="(item, i) in questions" :key="i" elevation="2" class="my-4">
      <v-card-text class="text-center font-weight-bold">{{ item }}</v-card-text>
      <div class="d-flex justify-center">
        <v-btn-toggle v-model="answers[i]" class="mt-2">
          <v-btn value="true" color="success">
            <v-icon>mdi-alpha-o</v-icon>
            <span>참</span>
          </v-btn>
          <v-btn value="false" color="error">
            <v-icon>mdi-alpha-x</v-icon>
            <span>거짓</span>
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-card>

    <br /><br />

    <div class="d-flex">
      <v-btn block variant="outlined" color="primary" @click="submitAnswers">결과 보기</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const questions = [
  "자신이 죽는 것이 더 낫다고 생각하거나 어떤 식으로든 자신을 해칠 것이라고 생각함.",
  "입맛이 없거나 과식을 함.",
  "기분이 가라앉거나, 우울하거나 희망이 없다고 자주 생각함.",
  "자신을 부정적으로 생각하고 자신이 실패자라고 느끼거나 자신 또는 가족을 실망시킴.",
  "잠을 너무 많이 자거나 잠들기가 어렵고 자주 깬다.",
  "평소 하는 일에 대한 흥미가 없어지거나 즐거움을 느끼지 못한다.",
  "앞일이 막막하게 느껴진다.",
  "외로움을 느낀다.",
  "내가 하는 일에 집중하기 어려웠다.",
  "평상시에는 아무렇지 않던 일이 귀찮게 느껴졌다.",
  "일상에 만족한다.",
  "죄책감을 자주 느낀다.",
  "벌 받는 느낌이 든다.",
  "우는 날이 많아지고 짜증이 늘었다.",
  "주변 사람들에게 관심을 가진다.",
  "내 인생에는 좋지 않은 일만 있는 것 같다.",
  "나는 이 세상에 필요 없는 사람이라고 생각한다.",
  "항상 머리가 어지럽고 멍한 기분이다.",
  "갑자기 울고 싶을 때가 많다.",
  "타인이 눈치챌 정도로 평소보다 더 초조하게 행동하거나 반대로 말하는 속도나 움직임이 둔해짐.",
  "평소보다 집중을 잘 못하거나 결정을 쉽게 내리지 못함."
]

const answers = ref(Array(questions.length).fill('false'))

const router = useRouter()

const submitAnswers = () => {
  const score = answers.value.filter(answer => answer === 'true').length
  alert(score)
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.v-card {
  border-radius: 10px;
  padding: 16px;
  background-color: #f9f9f9;
}

.v-card-text {
  font-size: 1rem;
}

.v-btn-toggle {
  width: 100%;
}

.v-btn-toggle > .v-btn {
  width: 50%;
}

.v-btn {
  min-width: 100px;
}

.v-btn .v-icon {
  font-size: 1.5rem;
}

.v-btn.block {
  width: 100%;
}

.v-btn.success {
  background-color: #4caf50;
}

.v-btn.error {
  background-color: #f44336;
}

.v-btn:hover {
  opacity: 0.9;
}
</style>
