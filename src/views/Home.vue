<template>
  <div class="home">
    <h1 class="catch">バイトでつくるコミュニティ</h1>
    <Slider></Slider>


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
	</ul>
</div>

   <JobList></JobList>
   
</div>
</div>
</template>

<script>
// @ is an alias to /src
import JobList from   "../components/JobList.vue" ;
import Slider from "../components/Slider.vue";
export default {
  name: 'Home',
  components: {
    JobList,
    Slider,
  }
}
</script>

<style scoped>

div#pagebody {
	width:52%;
	margin-left: 22%;
	background-color:#2b2b2b00;		/*内容全体の背景色*/ 
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



/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
 @media(max-width:1280px){




div#pagebody {
	width:100%;
	margin-left: 24%;
	background-color:#ffffffcc;		/*内容全体の背景色*/ 
}



	

#sbox5{	
width:20%;
height:3%;
color:rgb(156, 156, 156);
border-radius:1px;
background:rgb(192, 192, 192);
font-size:0.9em;
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
font-size:0.9em;
border:none;
padding: 0.35%;
}

#sbtn5:hover{
background:rgb(255, 255, 255);
color:#ff5c5c7c;
font-size: 1.2em;
}



/*============================================
サブメニュー（左カラム）
============================================*/
div#submenu  {
	width:10%;			
	margin-top: 1em;	
	margin-left: 0;		
}

/*サブメニューのヘッダ部分（余白調整・背景画像・背景色・文字サイズなど）*/
div#submenu_header {
	height:2.6%; 
	padding:0.5em 0 0 0;
	background-repeat:no-repeat; 
	background-position:top;
	background-color:#424242;
	font-size:80%;
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
	font-size:80%;		
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



 }





/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

 @media(max-width:768px){




div#pagebody {
	width:100%;
	margin-left: 4%;
	background-color:#ffffffcc;		/*内容全体の背景色*/ 
}



	

#sbox5{	
width:45%;
height:3%;
color:rgb(156, 156, 156);
border-radius:1px;
background:rgb(192, 192, 192);
font-size:0.9em;
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
font-size:0.9em;
border:none;
padding: 0.35%;
}

#sbtn5:hover{
background:rgb(255, 255, 255);
color:#ff5c5c7c;
font-size: 1.2em;
}



/*============================================
サブメニュー（左カラム）
============================================*/
div#submenu  {
	width:20%;			
	margin-top: 1em;	
	margin-left: 0em;		
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
	font-size: 90%;
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



 }
</style>