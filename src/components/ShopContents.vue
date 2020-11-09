<template>
<div class="main" v-for="shop in shops" :key="shop.id">
          <img v-bind:src=" shop.img " class="picsIn">
          <img v-bind:src=" shop.icon " class="shopIcon">
          <h1 class="shopName">{{shop.name}}</h1>
          <p class="text">{{ shop.text }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
        shops:[	
		{
        img: require(`../assets/DSC_2818.jpg`),
        icon: require(`../assets/taro.png`),	
		name: 		"鉄板焼き", 
		text: 		"最高の一品、これほどまでのクオリティは見たことがない！",
        },    
        ]
			
		};
	}
};
</script>

<style scoped>

.main {
width: 760px;
height: 400px;
background-color:#ffffffd0;
text-align: left;
filter: drop-shadow(10px 10px 10px rgba(61, 61, 61, 0.6));
}



.picsIn {
    margin: 0.5em;
	position: absolute;
	width: 24em;
	height: 24em;
	object-fit: cover;
	display:block;
}

.shopIcon{
    position: absolute;
	border-radius: 50%;
	height: 2.5em;
	margin-top: 1.1em;
    margin-left: 25.5em;
 }

.shopName{
	width: 10em;
	font-size: 2em;
    position: absolute;
	margin-top: 0.5em;
	margin-left: 14.25em;
	color: #000000;
}

.text{
	width: 15em;
    height: 15em;
	font-size: 1.25em;
    position: absolute;
	margin-top: 3.5em;
	margin-left: 21em;
	color: #000000;
    
}


</style>