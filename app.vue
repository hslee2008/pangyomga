<template>
  <v-app>
    <NuxtLayout>
      <v-app-bar elevation="0">
        <NuxtLink to="/">
          <v-avatar class="ml-3">
            <v-img src="/mga.png"></v-img>
          </v-avatar>
        </NuxtLink>
        <v-app-bar-title>마인즈</v-app-bar-title>

        <template v-slot:append>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="end">
        <div class="d-flex justify-center align-center flex-column">
          <v-avatar>
            <v-img src="mga.png"></v-img>
          </v-avatar>
          <v-app-bar-title>마인즈</v-app-bar-title>
        </div>

        <v-divider class="my-3"></v-divider>

        <v-list-item to="/" title="홈" prepend-icon="mdi-home"></v-list-item>
        <v-list-item
          title="커뮤니티"
          prepend-icon="mdi-account-group-outline"
          append-icon="mdi-menu-down"
        >
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                to="/community/share-emotion"
                title="감정 나누기"
                prepend-icon="mdi-heart"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          title="마음신호등"
          prepend-icon="mdi-magnify"
          append-icon="mdi-menu-down"
        >
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                to="/test/psychology"
                title="심리검사"
                prepend-icon="mdi-head-cog"
              ></v-list-item>
              <v-list-item
                to="/test/easy"
                title="EASY검사"
                prepend-icon="mdi-chart-line"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          title="힐링카페"
          prepend-icon="mdi-coffee"
          append-icon="mdi-menu-down"
        >
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                to="/cafe/recommendation/book"
                title="책 추천"
                prepend-icon="mdi-book"
              ></v-list-item>
              <v-list-item
                to="/cafe/recommendation/music"
                title="음악 추천"
                prepend-icon="mdi-music"
              ></v-list-item>
              <v-list-item
                to="/cafe/recommendation/movie"
                title="영화 추천"
                prepend-icon="mdi-movie"
              ></v-list-item>
              <v-list-item
                to="/cafe/stress-management"
                title="스트레스 관리법"
                prepend-icon="mdi-robot-happy"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          to="/wee"
          title="WEE 센터"
          prepend-icon="mdi-hospital-building"
        ></v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item
          v-if="userInfo"
          to="/account"
          title="나의 활동"
          prepend-icon="mdi-account"
        ></v-list-item>
        <v-list-item
          v-else
          to="/login"
          title="로그인하기"
          prepend-icon="mdi-account"
        ></v-list-item>
      </v-navigation-drawer>

      <v-main>
        <div class="d-flex justify-center">
          <NuxtPage />
        </div>

        <br /><br /><br />
      </v-main>
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import { onAuthStateChanged } from "firebase/auth";

const drawer = ref(false);
const userInfo = ref({});

const { $auth } = useNuxtApp();

onMounted(() => {
  onAuthStateChanged($auth, (user) => {
    userInfo.value = user;
  });
});
</script>
