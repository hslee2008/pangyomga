<template>
  <div>
    <h1 class="text-center mt-5">관리자</h1>

    <br />

    <div v-if="!passed">
      <v-otp-input v-model="otp"></v-otp-input>
    </div>
    <div v-else>
      <div v-for="(item, 학년) in data" :key="학년" style="width: 400px">
        <h2>{{ 학년 + 1 }} 학년</h2>
        <div>
          <v-expansion-panels>
            <v-expansion-panel v-for="(item2, 반) in item" :key="반">
              <v-expansion-panel-title> {{ 반 }} 반 </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list>
                  <v-list-item
                    v-for="(item3, index) in item2"
                    :key="index"
                    style="border: 1px solid black"
                    class="rounded-lg pa-3"
                    :to="`${item3.link}`"
                  >
                    <v-list-item-title
                      >{{ item3.studentId }} {{ item3.name }}</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      {{ item3.totalScore }}점
                    </v-list-item-subtitle>

                    <br />

                    <v-table>
                      <template v-slot:header>
                        <tr>
                          <th>문제</th>
                          <th>점수</th>
                        </tr>
                      </template>
                      <template v-slot:default>
                        <tr v-for="(item4, index) in item3.scores" :key="index">
                          <td>{{ index }}</td>
                          <td>{{ item4 }}점</td>
                        </tr>
                      </template>
                    </v-table>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref as dbRef, onValue } from "firebase/database";

const { $db } = useNuxtApp();
const router = useRouter();

const data = ref([]);

const passed = ref(false);
const otp = ref("");
const password = ref("314271");

watch(otp, (value) => {
  if (value === password.value) {
    passed.value = true;
  }
});

onMounted(() => {
  onValue(dbRef($db, "easy/students"), (snapshot) => {
    data.value = snapshot.val();
    data.value = data.value.filter((item) => item !== null);
  });
});
</script>
