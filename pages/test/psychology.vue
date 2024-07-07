<template>
  <div style="width: 100%" class="mx-4">
    <h1>심리검사</h1>

    <br />

    <v-card color="yellow-lighten-2" class="mx-auto my-2">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">
            ADHD
          </div>
          <div class="text-h6 mb-1">나는 ADHD인가?</div>
          <div class="text-caption">
            ...................
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn to="./adhd"> 검사하기 </v-btn>
      </v-card-actions>
    </v-card>

    <v-card color="light-green-lighten-2" class="mx-auto my-2">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">
            성격 검사
          </div>
          <div class="text-h6 mb-1">나는 어떤 성격인가?</div>
          <div class="text-caption">
            ...................
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn to="./personality"> 검사하기 </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
