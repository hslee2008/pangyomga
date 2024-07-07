<template>
  <div style="width: 100%" class="mx-4">
    <h1>고민 나누기</h1>

    <br />

    <v-select
      v-model="variety"
      label="고민 종류 선택하기"
      variant="outlined"
      :items="[
        '일반 고민',
        '학업',
        '진학',
        '교우관계',
        '외모',
        '가족',
        '학교폭력',
        '금전',
      ]"
    ></v-select>

    <v-text-field
      v-model="title"
      variant="outlined"
      label="제목 입력하기"
    ></v-text-field>
    <v-textarea
      v-model="content"
      variant="outlined"
      label="내용 입력하기"
    ></v-textarea>

    <v-checkbox v-model="anonymous" label="비공개로 등록하기"></v-checkbox>

    <br />

    <div class="d-flex justify-center">
      <v-btn variant="outlined" @click="write">
        <v-icon start>mdi-pencil</v-icon> 글 등록하기
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref as dbRef, set } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const anonymous = ref(false)
const variety = ref("");
const title = ref("");
const content = ref("");
const userInfo = ref({});

const { $db, $auth } = useNuxtApp();
const router = useRouter();

async function write() {
  await onAuthStateChanged($auth, (user) => {
    userInfo.value = user;
  });

  const time = new Date().getTime();
  const db = dbRef($db, `/community/share-emotion/${variety.value}/${time}`);
  set(db, {
    title: title.value,
    content: content.value,
    anonymous: anonymous.value,
    time,
    userInfo: {
      photoURL: userInfo.value.photoURL,
      displayName: userInfo.value.displayName,
      email: userInfo.value.email
    },
  });
  router.push(`./content/?time=${time}`);
}
</script>
