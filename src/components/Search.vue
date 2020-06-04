<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    sendQueryData() {
      this.$emit("query", this.query);
    }
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="form-row">
        <div class="col-md-8">
          <label for="search" class="sr-only">Search</label>
          <input
            type="text"
            class="form-control shadow-sm"
            @keypress.enter="sendQueryData"
            v-model="query"
            id="search"
            placeholder="Search gif ..."
          />
        </div>
        <div class="col">
          <button
            type="submit"
            class="btn btn-primary mb-2 shadow-sm"
            @click.prevent="sendQueryData"
          >Search</button>
        </div>
      </div>
    </div>
  </div>
</template>