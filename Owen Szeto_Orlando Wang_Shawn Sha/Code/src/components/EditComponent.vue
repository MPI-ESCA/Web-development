<template>
  <div>
    <form @submit.prevent="updatePost">
      <!-- first row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Property title:</label>
          <input type="text" class="form-control" v-model="post.title" />
        </div>

        <div class="form-group col-md-6">
          <label>Image URL:</label>
          <input type="text" class="form-control" v-model="post.ImageURL" />
        </div>
      </div>

      <!-- Second row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Estate: </label>
          <select class="form-control" v-model="post.Estate" required>
            <option selected disabled>Choose Estate...</option>
            <option value="City One Shatin">City One Shatin</option>
            <option value="Tin Ma Court">Tin Ma Court</option>
            <option value="Festival City">Festival City</option>
          </select>
        </div>

        <div class="form-group col-md-6">
          <label>Bedrooms:</label>
          <input
            type="number"
            class="form-control"
            min="1"
            v-model="post.Bedrooms"
          />
        </div>
      </div>

      <!-- Third row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Gross Area:</label>
          <input
            type="number"
            class="form-control"
            min="1"
            v-model="post.GrossArea"
          />
        </div>

        <div class="form-group col-md-6">
          <label>Expected Tenants:</label>
          <input
            type="number"
            class="form-control"
            min="1"
            v-model="post.ExpectedTenants"
          />
        </div>
      </div>

      <!-- Fourth row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Rent:</label>
          <input
            type="number"
            class="form-control"
            min="1"
            v-model="post.Rent"
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck1"
              v-model="post.Highlighted"
            />
            <label class="form-check-label" for="gridCheck1">
              Highlighted Property
            </label>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-danger" @click.prevent="deletePost(post._id)">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  created() {
    let url = `http://localhost:4001/admin/edit/${this.$route.params.id}`;
    this.axios.get(url).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost() {
      let url = `http://localhost:4001/admin/update/${this.$route.params.id}`;
      this.axios.post(url, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    },
    deletePost(id) {
      let url = `http://localhost:4001/admin/delete/${id}`;
      this.axios.delete(url).then(() => {
        this.posts.splice(this.posts.indexOf(id), 1);
      });
    },
  },
};
</script>