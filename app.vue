<template>
  <v-app>
    <NuxtLayout>
      <v-app-bar elevation="0">
        <NuxtLink to="/">
          <v-avatar class="ml-3">
            <v-img src="/mga.png"></v-img>
          </v-avatar>
        </NuxtLink>
        <NuxtLink to="/" class="text-decoration-none text-black ml-2">
          <v-app-bar-title>마인즈</v-app-bar-title>
        </NuxtLink>

        <template v-slot:append>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="end">
        <div class="d-flex justify-center align-center flex-column">
          <v-avatar>
            <v-img src="/mga.png"></v-img>
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
          title="마음처방약국"
          prepend-icon="mdi-hospital"
          append-icon="mdi-menu-down"
        >
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                to="/cafe/recommendation/user"
                title="사용자 추천"
                prepend-icon="mdi-account-group"
              ></v-list-item>
              <v-list-item
                to="/cafe/recommendation/admin"
                title="전문가 추천"
                prepend-icon="mdi-account-child-circle"
              ></v-list-item>
              <v-list-item
                to="/cafe/recommendation/ai"
                title="AI 추천"
                prepend-icon="mdi-robot"
              ></v-list-item>

              <v-list-item
                to="/cafe/stress-management"
                title="스트레스 관리법"
                prepend-icon="mdi-emoticon-happy"
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

      <v-footer
        style="
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: #ffeae4;
        "
      >
        <div>
          {{ new Date().getFullYear() }} —
          <strong>심장박동 x 코딩인싸이트</strong>
        </div>
      </v-footer>
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import { useTitle } from "@vueuse/core";
import { onAuthStateChanged } from "firebase/auth";

const drawer = ref(false);
const userInfo = ref({});

const { $auth } = useNuxtApp();

onMounted(() => {
  onAuthStateChanged($auth, (user) => {
    userInfo.value = user;
  });
});

useTitle("마인즈");
</script>
