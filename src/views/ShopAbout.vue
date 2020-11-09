<template>
  <div id="pagebody">
    <h1 class="catch">店舗詳細</h1>
    <div class="container" v-for="shopDetail in shopDetails" :key="shopDetail.name">
      <h3>{{ shopDetail.title}}</h3>
      <div class="contents">
        <ul>
          <li>
            <img src="../assets/coin_icon.png" alt="お金の画像" />
            <h2>時給</h2>
            <p>{{ shopDetail.salaly }}円～</p>
          </li>
          <li>
            <img src="../assets/time_icon.png" alt="jikan" />
            <h2>勤務時間</h2>
            <p>{{ shopDetail.time1}}&nbsp;,&nbsp;{{ shopDetail.time2}}</p>
          </li>
          <li>
            <img src="../assets/day_icon.png" alt="日数" />
            <h2>勤務日数</h2>
            <p>{{ shopDetail.days }}</p>
          </li>
          <li>
            <img src="../assets/bus_icon.png" alt="bus" />
            <h2>交通費</h2>
            <p>{{ shopDetail.fee }}</p>
          </li>
          <li>
            <img src="../assets/map_icon.png" alt="地図" />
            <h2>勤務地</h2>
            <p>{{ shopDetail.where}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="pics">
      <ul class="piclist">
        <li class="picitem" v-for="shop in shops" :key="shop.id">
          <button @click="openModal(shop)" class="button">
            <!-- 押したら開くボタン -->
            <span>
              <img v-bind:src="shop.img" class="mainpic" />
            </span>
          </button>
          <!--モーダルの中身 -->
          <div id="overlay" v-if="show" @click.self="closeModal">
            <div class="main">
              <img v-bind:src="shopData.img" class="picsIn" />
              <img v-bind:src="shopData.icon" class="shopIcon" />
              <h1 class="shopName">{{ shopData.name }}</h1>
              <p class="text">{{ shopData.text }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal(shop) {
      this.show = true;
      this.shopData = shop;
    },
    closeModal() {
      this.show = false;
    },
  },

  data() {
    return {
      shopData: "",
      show: false,
      shopDetails: [
        {
          title: "[魚や市]キッチン・ホールのお仕事",
          salaly: "1500",
          time1: "9:00-12:00",
          time2: "18:00-20:30",
          days: "週三日から",
          fee: "全額支給",
          where: "JR天満駅から徒歩5分",
        },
      ],
      shops: [
        {
          img: require(`../assets/DSC_2818.jpg`),
          icon: require(`../assets/taro.png`),
          name: "鉄板焼き",
          text: "最高の一品、これほどまでのクオリティは見たことがない！",
        },

        {
          img: require(`../assets/1DSC_0166.jpg`),
          icon: require(`../assets/taro.png`),
          name: "鉄板焼き",
          text: "最高の一品、これほどまでのクオリティは見たことがない！",
        },
        {
          img: require(`../assets/1DSC_0150.jpg`),
          icon: require(`../assets/taro.png`),
          name: "鉄板焼き",
          text: "最高の一品、これほどまでのクオリティは見たことがない！",
        },
        {
          img: require(`../assets/DSC_0366.jpg`),
          icon: require(`../assets/taro.png`),
          name: "鉄板焼き",
          text: "最高の一品、これほどまでのクオリティは見たことがない！",
        },
        {
          img: require(`../assets/DSC_2848.jpg`),
          icon: require(`../assets/taro.png`),
          name: "鉄板焼き",
          text: "最高の一品、これほどまでのクオリティは見たことがない！",
        },
      ],
    };
  },
};
</script>

<style scoped>
div#pagebody {
  width: 40%;
  margin: auto; /*内容全体をセンタリング*/
  background-color: #ffffff; /*内容全体の背景色*/
  text-align: start;
}

.ShopContents {
  position: absolute;
  z-index: 9;
  margin-top: 5%;
}

.container {
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  margin-left: -5%;
  width: 110%;
  height: 40%;
  filter: drop-shadow(10px 10px 10px rgba(61, 61, 61, 0.6));
  position: relative;
  margin-bottom: 10%;
}

h3 {
  font-weight: bold;
  font-size: 200%;
  text-align: center;
  padding: 1%;
}

.contents img {
  margin: 2% 0% 0% 10%;
  width: 6%;
  position: absolute;
}

.contents h2 {
  margin: 3.5% 0% 0% 20%;
}

.contents p {
  margin: 3.9% 0% 0% 50%;
  font-size: 20px;
  position: absolute;
}
.contents ul {
  list-style: none;
  text-align: center;
  padding-bottom: 2%;
}

li {
  display: flex;
}
.pics ul {
  /* flexboxで等間隔に並べる*/
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.pics li {
  /* 枠線をつけて1列に3つ並べる */
  border: solid 1px #ded7c6;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin-bottom: 0.8em;
  width: 30%;
  /* 正方形にするのに必要な部分 */
  height: auto;
  position: relative;
}
.pics li:before {
  content: "";
  display: block;
  padding-top: 100%; /* ここを100％にすることで正方形になる */
}
.pics li span {
  /* 正方形にするのに必要な部分 */
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 中央寄せ */
  text-align: center;
  padding: 0.1em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
/* 高さの中央揃えに必要な部分 */
.pics li span:before {
  content: "";
  height: 100%;
  vertical-align: middle;
  width: 0;
  display: inline-block;
}
.pics li span > * {
  vertical-align: middle;
  display: inline-block;
}
.pics li span img {
  max-width: 100%;
  height: auto;
  max-height: 100%;
}

.catch {
  font-size: 350%;
  color: rgb(41, 41, 41);
  padding-top: 4%;
  padding-bottom: 4%;
  text-align: center;
}

.main {
  width: 760px;
  height: 400px;
  margin-top: 0px;
  background-color: #ffffff;
  text-align: left;
  filter: drop-shadow(10px 10px 10px rgba(61, 61, 61, 0.6));
}

.modalitem {
  width: 40%;
  height: 70%;
  position: absolute;
  align-items: center;
}

.picsIn {
  margin-top: 0.5em;
  margin-left: 0.5em;
  position: absolute;
  width: 24em;
  height: 24em;
  object-fit: cover;
  display: block;
}

.shopIcon {
  border-radius: 50%;
  margin-top: 0.7em;
  height: 3em;
  position: absolute;
  right: 18.5em;
}

.shopName {
  width: 8em;
  font-size: 2em;
  position: absolute;
  margin-top: 0.4em;
  color: #000000;
  margin-left: 15em;
}

.text {
  width: 17em;
  height: 14em;
  font-size: 1.25em;
  position: absolute;
  margin-top: 4em;
  margin-left: 20.5em;
  color: #000000;
  text-align: start;
}

#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(78, 78, 78, 0.158);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

