<template>
    <header class="header">
            <router-link to="/"><img src="../assets/logo.png" class="header-rogo"></router-link> 
			<ul class="header-nav-list">
				<router-link to="/Likes"><li><img src="../assets/heart_white.png" class="header-nav-item"></li></router-link> 
				<router-link to="/Chat"><li><img src="../assets/comment_icon.png" class="header-nav-item"></li></router-link> 
				<router-link to="/Help"><li><img src="../assets/question_icon.png" class="header-nav-item"></li></router-link> 
				<router-link to="/MyPage"><li><img src="../assets/taro.png" class="myicon"></li></router-link> 
			</ul>
 </header>
</template>


<script>
// new Vue({
//   el: '.header',
//   data: {
//   },
//   created : function(){
//     console.log('created')
//     console.log(this.$el)
//   },
//   mounted : function(){
//     console.log('mounted')
// 	console.log(this.$el)
// 	document.onscroll = (e) => {
//      this.position = document.documentElement.scrollTop || document.body.scrollTop;
//    }
//   }
// })
</script>

<style scoped>

.header {
	width: 100%;
	height: 4em;
	font-size: 100%;
    background-color:#2e2e2e;
	position: sticky;
    top: 0;
	z-index: 10;
 }

.header-rogo{
    height: 4em;
	margin-left: 2em;
	display: flex; 
    justify-content: flex-start;
	position: absolute;
	margin-top: -0.1em;
}
img.header-rogo:hover{
	height: 4.2em;
	margin-top: -0.1em;
}

 .header-nav-list {
    list-style: none;
	display: flex; 
    justify-content: flex-end;
	flex-wrap: nowrap;
    padding: 1em;
	margin-right: 1em;
 }

 .header-nav-item {
	height:2em;
	margin-right: 1em;
 }


 img.myicon{
	border-radius: 50%;
	height: 2em;
	margin-top: 0;
 }
 
 .header-nav-item:hover{
	height: 2.2em;
 }

  img.myicon:hover{
	border-radius: 50%;
	height: 2.2em;
 }




/* ↓↓↓↓↓↓↓↓↓以下ノート用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノート用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノート用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ *
/* ↓↓↓↓↓↓↓↓↓以下ノート用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下ノート用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */


 @media(max-width:1280px){

.header {
	max-width: 1280px;
	width: 100%;
	height: 2.8em;
	font-size: 100%;
    background-color:#2e2e2e;
	position: sticky;
    top: 0;
	z-index: 10;
 }

.header-rogo{
    height: 2.8em;
	margin-left: 1em;
	display: flex; 
    justify-content: flex-start;
	position: absolute;
	margin-top: -0.2em;
}
img.header-rogo:hover{
	height: 3.2em;
	margin-top: -0.1em;
}

 .header-nav-list {
    list-style: none;
	display: flex; 
    justify-content: flex-end;
	flex-wrap: nowrap;
    padding: 1em;
	margin-right: 0em;
 }

 .header-nav-item {
	height:1.2em;
	margin-right: 1em;
	margin-top: -1em;
 }


 img.myicon{
	border-radius: 50%;
	height: 1.4em;
	margin-top: -0.3em;
 }
 
 .header-nav-item:hover{
	height: 1.6em;
 }

  img.myicon:hover{
	border-radius: 50%;
	height: 1.65em;
 }

 }

/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
/* ↓↓↓↓↓↓↓↓↓以下タブレット用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

 @media(max-width:768px){

.header {
	max-width: 768px;
	width: 100%;
	height: 2.8em;
	font-size: 100%;
    background-color:#2e2e2e;
	position: sticky;
    top: 0;
	z-index: 10;
 }

.header-rogo{
    height: 2.8em;
	margin-left: 1em;
	display: flex; 
    justify-content: flex-start;
	position: absolute;
	margin-top: -0.2em;
}
img.header-rogo:hover{
	height: 3.2em;
	margin-top: -0.1em;
}

 .header-nav-list {
    list-style: none;
	display: flex; 
    justify-content: flex-end;
	flex-wrap: nowrap;
    padding: 1em;
	margin-right: 0em;
 }

 .header-nav-item {
	height:1.2em;
	margin-right: 1em;
	margin-top: -1em;
 }


 img.myicon{
	border-radius: 50%;
	height: 1.4em;
	margin-top: -0.3em;
 }
 
 .header-nav-item:hover{
	height: 1.6em;
 }

  img.myicon:hover{
	border-radius: 50%;
	height: 1.65em;
 }

 }

</style>