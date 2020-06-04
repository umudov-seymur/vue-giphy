<script>
import HTTP from "./api/httpClient";
import Search from "./components/Search";
import Preview from "./components/Preview";
export default {
  name: "App",
  data() {
    return {
      loading: true,
      gifs: []
    };
  },
  methods: {
    getGifList() {
      HTTP.get("/gifs/trending").then(data => this.setData(data));
    },
    setData(data) {
      this.gifs = data.data.data;
      this.loading = false;
    },
    handleSeach(query) {
      this.gifs = [];
      this.loading = true;
      HTTP.get(
        `/gifs/search?q=${query}&limit=25&offset=0&rating=G&lang=en`
      ).then(data => this.setData(data));
    }
  },
  created() {
    this.getGifList();
  },
  components: {
    Search,
    Preview
  }
};
</script>

<template>
  <div class="container">
    <div class="justify-content-center mt-5 align-items-center">
      <Search @query="handleSeach" />
      <hr />
      <div class="text-center" v-if="loading">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <Preview v-if="gifs.length > 0" :gifs="gifs" />
      <div class="alert alert-danger" v-if="!loading && gifs.length <= 0">No data found :(</div>
    </div>
  </div>
</template>

<style>
#app {
  background: rgb(255, 255, 255);
}
</style>