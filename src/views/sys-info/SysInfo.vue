<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-3">
        <info-box>
          <router-link :to="{ name: 'Ann' }" class="info-box-icon bg-info">
            <i class="far fa-envelope"></i>
          </router-link>
        </info-box>
      </div>
      <div class="col-md-3">
        <info-box>
          <router-link :to="{ name: 'Ann' }" class="info-box-icon bg-success">
            <i class="fas fa-headset"></i>
          </router-link>
        </info-box>
      </div>
      <div class="col-md-3">
        <info-box>
          <router-link :to="{ name: 'Ann' }" class="info-box-icon bg-warning">
            <i class="far fa-question-circle"></i>
          </router-link>
        </info-box>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <card>
          <template #cardHeader>
            <card-head-info title="系統公告"></card-head-info>
          </template>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <card>
          <template #cardHeader>
            <card-head-info title="今日排定課程清單"></card-head-info>
          </template>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <card>
          <template #cardHeader>
            <card-head-info title="每週團課日程表"></card-head-info>
          </template>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <card>
          <template #cardHeader>
            <card-head-info title="每月團課日程表"></card-head-info>
          </template>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <card>
          <template #cardHeader>
            <div
              class="card-header font-weight-bold py-1 text-center"
              style="background: #ff851b; color: white"
            >
              E-mail 提醒通知-注意事項
            </div>
          </template>
          <template #cardBody>
            <div class="card-body" style="background: #ffffcc; color: #3366cc">
              系統會依據需求不定時寄送相關訊息或通知郵件至您註冊的E-mail，包含在排定課程完成、上課前提醒等等，若您的郵件信箱有垃圾郵件過濾機制或特定擋信機制，當您在郵件信箱找不到排課系統信件時，請嘗試至垃圾郵件夾中尋找，並將之標示為[非垃圾郵件]，往後便可正常收信；或建議可將
              service@ourscool.com.tw 設定為您的信箱聯絡人，郵件就不會被阻擋了。
            </div>
          </template>
        </card>
      </div>
    </div>
  </div>
  <!-- 評分Modal -->
  <!-- <div
    class="modal fade"
    id="scoreModal"
    data-backdrop="static"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header table-success">
          <h5 class="modal-title" id="exampleModalLabel">線上課程評分</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-5">
              <img
                class="img-fluid img-thumbnail"
                :src="teacherData.tFile"
                :alt="teacherData.Utitle"
              />
            </div>
            <div class="col-7">
              <div>
                課程類別:
                <span class="text-primary">{{ teacherData.className }}</span>
              </div>
              <div>
                課程編號:
                <span class="text-primary">{{ teacherData.classID }}</span>
              </div>
              <div>
                上課教師:
                <span class="text-primary">{{ teacherData.Utitle }}</span>
              </div>
              <div>
                上課日期:
                <span class="text-primary"
                  >{{ teacherData.date }}({{ teacherData.week }})</span
                >
              </div>
              <div>
                上課時間:
                <span class="text-primary">{{ teacherData.Hrange }}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <button
                as="button"
                v-for="num in 5"
                :key="num"
                @click="cScore = num"
                name="cScore"
              >
                <i
                  :class="[num <= cScore ? 'fas' : 'far']"
                  class="fa-star fa-2x text-warning"
                ></i>
              </button>
            </div>
            <div class="col-12 mt-3">
              <Field
                type="text"
                class="form-control"
                name="cScoreNote"
                placeholder="20個字以內"
                v-model.trim="cScoreNote"
                label="評語"
              />
              <ErrorMessage class="text-danger" name="cScoreNote" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeScore">
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="postScore('send')"
          >
            送出評分
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <!-- 老師細節modal -->
  <!-- <div
    class="modal fade"
    id="classDetailModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" style="background: #97d088">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ classDetail.subject }} 每週團班
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" style="background: #e7eff1">
          <div class="d-flex justify-content-between mb-3">
            <div>
              <ul>
                <li class="font-weight-bold">
                  上課日期:<span class="text-primary">{{
                    classDetail.uDate
                  }}</span>
                </li>
                <li class="font-weight-bold">
                  上課時間:<span class="text-primary">{{
                    classDetail.time
                  }}</span>
                </li>
                <li class="font-weight-bold">
                  授課教師:<span class="text-primary">{{
                    classDetail.Utitle
                  }}</span>
                </li>
              </ul>
            </div>
            <div
              style="
                width: 100px;
                height: 100px;
                border-radius: 10px;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
                vertical-align: middle;
                line-height: 60px;
                box-shadow: 3px 3px 3px #aaaaaa;
                background: #ff6699 no-repeat;
                background-size: 100% auto;
                background-position: center center;
              "
              :style="{ background: `url(${classDetail.tFile})` }"
            ></div>
          </div>
          <div class="mb-3">
            <div class="font-weight-bold">課程內容:</div>
            <div style="color: #3366cc" v-html="classDetail.uContent"></div>
          </div>
          <div class="d-flex justify-content-center">
            <p
              class="text-center font-weight-bold text-danger"
              v-html="message"
            ></p>
          </div>
        </div>
        <div
          class="modal-footer d-flex justify-content-center"
          style="background: #e7eff1"
          v-if="
            classStatus == 'classDay' ||
            classStatus == 'notClassDay' ||
            classStatus == 'canReserve'
          "
        >
          <button type="button" class="btn btn-primary">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import Card from "../../components/card/Card.vue";
import CardHeadInfo from "../../components/card/CardHeadInfo.vue";
import InfoBox from "../../components/infoBox/InfoBox.vue";

// import { onMounted, toRefs, reactive, computed, toRef, ref } from "vue";
// import { useRouter } from "vue-router";
// import { Field, useForm, ErrorMessage } from "vee-validate";
// import {
//   simpleAlert,
//   confirmAlert,
//   timerAlert,
// } from "../../globalFunction/alert";
// import FreeTalkNotify from "./components/FreeTalkNotify.vue";
// import Loading from "../../components/Loading.vue";
// import api from "../../globalFunction/api";

export default {
  name: "SysInfo",
  components: {
    InfoBox,
    Card,
    CardHeadInfo,
    // Field,
    // ErrorMessage,
    // FreeTalkNotify,
    // Loading,
  },
  setup() {
    // const isLoading = reactive({
    //   systemLoading: true,
    //   reservedLoading: true,
    //   weekLoading: true,
    //   monthLoading: true,
    // });
    // const router = useRouter();
    // //   驗證
    // const schema = computed(() => {
    //   return { cScoreNote: "max:20" };
    // });
    // const { handleSubmit } = useForm({
    //   validationSchema: schema,
    // });
    // const systemInfo = reactive({
    //   unreadCount: [],
    //   systemAnn: [],
    //   freeTalk: false,
    // });
    // const classScore = reactive({
    //   teacherData: [],
    //   classType: "",
    // });
    // const score = reactive({
    //   cScore: 0,
    //   cScoreNote: "",
    // });
    // const reservedClass = reactive({
    //   reservedData: [],
    // });
    // const weekClass = reactive({
    //   weekData: [],
    //   week: [],
    // });
    // const monthClass = reactive({
    //   monthData: [],
    // });
    // onMounted(() => {
    //   Promise.all([
    //     api({ url: "/api/sysinfo" }),
    //     api({ url: "/api/sysinfo/reserved" }),
    //     api({ url: "/api/sysinfo/week" }),
    //     api({ url: "/api/sysinfo/month" }),
    //     api({ url: "/api/sysinfo/score" }),
    //   ])
    //     .then((jsonData) => {
    //       console.log(jsonData);
    //       if (jsonData[0].status == "success") {
    //         isLoading.systemLoading = false;
    //         const system = jsonData[0].data;
    //         systemInfo.unreadCount = system.unreadCount;
    //         systemInfo.systemAnn = system.sysAnn;
    //         systemInfo.freeTalk = system.freeTalk;
    //       }
    //       if (jsonData[1].status == "success") {
    //         isLoading.reservedLoading = false;
    //         const reserved = jsonData[1].data;
    //         reservedClass.reservedData = reserved.reservedClass;
    //       }
    //       if (jsonData[2].status == "success") {
    //         isLoading.weekLoading = false;
    //         const week = jsonData[2].data;
    //         weekClass.weekData = week.weekClass;
    //         weekClass.week = week.week;
    //       }
    //       if (jsonData[3].status == "success") {
    //         isLoading.monthLoading = false;
    //         const month = jsonData[3].data;
    //         monthClass.monthData = month.monthClass;
    //       }
    //       if (jsonData[4].status == "success") {
    //         const score = jsonData[4].data;
    //         if (score.classData) {
    //           classScore.teacherData = score.classData;
    //           classScore.classType = score.classType;
    //           $("#scoreModal").modal("show");
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });
    // const postScore = handleSubmit((value, type) => {
    //   if ((score.cScore > 0 && type.evt == "send") || type.evt == "close") {
    //     const classID = classScore.teacherData.ID;
    //     const classCode = classScore.classType;
    //     score.cScore = type.evt == "close" ? "N" : score.cScore;
    //     api({
    //       url: `/api/sysinfo/score/${classID}/${classCode}`,
    //       method: "POST",
    //       data: {
    //         score: score,
    //       },
    //     })
    //       .then((jsonData) => {
    //         $("#scoreModal").modal("hide");
    //         if (jsonData.status == "success") {
    //           //   if (jsonData.update) {
    //           if (type.evt == "send") {
    //             setTimeout(() => {
    //               timerAlert("評分成功");
    //             }, 300);
    //           }
    //           //   } else {
    //           //     simpleAlert("失敗", "以評分過", "warning");
    //           //   }
    //         } else {
    //           simpleAlert("失敗", jsonData.message, "error");
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } else {
    //     simpleAlert(
    //       "請點擊星星給於評分",
    //       "如有想發表的評語，請寫在下方評語欄!",
    //       "info"
    //     );
    //   }
    // });
    // function closeScore() {
    //   confirmAlert(
    //     "警告",
    //     "您確定不想評分此課程嗎？<br />※注意:送出後即不可再次評分。"
    //   ).then((res) => {
    //     if (res.isConfirmed) {
    //       postScore("close");
    //     }
    //   });
    // }
    // const weekClassDetail = reactive({
    //   classStatus: "",
    //   classDetail: [],
    //   message: [],
    //   buttonText: "",
    // });
    // function queryClassDetail(id) {
    //   api({ url: `/api/sysinfo/week/${id}` })
    //     .then((jsonData) => {
    //       if (jsonData.status == "success") {
    //         const data = jsonData.data;
    //         // weekClassDetail.reserveDetail = jsonData.reserveDetail;
    //         weekClassDetail.classDetail = data.classDetail;
    //         weekClassDetail.classStatus = data.status;
    //         switch (data.status) {
    //           case "time":
    //             weekClassDetail.message = "時間已過";
    //             break;
    //           case "point":
    //             const point = data.point;
    //             weekClassDetail.message = `很抱歉!<br />您的加購服務點數已用完<br />(共使用 ${point} 點)!`;
    //             break;
    //           case "canReserve":
    //             weekClassDetail.message =
    //               "很抱歉!<br />您並未預約此課程，無法上課!";
    //             weekClassDetail.buttonText = "預約去";
    //             break;
    //           case "classDay":
    //             weekClassDetail.buttonText = "上課去";
    //             weekClassDetail.message = "*不提供PPT和影片檔";
    //             break;
    //           case "notClassDay":
    //             weekClassDetail.buttonText = "非上課日";
    //             weekClassDetail.message = "*不提供PPT和影片檔";
    //             break;
    //           case "notQualified":
    //             weekClassDetail.message =
    //               "很抱歉!<br />您目前並未購買此服務<br />如需購買請聯絡客服人員!";
    //             break;
    //         }
    //         $("#classDetailModal").modal("show");
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // function goToClass() {}
    // function isClassReserved(reserve, today) {
    //   if (reserve) {
    //     if (today) {
    //       return "上課去";
    //     } else {
    //       return "非上課日";
    //     }
    //   } else {
    //     return "未預約";
    //   }
    // }
    // return {
    //   postScore,
    //   closeScore,
    //   queryClassDetail,
    //   goToClass,
    //   isClassReserved,
    //   ...toRefs(isLoading),
    //   ...toRefs(classScore),
    //   ...toRefs(score),
    //   ...toRefs(systemInfo),
    //   ...toRefs(weekClass),
    //   ...toRefs(monthClass),
    //   ...toRefs(weekClassDetail),
    //   ...toRefs(reservedClass),
    // };
  },
};
</script>

<style scoped>
table.table-bordered > thead > tr > th {
  border: 1px solid #cccccc;
}

.table tbody tr td {
  vertical-align: middle;
}
</style>
