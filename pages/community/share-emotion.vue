<template>
  <div style="width: 100%" class="mx-4">
    <v-chip-group v-model="type" selected-class="text-primary" mandatory>
      <v-chip class="ml-3"> 일반 고민 </v-chip>
      <v-chip> 학업 </v-chip>
      <v-chip> 진학 </v-chip>
      <v-chip> 교우관계 </v-chip>
      <v-chip> 외모 </v-chip>
      <v-chip> 가족 </v-chip>
      <v-chip> 학교폭력 </v-chip>
      <v-chip class="mr-4"> 용돈 또는 돈 </v-chip>
    </v-chip-group>

    <v-empty-state
      v-if="!Object.keys(database ?? {}).includes(type_list[type])"
      headline="등록된 글이 없어요"
      :text="`${type_list[type]} 관련된 글이 아직 등록되지 않았어요`"
      image="/mga.png"
    ></v-empty-state>
    <div v-else>
      <v-list>
        <v-list-item
          v-for="item in database[type_list[type]]"
          :key="item.title"
          :to="`./content/?variety=${type_list[type]}&time=${item.time}`"
        >
          <template v-slot:prepend>
            <v-avatar>
              <v-img :src="item.userInfo.photoURL"></v-img>
            </v-avatar>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>

          <template v-slot:append>
            <div style="color: red;">
              <v-icon>mdi-heart</v-icon>
              {{ Object.keys(item.liked ?? {}).length }}
            </div>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <v-fab
      location="bottom end"
      size="50"
      color="#FFEAE4"
      absolute
      app
      appear
      icon="mdi-pencil"
      to="/community/write"
    ></v-fab>
  </div>
</template>

<script setup>
import { ref as dbRef, onValue } from "firebase/database";

const type_list = [
  "일반 고민",
  "학업",
  "진학",
  "교우관계",
  "외모",
  "가족",
  "학교폭력",
  "용돈 또는 돈",
];
const type = ref(0);
const database = ref({});

const { $db } = useNuxtApp();

onMounted(() => {
  const db = dbRef($db, `/community/share-emotion`);
  onValue(db, (snapshot) => {
    const data = snapshot.val();
    database.value = data;
  });
});
</script>
