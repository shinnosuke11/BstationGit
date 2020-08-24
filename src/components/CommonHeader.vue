<template>
    <header class="header">
            <router-link to="/"><img src="../assets/バイトステーション 新ロゴ1.12.png" class="header-rogo"></router-link> 
           
			<ul class="header-nav-list">
				<router-link to="/favorite"><li><img src="../assets/ハートのマーク2.png" class="header-nav-item"></li></router-link> 
				<router-link to="/chat"><li><img src="../assets/コメントアイコン7.png" class="header-nav-item"></li></router-link> 
				<router-link to="/help"><li><img src="../assets/クエスチョンマーク.png" class="header-nav-item"></li></router-link> 
				<router-link to="/mypage"><li><img src="../assets/taro.png" class="myicon"></li></router-link> 
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
	height: 50px;
	font-size: 100%;
    background-color:#2e2e2e;
	position: sticky;
    top: 0;
	z-index: 10;
 }

.header-rogo{
    height: 63px;
	margin-left: 20px;
	display: flex; 
    justify-content: flex-start;
	position: absolute;
	margin-top: -9px;
}
img.header-rogo:hover{
	height: 65px;
	margin-top: -9px;
}

 .header-nav-list {
    list-style: none;
	display: flex; 
    justify-content: flex-end;
	flex-wrap: nowrap;
    padding: 12px;
	margin-right: 10px;
 }

 .header-nav-item {
	height: 30px;
	margin-right: 20px;
 }


 img.myicon{
	border-radius: 50%;
	height: 36px;
	margin-top: -3px;
 }
 
 .header-nav-item:hover{
	height: 33px;
 }

  img.myicon:hover{
	border-radius: 50%;
	height: 37px;
 }
 


</style>