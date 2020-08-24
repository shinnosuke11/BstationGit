<template>
  <div id="film_roll_slider">
    <VueSlickCarousel v-bind="settings">
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム.png" alt="A店" class="main" />
          <img src="../assets/DSC_0176.jpg" class="picsIN">
          <h1 class="shopNAME">name</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">1500円</p>
			<h3 class="time1">時間帯</h3><p class="time2">9:00-15:00<br>18:00-20:00</p>
			<a href="xxx.html"><p class="f1">#未経験歓迎</p></a>
			<a href="xxx.html"><p class="f2">#まかない</p></a>
			<a href="xxx.html"><p class="f3">#交通費支給</p></a>
			<a href="xxx.html"><p class="f4">#駅ちか</p></a>
			<h4 class="comment1">ひとこと</h4><p class="comment2">頑張ろう</p>
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム.png" alt="A店" class="main" />
          <img src="../assets/DSC_0176.jpg" class="picsIN">
          <h1 class="shopNAME">name</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">1500円</p>
			<h3 class="time1">時間帯</h3><p class="time2">9:00-15:00<br>18:00-20:00</p>
			<a href="xxx.html"><p class="f1">#未経験歓迎</p></a>
			<a href="xxx.html"><p class="f2">#まかない</p></a>
			<a href="xxx.html"><p class="f3">#交通費支給</p></a>
			<a href="xxx.html"><p class="f4">#駅ちか</p></a>
			<h4 class="comment1">ひとこと</h4><p class="comment2">頑張ろう</p>
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム.png" alt="A店" class="main" />
          <img src="../assets/DSC_0366.jpg" class="picsIN">
          <h1 class="shopNAME">name</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">1500円</p>
			<h3 class="time1">時間帯</h3><p class="time2">9:00-15:00<br>18:00-20:00</p>
			<a href="xxx.html"><p class="f1">#未経験歓迎</p></a>
			<a href="xxx.html"><p class="f2">#まかない</p></a>
			<a href="xxx.html"><p class="f3">#交通費支給</p></a>
			<a href="xxx.html"><p class="f4">#駅ちか</p></a>
			<h4 class="comment1">ひとこと</h4><p class="comment2">頑張ろう</p>
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム.png" alt="A店" class="main" />
          <img src="../assets/DSC_2848.jpg" class="picsIN">
          <h1 class="shopNAME">name</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">1500円</p>
			<h3 class="time1">時間帯</h3><p class="time2">9:00-15:00<br>18:00-20:00</p>
			<a href="xxx.html"><p class="f1">#未経験歓迎</p></a>
			<a href="xxx.html"><p class="f2">#まかない</p></a>
			<a href="xxx.html"><p class="f3">#交通費支給</p></a>
			<a href="xxx.html"><p class="f4">#駅ちか</p></a>
			<h4 class="comment1">ひとこと</h4><p class="comment2">頑張ろう</p>
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム.png" alt="A店" class="main" />
          <img src="../assets/DSC_2818.jpg" class="picsIN">
          <h1 class="shopNAME">name</h1>
			<h2 class="salaly1">時給</h2><p class="salaly2">1500円</p>
			<h3 class="time1">時間帯</h3><p class="time2">9:00-15:00<br>18:00-20:00</p>
			<a href="xxx.html"><p class="f1">#未経験歓迎</p></a>
			<a href="xxx.html"><p class="f2">#まかない</p></a>
			<a href="xxx.html"><p class="f3">#交通費支給</p></a>
			<a href="xxx.html"><p class="f4">#駅ちか</p></a>
			<h4 class="comment1">ひとこと</h4><p class="comment2">頑張ろう</p>
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: "530px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
      },
    };
  },
};
</script>

<style scoped>
#film_roll_slider{
  margin-bottom: 50px;
}

.picsIN {
    margin-top: -337px;
    margin-left: 48px;
	position: absolute;
	width: 326px;
	height: 315px;
	object-fit: cover;
	display:block;
}



.shopNAME{
    position: absolute;
	margin-top: -340px;
	margin-left: 420px;
	font-size: 40px;
	color: #494949;
}

.salaly1{
    position: absolute;
	margin-top: -245px;
	margin-left: 440px;
	font-size: 25px;
	color: #494949;
	font-weight: 100;
}

.salaly2{
    position: absolute;
	margin-top: -235px;
	margin-left: 550px;
	color: #494949;
}

.time1{
	position: absolute;
	margin-top: -200px;
	margin-left: 440px;
	font-size: 25px;
	color: #494949;
	font-weight: 100;
}

.time2{
	position: absolute;
	margin-top: -195px;
	margin-left: 550px;
	color: #494949;
}

.f1{
	position: absolute;
	margin-top: -140px;
	margin-left: 450px;
	color: #6488ff;
}

.f1:hover{
	position: absolute;
	margin-top: -140px;
	margin-left: 450px;
	color: #ff6464;
}

.f2{
	position: absolute;
	margin-top: -140px;
	margin-left: 560px;
	color: #6488ff;
}

.f2:hover{
	position: absolute;
	margin-top: -140px;
	margin-left: 560px;
	color: #ff6464;
}

.f3{
	position: absolute;
	margin-top: -110px;
	margin-left: 450px;
	color: #6488ff;
}

.f3:hover{
	position: absolute;
	margin-top: -110px;
	margin-left: 450px;
	color: #ff6464;
}

.f4{
	position: absolute;
	margin-top: -110px;
	margin-left: 560px;
	color: #6488ff;
}

.f4:hover{
	position: absolute;
	margin-top: -110px;
	margin-left: 560px;
	color: #ff6464;
}

.comment1{
	position: absolute;
	margin-top: -70px;
	margin-left: 440px;
	color: #ff6464;
	font-size: 15px;
}

.comment2{
	position: absolute;
	margin-top: -50px;
	margin-left: 460px;
	color:  #494949;
	font-size: 20px;
}

img.main{
	height: 405px;
	margin-bottom: -30px;
	position: relative;
}

</style>
