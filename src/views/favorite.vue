<template>
  <div class="home">
    <h1 class="catch">あなたのお気に入り</h1>

    <favoriteSHUFFLE></favoriteSHUFFLE>


 <div id="pagebody">

  <form id="form5" action="自分のサイトのURL">
  <input id="sbox5"   type="text" placeholder="お店の名前、または＃で検索" />
  <input id="sbtn5" type="submit" value="検索" /></form>


<div id="submenu">
	<div id="submenu_header">#で探す</div>
	<ul id="submenu_body">
		<li><a href="xxx.html">#まかない</a></li>
		<li><a href="xxx.html">#制服</a></li>
		<li><a href="xxx.html">#お洒落</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>	
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
		<li><a href="xxx.html">#</a></li>
	</ul>
</div>

   <FAVORITEshopabout></FAVORITEshopabout>
   
</div>
</div>
</template>

<script>
// @ is an alias to /src
import FAVORITEshopabout from   "../components/FAVORITEshopabout.vue" ;
import favoriteSHUFFLE from "../components/favoriteSHUFFLE.vue";
export default {
  name: 'favorite',
  components: {
    FAVORITEshopabout,
    favoriteSHUFFLE,
  }
}
</script>

<style scoped>

div#pagebody {

	width:52%; margin: auto;	/*内容全体をセンタリング*/
	background-color:#ffffff;		/*内容全体の背景色*/ 
}



	

#sbox5{	
width:45%;
height:3%;
color:rgb(156, 156, 156);
border-radius:1px;
background:rgb(192, 192, 192);
font-size:19px;
margin-left: -450px;
padding-left: 20px;

}
#sbtn5{
width:5%;
height:3%;
margin-left: 0px;
margin-top: -1px;
border-radius:1px;
background:#ffffff;
color:rgb(39, 39, 39);
font-weight:bold;
font-size:19px;
border:none;
padding: 0.35%;
}
#sbtn5:hover{
background:rgb(255, 255, 255);
color:#ff5c5c;
font-size: 20px;

}



/*============================================
サブメニュー（左カラム）
============================================*/
div#submenu  {
	width:20%;			
	margin-top: 10px;
	margin-left: 0px;
	display:inline;			
	float:left;			
}

/*サブメニューのヘッダ部分（余白調整・背景画像・背景色・文字サイズなど）*/
div#submenu_header {
	height:2.6%; 
	padding:4px 0px 0px 0px;
	background-repeat:no-repeat; background-position:top;
	background-color:#424242;
	font-size:90%;
	font-weight:bold;
	text-align:center;
	color: #ffffff;
}

/*サブメニューのボディ部分（余白調整・背景画像・背景色）*/
ul#submenu_body {
	padding-bottom:6px;
	background-repeat:no-repeat; 
	background-position:bottom;
	background-color:#424242;
}
ul#submenu_body li {
	font-size:100%;		
	list-style-type:none;	
	display:inline;			
	text-align: left;
}
ul#submenu_body li a {
	display:block;		
	margin:0px 4px 0px 4px;		
	padding:2px 0px 2px 2px;	
	background-color:#666666;	
	text-decoration:none;		
	padding-left: 50px;
	border: solid 1px #ffffff;
}
ul#submenu_body li a:hover {
	background-color:#ffffff;
	color: #424242;	}



</style>