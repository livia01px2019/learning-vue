<template>
  <ul class="nav nav-pills">
    <!-- exact overrides behavior where everything that starts with to is marked as active, it must be exact -->
    <router-link tag="li" to="/" active-class="active" exact
      ><a>Home</a></router-link
    >
    <router-link tag="li" to="/user/1" active-class="active" exact
      ><a>User 1</a></router-link
    >
    <router-link tag="li" to="/user/2" active-class="active" exact
      ><a>User 2</a></router-link
    >
  </ul>
</template>