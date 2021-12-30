<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="" class="brand-link">
      <img
        src="@/assets/AdminLTEImage/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">
        <strong>數位管理系統</strong>
      </span>
    </a>
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="@/assets/AdminLTEImage/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info text-light">
          <strong>王小明</strong>
        </div>
      </div>
      <!-- start -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <router-link :to="{ name: 'TeaSelect' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                開課設定
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ClassQryTea' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                課程資訊
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'TeaInfo' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                教師簡介
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'PMsg' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                師生留言板
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Ann' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                重要訊息
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ClassHelp' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                問答家教
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Service' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                線上客服
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'GClass' }" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                每週團班管理
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'GrCourse' }" class="nav-link">
              <i class="nav-icon fas fa-layer-group"></i>
              <p>
                每月團課管理
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Soc' }" class="nav-link">
              <i class="nav-icon fas fa-layer-group"></i>
              <p>
                特殊開課管理
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'IdvSetup' }" class="nav-link">
              <i class="nav-icon fas fa-layer-group"></i>
              <p>
                個人資訊
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'AiQuesBank' }" class="nav-link">
              <i class="nav-icon fas fa-layer-group"></i>
              <p>
                AI題庫管理
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Greet' }" class="nav-link">
              <i class="nav-icon fas fa-layer-group"></i>
              <p>
                招呼語管理
                <i class="right fas fa-angle-right"></i>
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- end -->
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  setup() {},
};
</script>

<style>
</style>
