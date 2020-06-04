<script>
export default {
  props: ["gifs"]
};
</script>

<template>
  <div class="row">
    <div class="card col-md-3 shadow-sm mb-3 mr-2" style="width: 18rem;" v-for="(gif, index) in gifs" :key="index">
      <div class="card-body">
      <img :src="gif.images.downsized.url"  class="card-img-top" alt="..." />
      </div>
    </div>
  </div>
</template>

<style>
li {
  list-style: none;
  float: left;
  margin: 20px;
}
</style>
