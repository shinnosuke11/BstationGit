<template>
  <div id="app">
    <CommonHeader></CommonHeader>
     <router-view />
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from "./components/CommonHeader.vue";
import CommonFooter from "./components/CommonFooter.vue";
export default {
  components: {
    CommonHeader,
	CommonFooter,
  }
};

</script>
<style>
*{
	margin:0; padding:0; 	/*全要素のマージン・パディングをリセット*/
	line-height:1.5;	/*全要素の行の高さを1.5倍にする*/
	color:#2c2c2c;		/*文字色*/
	font-family:"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
} 
.clearfix::after {
	content: "";
	display: block;
	clear: both;
}

body {
	background-color:#fffffff6;	/*ページ全体の背景色*/
	text-align:center;		/*IE6以下でセンタリングするための対策*/
	width:100%;
}



.catch {
	font-size: 350%;
	color: rgb(41, 41, 41);
	padding-top: 2%;
	padding-bottom: 1%;
	text-align:center;
		
	
	}


		
a:link, a:visited, a:hover, a:active {
	color: rgb(255, 255, 255);
  }



</style>