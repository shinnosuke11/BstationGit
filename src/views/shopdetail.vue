<template>
<div id="pagebody">

	<h1 class="catch">店舗詳細</h1>

<div class="container" v-for="shopDetail in shopDetails" :key="shopDetail.name">
	<h3>{{ shopDetail.title}}</h3>
<div class="contents">
	<ul>
    <li>     
		<img src="../assets/coin.png" alt="お金の画像">
		<h2>時給</h2>
		<p>{{ shopDetail.salaly }}円～</p>
		</li>

		<li>
	<img src="../assets/time.png" alt="jikan">
	<h2>勤務時間</h2>
	<p>{{ shopDetail.time1}}&nbsp;,&nbsp;{{ shopDetail.time2}}</p>
    </li>

   <li>
   <img src="../assets/day.png" alt="日数">
    <h2>勤務日数</h2>
		<p>{{ shopDetail.days }}</p>
   </li>

   <li>
    <img src="../assets/bus.png" alt="bus">
    <h2>交通費</h2>
		<p>{{ shopDetail.fee }}</p>
   </li>

   <li>
    <img src="../assets/map.png" alt="地図">
    <h2>勤務地</h2>
		<p>{{ shopDetail.where}}</p>
   </li>
	</ul>
</div>
</div>

<div class="pics">
  <ul class="pics">
  <li class="pics"><span><img src="../assets/1DSC_0150.jpg"></span></li>
  <li class="pics"><span><img src="../assets/1DSC_0166.jpg"></span></li>
  <li class="pics"><span><img src="../assets/DSC_0176.jpg"></span></li>
  <li class="pics"><span><img src="../assets/DSC_0366.jpg"></span></li>
  <li class="pics"><span><img src="../assets/DSC_2818.jpg"></span></li>
  <li class="pics"><span><img src="../assets/DSC_2848.jpg"></span></li>
  <li class="pics"><span><img src="../assets/u51z_w690h690.jpg"></span></li>
  <li class="pics"><span><img src="../assets/map.png"></span></li>
  <li class="pics"><span><img src="../assets/map.png"></span></li>
  <li class="pics"><span><img src="../assets/map.png"></span></li>
</ul>
</div>
</div>
</template>

<style scoped>

div#pagebody {

	width:40%; 
  margin: auto;	/*内容全体をセンタリング*/
	background-color:#ffffff;		/*内容全体の背景色*/ 
} 

.container{
	align-items: center;
	background: #ffffff;
  border-radius: 30px;
  margin-left: -5%;
  width: 110%;
  height: 40%;
  box-shadow: rgba(0, 0, 0, 0.123) 3px 3px 3px 3px;
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

.contents ul{
  list-style: none;
	text-align: center;
  padding-bottom: 2%;
}

li{
  display: flex;
}




.pics ul{
  /* flexboxで等間隔に並べる*/
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.pics li{
  /* 枠線をつけて1列に3つ並べる */
  border: solid 1px #ded7c6;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin-bottom: 10px;
  width: 32%;
  /* 正方形にするのに必要な部分 */
  height: auto;
  position: relative;
}
.pics li:before {
  content: "";
  display: block;
  padding-top: 100%; /* ここを100％にすることで正方形になる */
}
.pics li span{
  /* 正方形にするのに必要な部分 */
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 中央寄せ */
  text-align: center;
  padding: 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
/* 高さの中央揃えに必要な部分 */
.pics li span:before{
  content: "";
  height: 100%;
  vertical-align: middle;
  width: 0px;
  display: inline-block;
}
.pics li span > *{
  vertical-align: middle;
  display: inline-block;
}
.pics li span img{
  max-width: 100%;
  height: auto;
  max-height: 100%;
}
</style>

<script>
export default {
	data() {
		return {
			shopDetails: [
				{
				title: 	"[魚や市]キッチン・ホールのお仕事" , 
				salaly: "1500" ,
				time1:	"9:00-12:00" , 
				time2:  "18:00-20:30" ,
				days:   "週三日から" ,
				fee:    "全額支給" ,
        where:  "JR天満駅から徒歩5分",
				},	
	
			]
			
		};
	}
};
</script>