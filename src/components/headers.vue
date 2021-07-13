<template>
  <div class="header">
    <img src="../assets/icon17.png" alt="" class="header-img" />
    <div class="header-list">
      <div class="header-phone">
        景区服务热线：400-888888
      </div>
      <ul>
        <li>网站首页</li>
        <li>景区概览</li>
        <li>新闻中心</li>
        <li>游览推荐</li>
        <li>路线导航</li>
        <li>午子风光</li>
        <li>服务指南</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 1900px;
  height: 110px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
  line-height: 110px;
  position: absolute;
  top: 0px;
  background-color: rgba(247, 242, 242, 0.6);
}
.header-img {
  width: 80px;
  height: 80px;
  margin: 15px 0px 15px 319px;
}
.header-phone {
  background: url("../assets/icon2.png") no-repeat left center;
  background-size: 16px 16px;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
  color: #333;
  font-size: 14px;
  position: absolute;
  right: 530px;
  top: 0;
}
ul > li {
  display: inline-block;
  margin: 0 48px;
  height: 100%;
}
ul > li:hover {
  color: #2e5e8e;
  cursor: pointer;
}
.header-list > ul {
  height: 100%;
}
.header-list {
  height: 100%;
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  color: #333333;
  margin-left: 77px;
  box-sizing: border-box;
  padding-top: 10px;
}
</style>
