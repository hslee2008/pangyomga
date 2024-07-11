<template>
  <div style="width: 100%" class="mx-4">
    <h1 class="text-center mt-2">심리검사</h1>

    <br />

    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card to="/test/personality">
            <v-img
              class="align-end text-white"
              height="200"
              src="https://miro.medium.com/v2/resize:fit:1024/1*pFGf8hVzFK5AS7EqS3BH1w.jpeg"
              cover
            >
              <v-card-title><mark>마인즈 성격 검사</mark></v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4">
              유연한 성격, 활발한 성격, 마이웨이, 한발자국
            </v-card-subtitle>
            <v-card-text>
              마인즈 성격 검사는 4가지 유형으로 나누어진 성격 검사입니다. 각
              유형은 유연한 성격, 활발한 성격, 마이웨이, 한발자국으로 나누어져
              있습니다.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card to="/test/adhd">
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.prod.website-files.com/64271cf7f88ba128857fe9b7/6494a4ce438985ab0b9b4ac6_anxiety.socials-1.png"
              cover
            >
              <v-card-title><mark>마인즈 ADHD 검사</mark></v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4">
              ADHD (주의력결핍 과잉행동장애) 검사
            </v-card-subtitle>
            <v-card-text>
              ADHD 검사는 주의력결핍 과잉행동장애를 진단하는 검사입니다. ADHD는
              주의력결핍, 과잉행동, 즉흥성, 감정조절 등의 증상이 있습니다.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card to="/test/depression">
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.mkhealth.co.kr/news/photo/202305/64143_68330_5621.jpg"
              cover
            >
              <v-card-title><mark>마인즈 우울증 검사</mark></v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4"> 우울증 검사 </v-card-subtitle>
            <v-card-text>
              우울증 검사는 우울증을 진단하는 검사입니다. 우울증은 일상생활에
              지장을 주는 정신질환으로, 우울감, 피로감, 무기력감, 자살충동 등의
              증상이 있습니다.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card to="/test/anxiety">
            <v-img
              class="align-end text-white"
              height="200"
              src="https://www.usatoday.com/gcdn/presto/2023/05/14/USAT/3f7ed7ac-d861-46f4-84ac-ef0da7002666-anxiety.jpg?crop=1923,1081,x3,y941&width=1923&height=1081&format=pjpg&auto=webp"
              cover
            >
              <v-card-title><mark>마인즈 불안 검사</mark></v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4"> 불안 검사 </v-card-subtitle>
            <v-card-text>
              불안 검사는 불안장애를 진단하는 검사입니다. 불안장애는 불안감,
              긴장감, 공포감, 불안장애 등의 증상이 있습니다.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.v-card {
  border-radius: 15px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease-in-out;
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
