<template>
  <div class="container">
    <h1>불안 자가 진단</h1>
    <v-card
      v-for="(item, i) in generalAnxiety"
      :key="'general-' + i"
      elevation="2"
      class="my-4"
    >
      <v-card-text>{{ item }}</v-card-text>
      <div class="text-center">
        <v-btn-toggle v-model="generalAnxietyIndex[i]" class="mt-2">
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

    <v-card
      v-for="(item, i) in socialAnxiety"
      :key="'social-' + i"
      elevation="2"
      class="my-4"
    >
      <v-card-text>{{ item }}</v-card-text>
      <div class="text-center">
        <v-btn-toggle v-model="socialAnxietyIndex[i]" class="mt-2">
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
      <v-btn @click="submitAnswers" block color="primary" variant="tonal">
        결과 보기
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const generalAnxiety = [
  "가끔씩 몸이 저리고 쑤시며 감각이 마비된 느낌을 받는다.",
  "흥분된 느낌을 받는다.",
  "가끔씩 다리가 떨리곤 한다.",
  "편안하게 쉴 수가 없다.",
  "자주 손이 떨린다.",
  "안절부절 못한다.",
  "불안한 상태에 놓여 있다.",
  "땀을 많이 흘린다 (더위로 인한 경우가 아님).",
  "자주 얼굴이 붉어진다.",
  "숨이 가빠지고 목이 조여오는 듯한 느낌이 든다.",
  "조그만 일에도 크게 놀란다.",
  "화장실을 자주 가는 편이다.",
];
const socialAnxiety = [
  "새로운 사람을 만날 때 긴장하시나요?",
  "대중 앞에서 말할 때 불안을 느끼시나요?",
  "친구들과 모임이나 파티에 참석하기 전에 긴장하시나요?",
  "새로운 상황에 처할 때 불안을 느끼시나요?",
  "다른 상황들이 나를 평가하는 것이 걱정되나요?",
  "공공장소에서 혼자 있을 때 불안을 느끼시나요?",
  "다른 사람들의 평가에 민감하게 반응하시나요?",
  "사회적인 상황에서 자신감이 부족하다고 느껴지나요?",
  "새로운 사람과의 대화를 시작하는 것이 어렵게 느껴지나요?",
  "다른 사람들 앞에서 나의 의견을 표현하는 것이 어렵게 느껴지나요?",
];

const generalAnxietyIndex = ref(Array(generalAnxiety.length).fill("false"));
const socialAnxietyIndex = ref(Array(socialAnxiety.length).fill("false"));

const submitAnswers = () => {
  const generalAnxietyScore = generalAnxietyIndex.value.filter(
    (item) => item === "true"
  ).length;
  const socialAnxietyScore = socialAnxietyIndex.value.filter(
    (item) => item === "true"
  ).length;

  alert(
    `일반 불안 점수: ${generalAnxietyScore}\n사회적 불안 점수: ${socialAnxietyScore}`
  );
};
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
