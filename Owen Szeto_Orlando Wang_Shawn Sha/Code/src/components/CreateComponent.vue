<template>
  <div>
    <h1><b>Property Create form</b></h1>
    <br>
    <form @submit.prevent="addPost">
      <!-- First row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Property title:</label>
          <input type="text" class="form-control" v-model="post.title" required/>
        </div>

        <div class="form-group col-md-6">
          <label>Image URL:</label>
          <input type="text" class="form-control" v-model="post.ImageURL" required/>
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
          <input type="number" class="form-control" min="1" v-model="post.Bedrooms" required/>
        </div>
      </div>

      <!-- Third row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Gross Area:</label>
          <input type="number" class="form-control" min="1" v-model="post.GrossArea" required/>
        </div>

        <div class="form-group col-md-6">
          <label>Expected Tenants:</label>
          <input type="number" class="form-control" min="1" v-model="post.ExpectedTenants" required/>
        </div>
      </div>

      <!-- Fourth row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Rent:</label>
          <input type="number" class="form-control" min="1" v-model="post.Rent" required/>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="post.Highlighted"/>
            <label class="form-check-label" for="gridCheck1">
              Highlighted Property
            </label>
          </div>
          <br />

          <button type="submit" class="btn btn-primary">Submit</button>

        </div>
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
  methods: {
    addPost() {
        let url = 'http://localhost:4001/admin/add';
        this.axios.post(url, this.post).then(() => {
            this.$router.push({name: 'admin'});
        });
    },
  },
};
</script>