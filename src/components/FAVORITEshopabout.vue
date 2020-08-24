<template>

<div id="content">            

     
	<ul id="frame">
			<li id="frame" v-for="shopData in shopDatas" :key="shopData.name">
			<router-link to="/shopdetail"><img src="../assets/インスタ風フレーム1.12.png" alt="A店"  class="main"></router-link>
			<img v-bind:src=" shopData.icon " class="picsIN">
			<h1 class="shopNAME">{{ shopData.name }}</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">{{ shopData.salaly }}円</p>
			<h3 class="time1">時間帯</h3><p class="time2">{{ shopData.time1 }}<br>{{ shopData.time2 }}</p>
			<a href="xxx.html"><p class="f1">#{{ shopData.hashtag1 }}</p></a>
			<a href="xxx.html"><p class="f2">#{{ shopData.hashtag2 }}</p></a>
			<a href="xxx.html"><p class="f3">#{{ shopData.hashtag3 }}</p></a>
			<a href="xxx.html"><p class="f4">#{{ shopData.hashtag4 }}</p></a>
			<h4 class="comment1">ひとこと</h4><p class="comment2">{{ shopData.shortcomment }}</p></li>
</ul>
	</div>
</template>

<style scoped>

/*============================================
ショップvue（中央と右の2カラム全体）
============================================*/
div#content {
	width:74%; 
	margin-top: 0px;
	margin-left: 22%;
	background-color: #ffffff;	
}

ul#frame {
	list-style-type:none;	
	position: relative;
}

li#frame:hover {
	list-style-type:none;	
	margin-left: 50px;
}

.picsIN {
    margin-top: -337px;
    margin-left: 48px;
	position: absolute;
	width: 326px;
	height: 315px;
	object-fit: cover;
	display:block;
}



.shopNAME{
    position: absolute;
	margin-top: -340px;
	margin-left: 420px;
	font-size: 40px;
	color: #ffffff;
}

.salaly1{
    position: absolute;
	margin-top: -245px;
	margin-left: 440px;
	font-size: 25px;
	color: #ffffff;
	font-weight: 100;
}

.salaly2{
    position: absolute;
	margin-top: -235px;
	margin-left: 550px;
	color:#ffffff;
}

.time1{
	position: absolute;
	margin-top: -200px;
	margin-left: 440px;
	font-size: 25px;
	color:#ffffff;
	font-weight: 100;
}

.time2{
	position: absolute;
	margin-top: -195px;
	margin-left: 550px;
	color:#ffffff;
}

.f1{
	position: absolute;
	margin-top: -140px;
	margin-left: 450px;
	color: #ffffff;
}

.f1:hover{
	position: absolute;
	margin-top: -140px;
	margin-left: 450px;
	color: #ff6464;
}

.f2{
	position: absolute;
	margin-top: -140px;
	margin-left: 560px;
	color: #ffffff;
}

.f2:hover{
	position: absolute;
	margin-top: -140px;
	margin-left: 560px;
	color: #ff6464;
}

.f3{
	position: absolute;
	margin-top: -110px;
	margin-left: 450px;
	color: #ffffff;
}

.f3:hover{
	position: absolute;
	margin-top: -110px;
	margin-left: 450px;
	color: #ff6464;
}

.f4{
	position: absolute;
	margin-top: -110px;
	margin-left: 560px;
	color: #ffffff;
}

.f4:hover{
	position: absolute;
	margin-top: -110px;
	margin-left: 560px;
	color: #ff6464;
}

.comment1{
	position: absolute;
	margin-top: -70px;
	margin-left: 440px;
	color: #ff6464;
	font-size: 15px;
}

.comment2{
	position: absolute;
	margin-top: -50px;
	margin-left: 460px;
	color:  #ffffff;
	font-size: 20px;
}

img.main{
	height: 405px;
	margin-bottom: -30px;
	position: relative;
}



</style>

<script>
export default {
	data() {
		return {
			shopDatas: [
				{icon: require(`../assets/DSC_0176.jpg`),
				name: 			"鉄板焼き", 
				salaly: 		"1500",
				time1:			"9:00-12:00", 
				time2:			"18:00-20:30",
				hashtag1:		"未経験歓迎",
				hashtag2:		"まかない",
				hashtag3:		"交通費支給",
				hashtag4:		"駅チカ",
				shortcomment:	"雰囲気のいい職場です！"
				},	

				{icon: require(`../assets/DSC_0366.jpg`),
				name: 			"魚や市", 
				salaly: 		"1500",
				time1:			"9:00-12:00", 
				time2:			"18:00-20:30",
				hashtag1:		"未経験歓迎",
				hashtag2:		"まかない",
				hashtag3:		"交通費支給",
				hashtag4:		"駅チカ",
				shortcomment:	"雰囲気のいい職場です！"
				},	

				{icon: require(`../assets/DSC_2818.jpg`),
				name: 			"個室空間", 
				salaly: 		"1500",
				time1:			"9:00-12:00", 
				time2:			"18:00-20:30",
				hashtag1:		"未経験歓迎",
				hashtag2:		"まかない",
				hashtag3:		"交通費支給",
				hashtag4:		"駅チカ",
				shortcomment:	"雰囲気のいい職場です！"
				},	

				{icon: require(`../assets/DSC_2848.jpg`),
				name: 			"山崎", 
				salaly: 		"1500",
				time1:			"9:00-12:00", 
				time2:			"18:00-20:30",
				hashtag1:		"未経験歓迎",
				hashtag2:		"まかない",
				hashtag3:		"交通費支給",
				hashtag4:		"駅チカ",
				shortcomment:	"雰囲気のいい職場です！"
				},	
	
			]
			
		};
	}
};
</script>