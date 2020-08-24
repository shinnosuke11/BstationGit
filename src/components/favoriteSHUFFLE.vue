<template>
  <div id="film_roll_slider">
    <VueSlickCarousel v-bind="settings">
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム1.12.png" alt="A店" class="main" />
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム1.12.png" alt="A店" class="main" />
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム1.12.png" alt="A店" class="main" />
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム1.12.png" alt="A店" class="main" />
        </router-link>
      </div>
      <div>
        <router-link to="/shopdetail">
          <img src="../assets/インスタ風フレーム1.12.png" alt="A店" class="main" />
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
        centerPadding: "500px",
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
img.main {
  height: 400px;
}
</style>
