<template>

<div id="content">            

	<ul id="frame">
			<li id="frame" v-for="shop in shops" :key="shop.id">
			<router-link to="/ShopAbout">
			<img src="../assets/flame_white.png" alt="A店"  class="main">
			<img v-bind:src=" shop.icon " class="picsIN">
			<h1 class="shopNAME">{{ shop.name }}</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">{{ shop.wage }}円</p>
			<h3 class="time1">時間帯</h3>
			<p class="time2">{{ shop.time[0] }}
				<br />
				{{ shop.time[1] }}
				</p>
			</router-link>
			<a href="xxx.html">
				<p class="f1">#{{ shop.tag[0] }}</p>
				</a>
				<a href="xxx.html">
				<p class="f2">#{{ shop.tag[1] }}</p>
				</a>
				<a href="xxx.html">
				<p class="f3">#{{ shop.tag[2] }}</p>
				</a>
				<a href="xxx.html">
				<p class="f4">#{{ shop.tag[3] }}</p>
				</a>
			<h4 class="comment1">ひとこと</h4>
			<p class="comment2">{{ shop.comment }}</p>
			<label class="like">
			<input type="checkbox">
			<v-icon class="heart" large >favorite</v-icon>
			</label>
			</li>
</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shops: [
				{icon: require(`../assets/DSC_0176.jpg`),
				name: 			"鉄板焼き屋さん", 
				wage: 		"1700",
				time:		["9:00-12:00", "16:00~22:00"],
				tag:		["未経験歓迎", "交通費支給", "髪色自由","制服貸与"],
				comment:	"雰囲気のいい職場です！"
				},	
				{icon: require(`../assets/DSC_0366.jpg`),
				name: 			"海鮮屋さん", 
				wage: 		"1700",
				time:		["9:00-12:00", "16:00~22:00"],
				tag:		["未経験歓迎", "交通費支給", "髪色自由","制服貸与"],
				comment:	"雰囲気のいい職場です！"
				},	
				{icon: require(`../assets/DSC_2818.jpg`),
				name: 			"お弁当屋さん", 
				wage: 		"1700",
				time:		["9:00-12:00", "16:00~22:00"],
				tag:		["未経験歓迎", "交通費支給", "髪色自由","制服貸与"],
				comment:	"雰囲気のいい職場です！"
				},	
				{icon: require(`../assets/DSC_2848.jpg`),
				name: 			"ウイスキー屋さん", 
				wage: 		"1700",
				time:		["9:00-12:00", "16:00~22:00"],
				tag:		["未経験歓迎", "交通費支給", "髪色自由","制服貸与"],
				comment:	"雰囲気のいい職場です！"
				},	
				{icon: require(`../assets/DSC_0176.jpg`),
				name: 			"ワイン", 
				wage: 		"1700",
				time:		["9:00-12:00", "16:00~22:00"],
				tag:		["未経験歓迎", "交通費支給", "髪色自由","制服貸与"],
				comment:	"雰囲気のいい職場です！"
				},	

			]
			
		};
	}
};
</script>

<style scoped>

/*============================================
ショップvue（中央と右の2カラム全体）
============================================*/
div#content {
	width:70%; 
	margin-top: 0;
	margin-left: 22%;
	background-color: #ffffff00;	
}

ul#frame {
	width: 70%;
	list-style-type:none;	
	position: relative;
	text-align: left;
}

li#frame:hover {
	list-style-type:none;	
	margin-left: 30px;
}

img.main{
	height: 25em;
	margin-bottom: -1.9em;
	position: relative;
}
.picsIN {
    margin-top: -20.6em;
    margin-left: 3em;
	position: absolute;
	width: 20em;
	height: 19.3em;
	object-fit: cover;
	display:block;
}


.shopNAME{
	width: 10em;
	font-size: 2em;
    position: absolute;
	margin-top: -10.5em;
	margin-left: 12.5em;
	color: #494949;
}

.salaly1{
	width: 2em;
	font-size: 1.5em;
    position: absolute;
	margin-top: -11.5em;
	margin-left: 17.5em;
	color: #494949;

}

.salaly2{
	width: 7em;
	font-size: 1.5em;
    position: absolute;
	margin-top: -11.5em;
	margin-left: 22.8em;
	color: #494949;
}

.time1{
	width:3em;
	font-size: 1.5em;
	position: absolute;
	margin-top: -9.8em;
	margin-left: 17.5em;
	color: #494949;
}

.time2{
	width: 8em;
	font-size: 1.5em;
    position: absolute;
	margin-top: -9.8em;
	margin-left: 22.8em;
	color: #494949;
}

.f1{
	width: 7em;
	position: absolute;
	margin-top: -10em;
	margin-left: 28em;
	color: #6488ff;
}

.f1:hover{
	position: absolute;
	color: #ff6464;
}

.f2{
	width: 7em;
	position: absolute;
	margin-top: -8.4em;
	margin-left: 28em;
	color: #6488ff;
}

.f2:hover{
	position: absolute;
	color: #ff6464;
}

.f3{
	width: 7em;
	position: absolute;
	margin-top: -10em;
	margin-left:35em;
	color: #6488ff;
}

.f3:hover{
	position: absolute;
	color: #ff6464;
}

.f4{
	width: 7em;
	position: absolute;
	margin-top: -8.4em;
	margin-left:35em;
	color: #6488ff;
}

.f4:hover{
	position: absolute;
	color: #ff6464;
}

.comment1{
	width: 4em;
	font-size: 1em;
	position: absolute;
	margin-top: -6.5em;
	margin-left: 26em;
	color: #ffffff;
}

.comment2{
	width: 15em;
	font-size: 1.2em;
	position: absolute;
	margin-top: -4.5em;
	margin-left: 22em;
	color:  #494949;
}



/* ここからいいねアイコン */

.like {
	position: absolute;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
	background-color: rgb(255, 255, 255);
	border-radius: 0%;
    transition: background .3s;
  }
  
  .like [type="checkbox"] {
	position: absolute;
	display: none;
	bottom: 4em;
	left: 25.1em;
  }
  
  .heart {
    font-size: 100px;
    color: #e4e4e4;
    user-select: none;
    position: absolute;
	bottom: 2.25em;
	left: 10.5em;
  }
  
  .like [type="checkbox"]:checked ~ .heart {
    animation-name: heart;
    animation-duration: .6s;
	animation-fill-mode: forwards;
  }
  
  @keyframes heart {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      color: red;
    }
  }
  
  .ripple {
    position: absolute;
    width: 85px;
    height: 85px;
    background: red;
    border-radius: 50%;
	transform: scale(0);
	left: 20em;
  }
  
  .like [type="checkbox"]:checked ~ .ripple {
    animation-name: ripple;
    animation-duration: .6s;
    animation-fill-mode: forwards;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  /* ここまでいいねアイコン */





/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
 @media(max-width:1280px){

div#content {
	width:80%; 
	margin-top: 0;
	margin-left: 5%;
	background-color: rgb(255, 255, 255);	
}

ul#frame {
	width: 70%;
	list-style-type:none;	
	position: relative;
	text-align: left;
}

li#frame:hover {
	list-style-type:none;	
	margin-left: 15px;
}

img.main{
	height: 17.5em;
	margin-bottom: -1.9em;
	position: relative;
}
.picsIN {
    margin-top: -14.1em;
    margin-left: 2em;
	position: absolute;
	width: 14.2em;
	height: 13.7em;
	object-fit: cover;
	display:block;
}


.shopNAME{
	width: 10em;
	font-size: 1.2em;
    position: absolute;
	margin-top: -10.5em;
	margin-left: 12.5em;
	color: #494949;
}

.salaly1{
	width: 2em;
	font-size: 1.0em;
    position: absolute;
	margin-top: -11.5em;
	margin-left: 17.5em;
	color: #494949;

}

.salaly2{
	width: 7em;
	font-size: 1.0em;
    position: absolute;
	margin-top: -11.5em;
	margin-left: 22.8em;
	color: #494949;
}

.time1{
	width:3em;
	font-size: 1.0em;
	position: absolute;
	margin-top: -9.8em;
	margin-left: 17.5em;
	color: #494949;
}

.time2{
	width: 8em;
	font-size: 1.0em;
    position: absolute;
	margin-top: -9.8em;
	margin-left: 22.8em;
	color: #494949;
}

.f1{
	width: 7em;
	font-size: 0.8em;
	position: absolute;
	margin-top: -10em;
	margin-left: 28em;
	color: #6488ff;
}

.f1:hover{
	position: absolute;
	color: #ff6464;
}

.f2{
	width: 7em;
	font-size: 0.8em;
	position: absolute;
	margin-top: -8.4em;
	margin-left: 28em;
	color: #6488ff;
}

.f2:hover{
	position: absolute;
	color: #ff6464;
}

.f3{
	width: 7em;
	font-size: 0.8em;
	position: absolute;
	margin-top: -10em;
	margin-left:35em;
	color: #6488ff;
}

.f3:hover{
	position: absolute;
	color: #ff6464;
}

.f4{
	width: 7em;
	font-size: 0.8em;
	position: absolute;
	margin-top: -8.4em;
	margin-left:35em;
	color: #6488ff;
}

.f4:hover{
	position: absolute;
	color: #ff6464;
}

.comment1{
	width: 5em;
	font-size: 0.8em;
	position: absolute;
	margin-top: -6.5em;
	margin-left: 26em;
	color: #ff6464;
}

.comment2{
	width: 15em;
	font-size: 0.8em;
	position: absolute;
	margin-top: -4.5em;
	margin-left: 22em;
	color:  #494949;
}



/* ここからいいねアイコン */

.like {
	position: absolute;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4px;
	background-color: rgb(255, 146, 146);
	border-radius: 0%;
    transition: background .3s;
  }
  
  .like [type="checkbox"] {
	position: absolute;
	display: none;
	bottom: 4em;
	left: 25.1em;
  }
  
  .heart {
    font-size: 50px;
    color: #e4e4e4;
    user-select: none;
    position: absolute;
	bottom: 2.25em;
	left: 10.5em;
  }
  
  .like [type="checkbox"]:checked ~ .heart {
    animation-name: heart;
    animation-duration: .6s;
	animation-fill-mode: forwards;
  }
  
  @keyframes heart {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      color: red;
    }
  }
  
  .ripple {
    position: absolute;
    width: 85px;
    height: 85px;
    background: red;
    border-radius: 50%;
	transform: scale(0);
	left: 20em;
  }
  
  .like [type="checkbox"]:checked ~ .ripple {
    animation-name: ripple;
    animation-duration: .6s;
    animation-fill-mode: forwards;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  /* ここまでいいねアイコン */

 }


  
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

 @media(max-width:768px){

div#content {
	width:70%; 
	margin-top: 0;
	margin-left: 20%;
	background-color: #ffffff00;	
}

ul#frame {
	width: 70%;
	list-style-type:none;	
	position: relative;
	text-align: left;
}

li#frame:hover {
	list-style-type:none;	
	margin-left: 15px;
}

img.main{
	height: 17.5em;
	margin-bottom: -1.9em;
	position: relative;
}
.picsIN {
    margin-top: -14.1em;
    margin-left: 2.12em;
	position: absolute;
	width: 14em;
	height: 13.61em;
	object-fit: cover;
	display:block;
}


.shopNAME{
	width: 10em;
	font-size: 1.4em;
    position: absolute;
	margin-top: -10.5em;
	margin-left: 12.5em;
	color: #494949;
}

.salaly1{
	width: 2em;
	font-size: 1.05em;
    position: absolute;
	margin-top: -11.5em;
	margin-left: 17.5em;
	color: #494949;

}

.salaly2{
	width: 7em;
	font-size: 1.05em;
    position: absolute;
	margin-top: -11.5em;
	margin-left: 22.8em;
	color: #494949;
}

.time1{
	width:3em;
	font-size: 1.05em;
	position: absolute;
	margin-top: -9.8em;
	margin-left: 17.5em;
	color: #494949;
}

.time2{
	width: 8em;
	font-size: 1.05em;
    position: absolute;
	margin-top: -9.8em;
	margin-left: 22.8em;
	color: #494949;
}

.f1{
	width: 7em;
	font-size: 0.98em;
	position: absolute;
	margin-top: -10em;
	margin-left: 28em;
	color: #6488ff;
}

.f1:hover{
	position: absolute;
	color: #ff6464;
}

.f2{
	width: 7em;
	font-size: 0.98em;
	position: absolute;
	margin-top: -8.4em;
	margin-left: 28em;
	color: #6488ff;
}

.f2:hover{
	position: absolute;
	color: #ff6464;
}

.f3{
	width: 7em;
	font-size: 0.98em;
	position: absolute;
	margin-top: -10em;
	margin-left:35em;
	color: #6488ff;
}

.f3:hover{
	position: absolute;
	color: #ff6464;
}

.f4{
	width: 7em;
	font-size: 0.98em;
	position: absolute;
	margin-top: -8.4em;
	margin-left:35em;
	color: #6488ff;
}

.f4:hover{
	position: absolute;
	color: #ff6464;
}

.comment1{
	width: 5em;
	font-size: 0.7em;
	position: absolute;
	margin-top: -6.5em;
	margin-left: 26em;
	color: #ff6464;
}

.comment2{
	width: 15em;
	font-size: 0.84em;
	position: absolute;
	margin-top: -4.5em;
	margin-left: 22em;
	color:  #494949;
}



/* ここからいいねアイコン */

.like {
	position: absolute;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4px;
	background-color: rgb(255, 146, 146);
	border-radius: 0%;
    transition: background .3s;
  }
  
  .like [type="checkbox"] {
	position: absolute;
	display: none;
	bottom: 4em;
	left: 25.1em;
  }
  
  .heart {
    font-size: 50px;
    color: #e4e4e4;
    user-select: none;
    position: absolute;
	bottom: 2.25em;
	left: 10.5em;
  }
  
  .like [type="checkbox"]:checked ~ .heart {
    animation-name: heart;
    animation-duration: .6s;
	animation-fill-mode: forwards;
  }
  
  @keyframes heart {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      color: red;
    }
  }
  
  .ripple {
    position: absolute;
    width: 85px;
    height: 85px;
    background: red;
    border-radius: 50%;
	transform: scale(0);
	left: 20em;
  }
  
  .like [type="checkbox"]:checked ~ .ripple {
    animation-name: ripple;
    animation-duration: .6s;
    animation-fill-mode: forwards;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  /* ここまでいいねアイコン */

 }
</style>
