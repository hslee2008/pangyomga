<template>
  <div class="mx-4" style="width: 100%; max-width: 600px; margin: auto">
    <v-card v-for="(item, i) in elasticity" :key="i" elevation="2" class="my-4">
      <v-card-text class="text-center font-weight-bold">{{ item }}</v-card-text>
      <div class="d-flex justify-center">
        <v-btn-toggle v-model="elasticity_index[i]" class="mt-2">
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

    <v-card v-for="(item, i) in excited" :key="i" elevation="2" class="my-4">
      <v-card-text class="text-center font-weight-bold">{{ item }}</v-card-text>
      <div class="d-flex justify-center">
        <v-btn-toggle v-model="excited_index[i]" class="mt-2">
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

    <v-card v-for="(item, i) in myway" :key="i" elevation="2" class="my-4">
      <v-card-text class="text-center font-weight-bold">{{ item }}</v-card-text>
      <div class="d-flex justify-center">
        <v-btn-toggle v-model="myway_index[i]" class="mt-2">
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

    <v-card v-for="(item, i) in onestep" :key="i" elevation="2" class="my-4">
      <v-card-text class="text-center font-weight-bold">{{ item }}</v-card-text>
      <div class="d-flex justify-center">
        <v-btn-toggle v-model="onestep_index[i]" class="mt-2">
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

    <div class="d-flex justify-center my-4">
      <v-btn block color="primary" variant="tonal" @click="result" class="py-4">
        결과 보기!
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const elasticity = [
  "다른 사람의 의견이나 아이디어는 받아들이는데 어려움이 없는 편인가요?",
  "예기치 않은 일이 발생할 때 자연스럽게 대처하나요?",
  "자신의 스케줄이나 계획을 조정해야 할 때 불편함을 느끼지 않는 편인가요?",
  "변화에 대한 새로운 아이디어나 방법을 받아들이는데 빨리 수용가능한가요?",
  "새로운 상황에 직면 했을때 빨리 적응하는 편인가요?",
  "어려운 상황에서 자신의 감정을 잘 조절하나요?",
];
const elasticity_index = ref([
  "false",
  "false",
  "false",
  "false",
  "false",
  "false",
]);

const excited = [
  "먼저 주도해서 나서는 것을 좋아한다.",
  "새로운 사람을 만나면 금방 친해질 수 있다.",
  "자신의 의견을 적극적으로 말할수 있다.",
  "새로운 친구를 주기적으로 만든다.",
  "혼자 있는 것보다 여럿이서 함께 있는게 좋다.",
  "변화와 도전,새로운 경험을 좋아한다.",
];
const excited_index = ref([
  "false",
  "false",
  "false",
  "false",
  "false",
  "false",
]);

const myway = [
  "당신이 도전적인 상황에 직면했을때 , 자신의 결정을 믿는 편인가요?",
  "다른 사람들의 의견에 영향을 받지 않고 자신의 생각을 끝까지 추구하는 편인가요?",
  "당신은 타인의 평가나 기대에 영향을 받지 않고 자신의 길을 가려고 하는 편인가요?",
  "당신의 과제나 프로젝트를 완수할 때, 일정을 엄격하게 지키는 편인가요?",
  "자신의 목표를 달성하기 위해 자신에게 엄격한 요구를 하나요?",
  "새로운 아이디나 방법이 나왔을때,  다른사람의 의견을 우선 고려하는 편이 아닌 자신의 생각을 펼치는 편인가요?",
];
const myway_index = ref(["false", "false", "false", "false", "false", "false"]);

const onestep = [
  "나는 다른 사람이 먼저 다가오길 기다린다",
  "리더 같은 이끄는 일은 피하고 싶다",
  "나는 이야기를 먼저 시작하는게 어렵다",
  "나는 속마음을 잘 이야기 하지 않는다",
  "다른 사람에게 맞춰주는게 편하다",
  "새로운 환경에 적응하기 힘들다",
];
const onestep_index = ref([
  "false",
  "false",
  "false",
  "false",
  "false",
  "false",
]);

function result() {
  const elasticity_score = elasticity_index.value.filter(
    (item) => item === "true"
  ).length;
  const excited_score = excited_index.value.filter(
    (item) => item === "true"
  ).length;
  const myway_score = myway_index.value.filter(
    (item) => item === "true"
  ).length;
  const onestep_score = onestep_index.value.filter(
    (item) => item === "true"
  ).length;

  router.push(
    `./results/personality/?elasticity=${elasticity_score}&excited=${excited_score}&myway=${myway_score}&onestep=${onestep_score}`
  );
}
</script>

<style scoped>
.v-card-text {
  font-size: 1.1rem;
}

.v-btn {
  min-width: 50px;
}

.v-btn .v-icon {
  font-size: 1.5rem;
}

.v-btn.block {
  width: 100%;
}

.v-btn-toggle {
  width: 100%;
}

.v-btn-toggle > .v-btn {
  width: 50%;
}
</style>
