<template>
  <div class="mx-7">
    <div class="d-flex justify-center">
      <v-card variant="tonal" class="mt-5">
        <h1 class="text-center mt-3 mx-4">마음EASY 선별 검사</h1>

        <br />

        <div class="d-flex justify-center mb-5 ga-3">
          <v-btn variant="tonal" @click="share"
            ><v-icon>mdi-share-variant</v-icon> 공유하기</v-btn
          >
          <v-btn variant="tonal" @click="saveAsPdf"
            ><v-icon>mdi-download</v-icon> 저장하기</v-btn
          >
        </div>
      </v-card>
    </div>

    <br />

    <div id="main">
      <v-card-title>학생 기본 정보</v-card-title>

      <table class="header-table mb-2">
        <thead>
          <tr>
            <th>학번</th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ studentId }}</td>
            <td>{{ name }}</td>
          </tr>
        </tbody>
      </table>

      <table class="header-table">
        <thead>
          <tr>
            <th>성별</th>
            <th>검사완료일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ gender === "boy" ? "남자" : "여자" }}</td>
            <td>{{ date }}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <v-card-title>종합 점수</v-card-title>
      <table>
        <thead>
          <tr>
            <th colspan="2">종합 점수</th>
            <th>T점수</th>
            <th>백분위</th>
            <th>구분</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">{{ totalScore }}</td>
            <td>{{ convertScoreToTScore("종합점수", gender, totalScore) }}</td>
            <td>
              {{ convertScoreToPercentage("종합점수", gender, totalScore) }}
            </td>
            <td>{{ getCategoryByTotalScore(gender, totalScore) }}</td>
          </tr>
          <tr>
            <td colspan="5" class="text-left">
              {{
                reading["종합점수"][getCategoryByTotalScore(gender, totalScore)]
              }}
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <v-card-title>하위요인 프로파일</v-card-title>

      <div id="myChart"></div>

      <v-table class="responsive-table">
        <thead>
          <tr>
            <th>하위요인</th>
            <th>구분</th>
            <th>T점수</th>
            <th>백분위</th>
            <th>해석</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>불안 및 우울 문제</td>
            <td>
              {{
                categoryByTScore(
                  convertScoreToTScore(
                    "불안 및 우울 문제",
                    gender,
                    JSON.parse(scores)["불안 및 우울 문제"]
                  )
                )
              }}
            </td>
            <td>
              {{
                convertScoreToTScore(
                  "불안 및 우울 문제",
                  gender,
                  JSON.parse(scores)["불안 및 우울 문제"]
                )
              }}
            </td>
            <td>
              {{
                convertScoreToPercentage(
                  "불안 및 우울 문제",
                  gender,
                  JSON.parse(scores)["불안 및 우울 문제"]
                )
              }}
            </td>
            <td class="text-justify">
              {{
                reading["불안 및 우울 문제"][
                  categoryByTScore(
                    convertScoreToTScore(
                      "불안 및 우울 문제",
                      gender,
                      JSON.parse(scores)["불안 및 우울 문제"]
                    )
                  )
                ]
              }}
            </td>
          </tr>
          <tr>
            <td>자살 및 위기 문제</td>
            <td>
              {{
                categoryByTScore(
                  convertScoreToTScore(
                    "자살 및 위기 문제",
                    gender,
                    JSON.parse(scores)["자살 및 위기 문제"]
                  )
                )
              }}
            </td>
            <td>
              {{
                convertScoreToTScore(
                  "자살 및 위기 문제",
                  gender,
                  JSON.parse(scores)["자살 및 위기 문제"]
                )
              }}
            </td>
            <td>
              {{
                convertScoreToPercentage(
                  "자살 및 위기 문제",
                  gender,
                  JSON.parse(scores)["자살 및 위기 문제"]
                )
              }}
            </td>
            <td class="text-justify">
              {{
                reading["자살 및 위기 문제"][
                  categoryByTScore(
                    convertScoreToTScore(
                      "자살 및 위기 문제",
                      gender,
                      JSON.parse(scores)["자살 및 위기 문제"]
                    )
                  )
                ]
              }}
            </td>
          </tr>
          <tr>
            <td>외현화 문제</td>
            <td>
              {{
                categoryByTScore(
                  convertScoreToTScore(
                    "외현화 문제",
                    gender,
                    JSON.parse(scores)["외현화 문제"]
                  )
                )
              }}
            </td>
            <td>
              {{
                convertScoreToTScore(
                  "외현화 문제",
                  gender,
                  JSON.parse(scores)["외현화 문제"]
                )
              }}
            </td>
            <td>
              {{
                convertScoreToPercentage(
                  "외현화 문제",
                  gender,
                  JSON.parse(scores)["외현화 문제"]
                )
              }}
            </td>
            <td class="text-justify">
              {{
                reading["외현화 문제"][
                  categoryByTScore(
                    convertScoreToTScore(
                      "외현화 문제",
                      gender,
                      JSON.parse(scores)["외현화 문제"]
                    )
                  )
                ]
              }}
            </td>
          </tr>
          <tr>
            <td>심리외상 문제</td>
            <td>
              {{
                categoryByTScore(
                  convertScoreToTScore(
                    "심리외상 문제",
                    gender,
                    JSON.parse(scores)["심리외상 문제"]
                  )
                )
              }}
            </td>
            <td>
              {{
                convertScoreToTScore(
                  "심리외상 문제",
                  gender,
                  JSON.parse(scores)["심리외상 문제"]
                )
              }}
            </td>
            <td>
              {{
                convertScoreToPercentage(
                  "심리외상 문제",
                  gender,
                  JSON.parse(scores)["심리외상 문제"]
                )
              }}
            </td>
            <td class="text-justify">
              {{
                reading["심리외상 문제"][
                  categoryByTScore(
                    convertScoreToTScore(
                      "심리외상 문제",
                      gender,
                      JSON.parse(scores)["심리외상 문제"]
                    )
                  )
                ]
              }}
            </td>
          </tr>
          <tr>
            <td>학교생활적응 문제</td>
            <td>
              {{
                categoryByTScore(
                  convertScoreToTScore(
                    "학교생활적응 문제",
                    gender,
                    JSON.parse(scores)["학교생활적응 문제"]
                  )
                )
              }}
            </td>
            <td>
              {{
                convertScoreToTScore(
                  "학교생활적응 문제",
                  gender,
                  JSON.parse(scores)["학교생활적응 문제"]
                )
              }}
            </td>
            <td>
              {{
                convertScoreToPercentage(
                  "학교생활적응 문제",
                  gender,
                  JSON.parse(scores)["학교생활적응 문제"]
                )
              }}
            </td>
            <td class="text-justify">
              {{
                reading["학교생활적응 문제"][
                  categoryByTScore(
                    convertScoreToTScore(
                      "학교생활적응 문제",
                      gender,
                      JSON.parse(scores)["학교생활적응 문제"]
                    )
                  )
                ]
              }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import html2pdf from "html2pdf.js";
import Plotly from "plotly.js-dist-min";

const route = useRoute();
const { gender, totalScore, scores, date, studentId, name } = route.query;

const reading = {
  종합점수: {
    일반군:
      "전반적인 마음건강과 관련한, 혹은 기준 점수에 해당하는 하위요인과 관련된 심각한 문제가 나타나지 않는다. 일상생활 및 학교생활에 대체로 잘 적응하고 있고, 일상에서 나타날 수 있는 문제들과 어려움에 적절히 대처할 수 있다.",
    관심군:
      "전반적인 마음건강과 관련한, 혹은 기준 점수에 해당하는 하위요인과 관련된 심리적 문제가 나타날 가능성이 있다. 검사 대상자가 관심군에 속할 경우, 일상에서 나타날 수 있는 문제들에 대해 적절히 대처하지 못할 수 있다. 관심군 대상에게 지속적인 관심을 가지고 상태를 점검할 필요가 있다.",
    우선관심군:
      "전반적인 마음건강과 관련한, 혹은 기준 점수에 해당하는 하위요인과 관련된 심리적 문제가 나타날 가능성이 상당히 높다. 검사 대상자가 우선 관심군에 속할 경우, 일상에서 나타날 수 있는 문제들에 대한 적절한 대처능력이 부족하거나 사회적으로 일탈된 방식으로 나타날 가능성이 상대적으로 높다. 우선 관심군 대상에게 지속적인 관심을 가지고 상태를 면밀히 점검할 필요가 있으며, 보다 섬세한 생활지도나 전문가의 심리개입이 필요할 수 있다.",
  },
  "불안 및 우울 문제": {
    일반군:
      "임상적인 수준의 불안 및 우울 문제가 나타나지 않는다. 일상생활에서 걱정이나 두려움, 죄책감 등으로 인한 정서적 불안이나, 우울과 관련된 무기력, 의욕저하 등의 문제가 크게 없다.",
    관심군:
      "임상적인 수준의 불안 및 우울 문제가 나타날 가능성이 다소 있다. 긴장, 감정기복, 죄책감, 신경질, 의욕저하, 걱정 등의 문제를 보일 수 있고, 경우에 따라 이를 인하여 학업이나 일상생활에서 수행이 다소 방해받을 수 있다.",
    우선관심군:
      "임상적인 수준의 불안 및 우울 문제가 나타날 가능성이 높다. 긴장, 감정기복, 죄책감, 신경질, 의욕저하, 걱정 등의 문제가 자주 또는 지속적으로 나타날 수 있고, 경우에 따라 이를 인하여 학업이나 일상생활 기능에 심한 영향을 줄 수 있다. 이 외에 일반적인 심리상태의 범위를 넘어서 사회적, 학교적 적응을 심각하게 저해할 수 있는 정서 문제의 근본 원인을 탐색하여 해결하도록 도움을 필요로 한다.",
  },
  "자살 및 위기 문제": {
    일반군:
      "자살 및 심각한 정신적 문제와 같은 중대한 위험 증상들과 관련된 위험성이 나타나지 않는다.",
    관심군:
      "자살 및 심각한 정신적 문제와 같은 중대한 위험 증상들의 위험성이 나타날 가능성이 다소 있다. 자해, 자살계획 및 의도, 현실도피, 무망감 등의 문제가 발생할 가능성이 있다. 우선 관심군의 이들에겐 자살이나 자해 등 부정적인 반응을 예방하고 위기 상황을 지연시키기 위해 자살위기개입과 같은 전문적인 지원과 지속적인 모니터링을 지속적으로 실시할 필요가 있다.",
    우선관심군:
      "자살 및 심각한 정신적 문제와 같은 중대한 위험 증상들이 발생할 가능성이 강력하게 존재한다. 자해, 자살계획 및 의도, 현실도피, 무망감 등이 나타날 가능성이 높다. 우선 관심군의 이들에겐 자살이나 자해 등 부정적인 반응을 예방하고 위기 상황을 지연시키기 위해 자살위기개입과 같은 전문적인 지원 제공과 지속적인 모니터링을 지속적으로 실시할 필요가 있다.",
  },
  "외현화 문제": {
    일반군:
      "임상적인 수준에서 친구와 싸우는 것, 타인을 괴롭히는 것, 상습적인 거짓말, 물건 훔치기 등의 외현화 문제가 나타나지 않는다.",
    관심군:
      "겉으로 나타나는 다양한 행동적 문제의 임상적 수준으로 나타날 가능성이 있다. 예를 들어, 반항행동, 비행행동(도벽, 친구와 싸우는 것, 타인을 괴롭히는 것, 상습적인 거짓말, 물건 훔치기), 지나친 게임 이용, 상급한 등 외현화 문제를 일으킬 수 있다. 그러나 정서 문제와 같은 다른 문제들로 인하여 발생하는 결과일 수도 있음을 고려해야 한다.",
    우선관심군:
      "겉으로 나타나는 다양한 행동적 문제가 임상적 수준의 가능성이 높다. 예를 들어, 반항행동, 비행행동(도벽, 친구와 싸우는 것, 타인을 괴롭히는 것, 상습적인 거짓말, 물건 훔치기), 지나친 게임 이용, 상급한 등 외현화 문제를 일으킬 수 있다. 그러나 정서 문제와 같은 다른 문제들로 인하여 발생하는 결과일 수도 있음을 고려해야 한다. 행동적 문제가 특히 타인에게 해를 미치는 방식으로 나타난다면, 적절한 조치를 취할 필요가 있다.",
  },
  "심리외상 문제": {
    일반군:
      "최근 외상적 경험과 그 경험으로 인한 외상 관련 증상들이 나타나지 않는다.",
    관심군:
      "최근 외상적 경험과 그 경험으로 인한 외상 관련 증상들이 다소 나타날 수 있다. 폭력과 같은 과거 외상적 경험으로 인한 불안, 악몽, 외로움, 회피, 분노, 침울, 우울, 수면 문제 등의 문제가 나타날 수 있다. 일상적으로 하던 일상생활에 지장이 있는지 추가적인 탐색과 조치가 필요하다.",
    우선관심군:
      "최근 외상적 경험과 그 경험으로 인한 외상 관련 증상들이 나타날 가능성이 상당히 있다. 폭력피해와 같은 과거 경험, 과거의 외상 경험이 침울, 우울, 외로움, 회피, 불안, 악몽, 수면 문제, 분노 등의 문제로 나타날 수 있다. 이러한 일상생활에 지장이 있는 추가적인 탐색과 조치(예: 개입자의 문리라 필요하다. 경우에 따라 위기개입을 실시할 필요가 있다.)",
  },
  "학교생활적응 문제": {
    일반군:
      "학교생활에 적응하는 데의 어려움과 대처기술의 저하 수준이 임상적으로 심각하지 않다. 여러 학교생활 영역에서 대체로 잘 적응하며, 큰 문제가 발견되지 않는다.",
    관심군:
      "학교생활에 적응하는 데의 어려움을 경험하고, 대처기술이 부적응적일 수 있다. 일부 학교생활 영역에서 잘 적응하지 못할 수 있다(예: 수업 준비, 등교 거부, 수업 내용 이해의 어려움). 대처기술훈련이나 사회기술훈련, 수면시간 조정 등의 개입이 필요할 수 있다.",
    우선관심군:
      "학교생활에 적응하는 데의 어려움을 경험하고, 대처기술이 부적응적일 가능성이 상당히 있다. 여러 학교생활 영역에서 잘 적응하지 못할 수 있으며, 큰 문제가 발견되며 심도 있는 평가와 개입이 필요하다. 대처기술훈련이나 사회기술훈련, 수면시간 조정 등의 개입이 필요할 수 있다.",
  },
};
const types = ref([
  "불안 및 우울 문제",
  "자살 및 위기 문제",
  "외현화 문제",
  "심리외상 문제",
  "학교생활적응 문제",
]);

function share() {
  navigator.share({
    title: "마음EASY 선별 검사 결과",
    text: "마음EASY 선별 검사 결과",
    link: window.location.href,
  });
}

function saveAsPdf() {
  const doc = new jsPDF();
  const source = window.document.getElementById("main");
  doc.html(source, {
    callback: function (doc) {
      doc.save("마음EASY 선별 검사 결과지.pdf");
    },
    x: 10,
    y: 10,
    width: 180,
  });
}

onMounted(() => {
  var data = [
    {
      x: types.value,
      y: Object.values(JSON.parse(scores)),
      type: "bar",
    },
  ];

  Plotly.newPlot("myChart", data);
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #f2f2f2;
}

.v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  border: 1px solid #000;
  padding: 8px;
  margin-bottom: 8px;
  width: 240px;
  text-align: center;
}
</style>
