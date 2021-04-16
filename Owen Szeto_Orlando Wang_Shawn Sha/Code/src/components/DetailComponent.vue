<template>
    <div class="card mb-3">
        <h5 class="card-title" style="margin-left:12px; margin-top:10px; margin-bottom:0px;">{{post.title}}</h5>

    <div class="row no-gutters">

        <div class="col-4">
        <img :src="require(`../assets/${post.ImageURL}`)" class="card-img" style="margin-left:10px; margin-top:21px;" />
        </div>
        <div class="col-8">
        <div class="card-body">
            <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Estate: {{post.Estate}}</li>
              <li class="list-group-item">Gross Area: {{post.GrossArea}} sq feet</li>
              <li class="list-group-item">Rent: ${{post.Rent}}</li>
              <li class="list-group-item">Bedrooms: {{post.Bedrooms}}</li>
              <li class="list-group-item">Expected Tenants: {{post.ExpectedTenants}}</li>
              <li class="list-group-item">Created: {{post.Created}}</li>
              <li class="list-group-item">Updated: {{post.Updated}}</li>
            </ul>
          </div>
        </div>
        </div>
    </div>
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
    let url = `http://localhost:4001/admin/detail/${this.$route.params.id}`;
    this.axios.get(url).then((response) => {
      this.post = response.data;
      this.post.Created = new Date(response.data.Created).toLocaleDateString();
      this.post.Updated = new Date(response.data.Updated).toLocaleDateString();
    });
  },
  methods: {},
};
</script>