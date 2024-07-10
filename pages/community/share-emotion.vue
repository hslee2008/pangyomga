<template>
  <div style="width: 100%">
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
              <v-icon v-if="item.anonymous">mdi-incognito</v-icon>
              <v-img v-else :src="item.userInfo.photoURL"></v-img>
            </v-avatar>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>

          <template v-slot:append>
            <div style="color: red">
              <v-icon>mdi-heart</v-icon>
              {{ Object.keys(item.liked ?? {}).length }}
            </div>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <v-fab
      v-if="userInfo"
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
import { onAuthStateChanged } from "firebase/auth";

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
const userInfo = ref({});

const { $auth, $db } = useNuxtApp();

onMounted(() => {
  const db = dbRef($db, `/community/share-emotion`);
  onValue(db, (snapshot) => {
    const data = snapshot.val();
    database.value = data;
  });

  onAuthStateChanged($auth, (user) => {
    userInfo.value = user;
  });
});
</script>

<style scoped>
.v-chip {
  font-weight: bold;
  font-size: 1rem;
}

.v-chip-group {
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
  background-color: #f5f5f5;
}

.v-list-item {
  transition: background-color 0.3s ease-in-out;
}

.v-list-item:hover {
  background-color: #f0f0f0;
}

.v-list-item-title {
  font-weight: bold;
  font-size: 1.1rem;
}

.v-list-item-subtitle {
  font-size: 0.9rem;
  color: #666;
}

.v-avatar {
  margin-right: 10px;
}

.v-icon {
  font-size: 1.2rem;
}

.v-fab {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.v-fab:hover {
  transform: scale(1.1);
}
</style>
