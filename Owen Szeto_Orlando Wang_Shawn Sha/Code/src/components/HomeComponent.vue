<template>
  <div class="card-group">
    <div v-for="post in posts" :key="post._id">
    <div class="card" style="width:34.68rem;">
      
    <h5 class="card-title" style="margin-top:15px; margin-left:21px; margin-bottom: 0px;"><a :href="`/detail/${post._id}`"> {{post.title}}</a></h5>

    <div class="row no-gutters">
      <div class="col-4">
        <img :src="require(`../assets/${post.ImageURL}`)" style="margin-left:20px; margin-top:12px; height:auto; width:100%;" />
      </div>

      <div class="col-8">
        <div class="card-body" style="padding:10px 45px;">
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Estate: {{post.Estate}}</li>
              <li class="list-group-item">Gross Area: {{post.GrossArea}} sq feet</li>
              <li class="list-group-item">Rent: ${{post.Rent}}</li>
            </ul>
          </div>
        </div>
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
      posts: [],
    };
  },
  created() {
    let url = "http://localhost:4001/admin/home";
    this.axios.get(url).then((response) => {
      this.posts = response.data;
    });
  },
  methods: {},
};
</script>