<template>
  <div class="home">
    <h1 class="catch">あなたのお気に入り</h1>

    <LikesSlider></LikesSlider>


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

   <LikesJobList></LikesJobList>
   
</div>
</div>
</template>

<script>
// @ is an alias to /src
import LikesJobList from   "../components/LikesJobList.vue" ;
import LikesSlider from "../components/LikesSlider.vue";
export default {
  name: 'Likes',
  components: {
    LikesJobList,
    LikesSlider,
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
font-size:1.2em;
margin-left: -23em;
padding-left: 1em;

}
#sbtn5{
width:5%;
height:3%;
margin-left: 0;
border-radius:1px;
background:#ffffff;
color:rgb(39, 39, 39);
font-weight:bold;
font-size:1.2em;
border:none;
padding: 0.35%;
}
#sbtn5:hover{
background:rgb(255, 255, 255);
color:#ff5c5c;
font-size: 1.2em;
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
div#submenu  {
	width:20%;			
	margin-top: 1em;
	margin-left: 0;
	display:inline;			
	float:left;			
}

/*サブメニューのヘッダ部分（余白調整・背景画像・背景色・文字サイズなど）*/
div#submenu_header {
	height:2.6%; 
	padding:0.5em 0 0 0;
	background-repeat:no-repeat; 
	background-position:top;
	background-color:#424242;
	font-size:90%;
	font-weight:bold;
	text-align:center;
	color: #ffffff;
}

/*サブメニューのボディ部分（余白調整・背景画像・背景色）*/
ul#submenu_body {
	padding-bottom:1em;
	background-repeat:no-repeat; 
	background-position:bottom;
	background-color:#474747;
}
ul#submenu_body li {
	font-size:100%;		
	list-style-type:none;	
	display:inline;			
	text-align: left;
}
ul#submenu_body li a {
	display:block;	
	border: solid 1px #474747;	
	margin:0 0.3em 0 0.3em;		
	padding:0.2em 0 0.2em 0.2em;	
	background-color:#ffffff;
	color: #474747;
	text-decoration:none;		
	text-align: center;
}
ul#submenu_body li a:hover {
	background-color:#474747;	
	color: #ffffff;}



</style>