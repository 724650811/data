<template>
  <div class="content">
    <button @click="gotoindex">跳转</button>
    <div class="card">
      <div class="card-detiles">
        <div class="card-text">
          甘谷老树核桃果&老树核桃仁青皮核桃5000g/袋付水电费水电费水电费第三方水电费水电费水电费水电费水电费第三方士大夫收到
        </div>
        <div class="card-title">
          <div>标签标签标签</div>
          <div>标签</div>
          <div>标签</div>
        </div>
        <div class="card-price">
          <span class="currentprice">￥9.9</span>
          <span class="originalprice">￥18.9</span>
          <div class="card-btn">购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotoindex() {
      this.$router.push("/index");
    }
  }
};
</script>

<style>
.content {
  width: 100%;
  height: 600px;
}
.card {
  margin: 0 auto;
  width: 346px;
  height: 130px;
  background: #e0e0e0 url("../assets/icon5.png") no-repeat;
  background-size: 346px 346px;
  padding-top: 350px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-detiles {
  padding: 10px 10px;
}
.card-text {
  width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card-title {
  margin: 10px 0;
  height: 30px;
}
.card-title > div {
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #ff9c00;
  border-radius: 8px;
  font-size: 14px;
  color: #ff9c00;
}
.currentprice {
  color: #ff1515;
}
.originalprice {
  color: #999999;
  text-decoration: line-through;
}
.card-btn {
  display: block;
  width: 50px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background-image: linear-gradient(
    to right,
    rgb(243, 219, 83),
    rgb(245, 1, 1)
  );
  border-radius: 10px;
  float: right;
}
</style>
