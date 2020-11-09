<template>
  <div id="app">
    <Header></Header>
     <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
	Footer,
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



/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */


 @media(max-width:1280px){
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
	font-size: 220%;
	color: rgb(41, 41, 41);
	padding-top: 2%;
	padding-bottom: 1%;
	text-align:center;
	}


		
a:link, a:visited, a:hover, a:active {
	color: rgb(255, 255, 255);
  }
 }



/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

 @media(max-width:768px){
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
	font-size: 210%;
	color: rgb(41, 41, 41);
	padding-top: 2%;
	padding-bottom: 1%;
	text-align:center;
	}


		
a:link, a:visited, a:hover, a:active {
	color: rgb(255, 255, 255);
  }
 }
</style>