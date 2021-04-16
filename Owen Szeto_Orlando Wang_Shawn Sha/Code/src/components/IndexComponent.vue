<template>
  <div class="table-responsive-xl">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Title</th>
          <th scope="col">Estate</th>
          <th scope="col">Occupants</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(post, index) in posts" :key="post._id">
          <td>{{ index + 1 }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.Estate }}</td>
          <td><a href="/"> Occupants </a></td>

          <td>
            <router-link :to="{ name: 'edit', params: { id: post._id } }"
              >Edit</router-link
            >
          </td>

          <td>
            <button
              class="btn btn-danger"
              @click.prevent="deletePost(post._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
    let url = "http://localhost:4001/admin";
    this.axios.get(url).then((response) => {
      this.posts = response.data;
    });
  },
  methods: {
    deletePost(id) {
      let url = `http://localhost:4001/admin/delete/${id}`;
      this.axios.delete(url).then(() => {
        this.posts.splice(this.posts.indexOf(id), 1);
      });
    },
  },
};
</script>