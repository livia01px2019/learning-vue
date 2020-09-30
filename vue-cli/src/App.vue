<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <div class="form=group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form=group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <br />
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(user, index) in users"
            :key="index"
          >
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>
        <br />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
      resource: {},
    };
  },
  methods: {
    submit() {
      this.$http.post("", this.user).then(
        (response) => {
          console.log(response);
          this.user.username = "";
          this.user.email = "";
        },
        (error) => {
          console.log(error);
        }
      );
    },
    fetchData() {
      this.$http
        .get("")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
            this.users = resultArray;
          }
        });
    },
  },
};
</script>

<style lang="scss">
</style>
