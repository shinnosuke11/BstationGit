<template>
<div class="allcontents">
  <div id="film_roll_slider">
    <VueSlickCarousel  v-bind="settings" >
      <div v-for="shop in shops" :key="shop.id">
        <router-link to="/ShopAbout">
          <img src="../assets/flame_white.png" alt="A店" class="main" />
          <img v-bind:src=" shop.icon " class="picsIN">
          <h1 class="shopNAME">{{shop.name}}</h1>
          <h2 class="salaly1">時給</h2>
          <p class="salaly2">{{shop.wage}}円</p>
          <h3 class="time1">時間帯</h3>
          <p class="time2">
            {{shop.time[0]}}
            <br />
            {{shop.time[1]}}
          </p>
        </router-link>
          <h4 class="comment1">ひとこと</h4>
          <p class="comment2">{{shop.comment}}</p>
          <a href="xxx.html">
            <p class="f1">#{{shop.tag[0]}}</p>
          </a>
          <a href="xxx.html">
            <p class="f2">#{{shop.tag[1]}}</p>
          </a>
          <a href="xxx.html">
            <p class="f3">#{{shop.tag[2]}}</p>
          </a>
          <a href="xxx.html">
            <p class="f4">#{{shop.tag[3]}}</p>
          </a>
		<label class="like">
			<input type="checkbox">
			<v-icon class="heart" large >favorite</v-icon>
		</label>
      </div>
    </VueSlickCarousel>
  </div>
</div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {


if (window.matchMedia('(min-width:1280px)').matches) {
    return {
		
      settings: {
		centerMode: true,
		"dots": true,
        centerPadding: "560px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed:1000,
		autoplay: true,
		arrow:true
        },

	shops:[	
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
        ]
};
}
 

else if (window.matchMedia('(max-width: 1279px) and (min-width: 768px)').matches) {
    return {
		
      settings: {
		centerMode: true,
		"dots": true,
        centerPadding: "360px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
		autoplay: true,
		arrow:true
        },

	shops:[	
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
        ]
};
} 



else if (window.matchMedia('(max-width:767px)').matches) {

    return {
      settings: {
		centerMode: true,
		"dots": true,
        centerPadding: "150px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
		autoplay: true,
		arrow:true
        },

	shops:[	
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
		]
};
}
 


},
};
</script>

<style scoped>
*:focus {
	outline: none; /*クリック時の枠線を消す */
}

.allcontents{
	width: 1920px;
}

#film_roll_slider{
	margin-bottom:5em;
	text-align: left;
	width: 100%;
	background-color: rgb(255, 255, 255);
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
	margin-top: -11.8em;
	margin-left: 17.5em;
	color: #494949;

}

.salaly2{
	width: 7em;
	font-size: 1.5em;
    position: absolute;
	margin-top: -11.8em;
	margin-left: 22.8em;
	color: #494949;
}

.time1{
	width:3em;
	font-size: 1.5em;
	position: absolute;
	margin-top: -10.1em;
	margin-left: 17.5em;
	color: #494949;
}

.time2{
	width: 8em;
	font-size: 1.5em;
    position: absolute;
	margin-top: -10.1em;
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
	color: #ff6464;
}

.comment2{
	width: 15em;
	font-size: 1.2em;
	position: absolute;
	margin-top: -4.5em;
	margin-left: 22em;
	color:  #494949;
}

/* いいね機能 */

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

/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノートパソコン用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */



@media(max-width:1280px){
.allcontents{
	width: 1280px;
}

#film_roll_slider{
	margin-bottom:2em;
	text-align: left;
	max-width: 1280px;
	background-color: rgb(255, 255, 255);
	
}


img.main{
	height:18em;
	position: relative;
	margin-bottom: 2%;
}


.picsIN {

    margin-top: -17.1em;
    margin-left: 2.1em;
	position: absolute;
	width: 14.6em;
	height: 14em;
	object-fit: cover;
	display:block;
}

.shopNAME{
	width: 10em;
	font-size: 1.2em;
    position: absolute;
	margin-top: -15em;
	margin-left: 12.5em;
	color: #494949;
}

.salaly1{
	width: 2em;
	font-size: 1.0em;
    position: absolute;
	margin-top: -11.8em;
	margin-left: 17.5em;
	color: #494949;

}

.salaly2{
	width: 7em;
	font-size: 1em;
    position: absolute;
	margin-top: -11.8em;
	margin-left: 22.8em;
	color: #494949;
}

.time1{
	width:3em;
	font-size: 1.0em;
	position: absolute;
	margin-top: -10.1em;
	margin-left: 17.5em;
	color: #494949;
}

.time2{
	width: 8em;
	font-size: 1em;
    position: absolute;
	margin-top: -10.1em;
	margin-left: 22.8em;
	color: #494949;
}

.f1{
	width: 7em;
	font-size: 0.7em;
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
	font-size: 0.7em;
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
	font-size: 0.7em;
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
	font-size: 0.7em;
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
	height: 1em;
	width: 15em;
	font-size: 0.7em;
	position: absolute;
	margin-top: -4.5em;
	margin-left: 22em;
	color:  #494949;
}

/* いいね機能 */

.like {
	position: absolute;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
	background-color: rgba(255, 61, 61, 0.39);
	border-radius: 0%;
    transition: background .3s;
	margin: 0px;
  }
  
  .like [type="checkbox"] {
	position: absolute;
	display: none;
  }
  
  .heart {
    color: #ff5252;
    user-select: none;
    position: absolute;
    margin: 0px;
	left: 6.5em;
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
}





/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */



@media(max-width:768px){
	*:focus {
	outline: none; /*クリック時の枠線を消す */
}

.allcontents{
	width: 768px;
}

#film_roll_slider{
	margin-bottom:5em;
	text-align: left;
	max-width: 768px;
	background-color: rgb(255, 255, 255);
	margin-bottom: 5%;
}


img.main{
	height: 15em;
	margin-bottom: -1.9em;
	position: relative;
	margin-bottom: 2%;
}


.picsIN {
    margin-top: -14.25em;
    margin-left: 1.8em;
	position: absolute;
	width: 12em;
	height: 11.58em;
	object-fit: cover;
	display:block;
}

.shopNAME{
	width: 10em;
	font-size: 1.2em;
    position: absolute;
	margin-top: -12em;
	margin-left: 12.5em;
	color: #494949;
}

.salaly1{
	width: 2em;
	font-size: 0.9em;
    position: absolute;
	margin-top: -11.8em;
	margin-left: 17.5em;
	color: #494949;

}

.salaly2{
	width: 7em;
	font-size: 0.9em;
    position: absolute;
	margin-top: -11.8em;
	margin-left: 22.8em;
	color: #494949;
}

.time1{
	width:3em;
	font-size: 0.9em;
	position: absolute;
	margin-top: -10.1em;
	margin-left: 17.5em;
	color: #494949;
}

.time2{
	width: 8em;
	font-size: 0.9em;
    position: absolute;
	margin-top: -10.1em;
	margin-left: 22.8em;
	color: #494949;
}

.f1{
	width: 7em;
	font-size: 0.7em;
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
	font-size: 0.7em;
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
	font-size: 0.7em;
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
	font-size: 0.7em;
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
	font-size: 0.6em;
	position: absolute;
	margin-top: -6.5em;
	margin-left: 26em;
	color: #ff6464;
}

.comment2{
	width: 15em;
	font-size: 0.72em;
	position: absolute;
	margin-top: -4.5em;
	margin-left: 22em;
	color:  #494949;
}

/* いいね機能 */

.like {
	position: absolute;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
	background-color: rgba(255, 61, 61, 0.39);
	border-radius: 0%;
    transition: background .3s;
	margin: 0px;
  }
  
  .like [type="checkbox"] {
	position: absolute;
	display: none;
  }
  
  .heart {
    color: #ff5252;
    user-select: none;
    position: absolute;
    margin: 0px;
	left: 6.5em;
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
}
</style>
	