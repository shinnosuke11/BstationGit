<template>
<div id="pagebody">

   <div id="chatbox">
      <h1 class="catch">チャット</h1>

   </div>


	<!-- サブメニュー（チャット一覧） -->
<div id="submenu">
	<div id="submenu_header">#で探す
	</div>
	<ul id="submenu_body">
		<li><a href="xxx.html">A店</a></li>
		<li><a href="xxx.html">B店</a></li>
		<li><a href="xxx.html">C店</a></li>
		<li><a href="xxx.html">D店</a></li>
		<li><a href="xxx.html">E店</a></li>
		<li><a href="xxx.html">F店</a></li>
	</ul>
</div>

<!--メインチャット-->


		<div class="content">            
			<div id="content_header">
				<div class="icon">
					<img src="../assets/taro.png" width="40" height="40" alt="太郎のアイコンです">
				</div>
				<div class="shopname">
					<h1>居酒屋A店</h1>
				</div>
			</div>
<div class="shop_info">
 <div class="shop_photo">

 </div>
</div>

			<div class="sitacontent">            
				<div id="sita_header">
					<div class="hogehoge">
						<h2>通常入力</h2>
						<h2>テンプレ１</h2>
						<h2>テンプレ２</h2>
						<h2>テンプレ３</h2>
					</div>
				</div>

<textarea id="story" name="story"
          rows="5" cols="33">
ここに文章を入力
</textarea>
<div class="wrap">
  <button class="button">送信</button>

</div>		
			</div>
						
</div>
                
                
</div>

</template>

<style scoped>

div#pagebody {
  height: 830px;
  width: 52.5%; 
  margin: auto;	/*内容全体をセンタリング*/
  background-color:#ffffff;		/*内容全体の背景色*/ 
}

 

  
div#submenu  {
	width:20%;			
	margin-left: 18%;
	display:inline;			
	float:left;			
}
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
	border: solid 1px #474747;	
	margin:0px 4px 0px 4px;		
	padding:2px 0px 2px 2px;	
	background-color:#ffffff;
	color: #474747;
	text-decoration:none;		
	padding-left: 50px;
}
ul#submenu_body li a:hover {
	background-color:#474747;	/*リンクにマウスが乗ったら色を変える*/
	color:#ffffff;
}
.content {
	width: 40%; 
	height: 85%;
	margin-left: 40%;
	background-color: #ffffff;
	border: thick rgb(43, 43, 43) solid;
	border-width: 4px;
	position: relative;
}

.icon img {
	margin-left: 3%;
  margin-top: 1%;
	border-radius: 50%;
	float: left;
	border-width: 2px;
	border-style: solid;
	border-color: white;
}
div#content_header {
	height:9%; 
	padding:4px 0px 0px 0px;
	background-repeat:no-repeat; background-position:top;
	background-color:#424242;
}
.shopname h1{
	font-size: 150%;
	color:white;
	text-align: left; 
  margin-left: 18%;
  margin-top: 2.5%;
}


.sitacontent {
  width: 100%; 
  height: 200px;
  background-color:rgba(255, 255, 255, 0);
  border: thick rgb(49, 49, 49) solid;
  border-width: 1px;
  position: absolute;
  bottom: 0;
}

div#sita_header {
  height:12%; 
  background-repeat:no-repeat; 
  background-position:top;
  background-color:#424242;
  position: relative;
}

.hogehoge {
  widows: 40%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: absolute;
}


.hogehoge h2 {
  widows: 100%;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: normal;
  color:rgb(255, 255, 255);
  padding-right:  auto;
  padding-left:  auto;
  border: rgb(41, 41, 41) solid 1px;
  white-space: nowrap;
}

.hogehoge h2:hover {
  color: #ff7676;
}

textarea {
  margin: 0;
  height: 60%;
  width: 94%;
  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.568);
  background-color: #ffffff00;
  color: #424242;
	}
  
.wrap {
	height: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0);
  }
  
.button {
	width: 140px;
	height: 25px;
  margin-top: -43px;
	font-family: 'Roboto', sans-serif;
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	color: rgb(255, 255, 255);
	background-color: rgb(49, 49, 49);
	border: none;
	border-radius: 45px;
	box-shadow: 0px 8px 15px rgba(146, 146, 146, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
	}
  
.button:hover {
	background-color: #ffffff;
	box-shadow: 0px 15px 20px rgba(54, 54, 54, 0.4);
	color: rgb(68, 68, 68);
	transform: translateY(-2px);
  }

</style>