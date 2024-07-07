<template>
  <div style="width: 100%" class="mx-4">
    <h1>{{ content.title }}</h1>

    <div class="my-3">
      <v-card v-if="content.anonymous" elevation="0">
        <v-card-subtitle>
          <v-icon start>mdi-incognito</v-icon>
          비공개
        </v-card-subtitle>
      </v-card>
      <v-card v-else :title="content?.userInfo?.displayName" elevation="0">
        <template v-slot:prepend>
          <v-avatar>
            <v-img :src="content?.userInfo?.photoURL"></v-img>
          </v-avatar>
        </template>
      </v-card>
    </div>

    <p>{{ content.content }}</p>

    <br />

    <v-btn block color="red" variant="outlined" @click="like_or_unlike">
      <v-icon v-if="!liked">mdi-heart-outline</v-icon>
      <v-icon v-else>mdi-heart</v-icon>
    </v-btn>

    <hr class="my-10" />

    <v-textarea
      v-model="comment"
      variant="outlined"
      label="댓글 달기"
      append-icon="mdi-send"
      @click:append="send"
    ></v-textarea>
    <v-checkbox v-model="anonymous" label="비공개로 댓글 달기"></v-checkbox>

    <div>
      <v-card
        v-for="comment in comments"
        :key="comment.time"
        variant="outlined"
      >
        <template v-slot:prepend>
          <v-avatar>
            <v-img :src="comment?.userInfo?.photoURL"></v-img>
          </v-avatar>
          <p class="ml-3">{{ comment.userInfo.displayName }}</p>
        </template>

        <v-card-text>
          <v-list-item-title>{{ comment.comment }}</v-list-item-title>
          <v-list-item-subtitle>{{
            new Date(comment.time).toLocaleDateString()
          }}</v-list-item-subtitle>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref as dbRef, onValue, set, remove } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const route = useRoute();
const variety = route.query.variety;
const time = route.query.time;
const content = ref({});
const userInfo = ref({});
const comments = ref([]);

const liked = ref(false);
const anonymous = ref(false);
const comment = ref("");

const { $db, $auth } = useNuxtApp();

onMounted(() => {
  const db = dbRef($db, `/community/share-emotion/${variety}/${time}`);
  const liked_db = dbRef(
    $db,
    `/community/share-emotion/${variety}/${time}/liked/${userInfo.value.uid}`
  );
  const comments_db = dbRef(
    $db,
    `/community/share-emotion/${variety}/${time}/comments`
  );
  onValue(db, (snapshot) => {
    content.value = snapshot.val();
  });
  onValue(liked_db, (snapshot) => {
    liked.value = snapshot.val();
  });
  onValue(comments_db, (snapshot) => {
    comments.value = snapshot.val();
  });

  onAuthStateChanged($auth, (user) => {
    userInfo.value = user;
  });
});

function like() {
  const db = dbRef(
    $db,
    `/community/share-emotion/${variety}/${time}/liked/${userInfo.value.uid}`
  );
  set(db, true);
  liked.value = true;
}
function unlike() {
  const db = dbRef(
    $db,
    `/community/share-emotion/${variety}/${time}/liked/${userInfo.value.uid}`
  );
  remove(db);
  liked.value = false;
}
function like_or_unlike() {
  if (liked.value) unlike();
  else like();
}

function send() {
  const time_comment = new Date().getTime();
  const db = dbRef(
    $db,
    `/community/share-emotion/${variety}/${time}/comments/${time_comment}`
  );
  set(db, {
    comment: comment.value,
    anonymous: anonymous.value,
    time: time_comment,
    userInfo: {
      photoURL: userInfo.value.photoURL,
      displayName: userInfo.value.displayName,
      email: userInfo.value.email,
    },
  });
}
</script>
