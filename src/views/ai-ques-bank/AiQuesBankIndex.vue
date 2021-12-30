<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card card-info card-tabs">
          <div class="card-header p-0 pt-1">
            <ul class="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
              <li class="pt-2 px-3"><h3 class="card-title">語言別</h3></li>
              <li class="nav-item">
                <a href="" class="nav-link" aria-controls="custom-tabs-en"
                  >英文</a
                >
                <!-- <a
                  class="nav-link"
                  id="custom-tabs-two-en-tab"
                  data-toggle="pill"
                  role="tab"
                  href="#"
                  aria-controls="custom-tabs-en"
                  :class="{ active: langType == 0 }"
                  @click.prevent="langType = 0"
                  >英文</a
                > -->
              </li>
              <li class="nav-item">
                <a href="" class="nav-link" aria-controls="custom-tabs-jp"
                  >日文</a
                >
                <!-- <a
                  class="nav-link"
                  id="custom-tabs-jp-tab"
                  data-toggle="pill"
                  role="tab"
                  href="#"
                  aria-controls="custom-tabs-jp"
                  :class="{ active: langType == 1 }"
                  @click.prevent="langType = 1"
                  >日文</a
                > -->
              </li>
            </ul>
          </div>
          <!-- <div class="card-body p-3">
        <h4>類型</h4>
        <div class="row">
          <div class="col-sm-2">
            <div
              class="nav flex-column nav-tabs h-100"
              id="vert-tabs-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link"
                id="vert-tabs-word-tab"
                data-toggle="pill"
                role="tab"
                aria-controls="vert-tabs-word"
                @click.prevent="type = 'word'"
                :class="{ active: type == 'word' }"
                >文字</a
              >
              <a
                class="nav-link"
                id="vert-tabs-voice-tab"
                data-toggle="pill"
                role="tab"
                aria-controls="vert-tabs-voice"
                @click.prevent="type = 'voice'"
                :class="{ active: type == 'voice' }"
                >語音</a
              >
            </div>
          </div>
          <div class="col-sm-10">
            <div class="tab-content" id="vert-tabs-tabContent">
              <div
                class="tab-pane text-left fade show active"
                role="tabpanel"
                aria-labelledby="vert-tabs-home-tab"
              >
                <div
                  class="card"
                  v-for="(item, index) in allQues"
                  :key="item.id"
                >
                  <div class="card-body">
                    <div class="d-flex justify-between">
                      <h4 class="font-weight-bold text-primary">題目</h4>
                      <span class="text-muted">{{
                        status(item.status, "top")
                      }}</span>
                    </div>
                    <p
                      class="card-text"
                      v-if="
                        item.category != 'VO' &&
                        (item.voice_intonation == null ||
                          item.voice_intonation == '')
                      "
                    >
                      {{ item.question }}
                    </p>
                    <p
                      class="card-text"
                      v-else-if="item.category == 'VO' && item.voice_intonation"
                    >
                      {{ item.source }}
                      <audio controls>
                        <source :src="item.quesUrl" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </p>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h4 class="font-weight-bold text-primary">類型</h4>
                      <span class="text-success" v-if="item.voice_intonation">
                        {{ item.ch_intonation }}
                      </span>
                    </div>
                    <p class="card-text">{{ item.category }}</p>
                    <button
                      class="btn btn-warning mr-2"
                      @click="patchStatus(item.id, item.status, index)"
                    >
                      {{ status(item.status, "button") }}
                    </button>
                    <router-link
                      :to="{ name: 'AiQuesBankEdit', params: { id: item.id } }"
                      class="btn btn-secondary"
                      >編輯
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AiQuesBankIndex",
};
</script>

<style>
</style>
