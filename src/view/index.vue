<template>
  <div class="content">
    <div class="header">
      <headers></headers>
    </div>
    <div class="header-swiper">
      <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/icon24.png" alt="" class="header-img" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/icon23.png" alt="" class="header-img" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/icon30.png" alt="" class="header-img" />
          </div>
        </div>
        <div class="swiper-button-prev swiper-button-left"></div>
        <div class="swiper-button-next swiper-button-right"></div>
      </div>
    </div>
    <div class="box bulletin">
      通知公告

      <div class="spaner"></div>
      <div class="swiper">
        <span>2021年午子山景区工作人员照片公告</span>
        <span class="right">2021.5.20</span>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "../components/headers.vue";
export default {
  components: {
    headers
  },
  mounted() {
    this.swiper1();
  },
  methods: {
    swiper1() {
      new Swiper(".swiper-container", {
        prerButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        autoplay: 3000,
        effect: "fade",
        loop: true,
        speed: 1000
      });
    }
  }
};
</script>

<style scoped>
.content {
  width: 1900px;
  height: 100%;
}
.header {
  width: 100%;
  height: 110px;
  position: fixed;
  z-index: 10;
}
.header-img {
  width: 100%;
  height: 938px;
}
.header-swiper {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 100%;
}
.box {
  width: 1280px;
  margin: 0 auto;
}
.bulletin {
  height: 30px;
  padding-top: 20px;
  padding-left: 30px;
  background: url("../assets/icon20.png") no-repeat left 20px;
  background-size: 20px 17px;
  color: #2e5e8e;
  font-size: 16px;
}
.spaner {
  width: 1px;
  height: 12px;
  background-color: #000;
  display: inline-block;
  margin: 0 10px;
}
.swiper {
  display: inline-block;
  width: 80%;
}
.right {
  float: right;
}
.swiper-container1 {
  width: 100%;
  height: 100%;
}
.swiper-button-left {
  background: url("../assets/icon48.png");
  z-index: 5;
  width: 60px;
  height: 60px;
  background-size: 60px 60px;
  left: 150px;
}
.swiper-button-right {
  background: url("../assets/icon46.png");
  z-index: 50;
  width: 60px;
  height: 60px;
  background-size: 60px 60px;
  right: 150px;
}
</style>
