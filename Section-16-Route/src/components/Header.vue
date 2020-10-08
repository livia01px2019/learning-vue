<template>
  <ul class="nav nav-pills">
    <!-- exact overrides behavior where everything that starts with to is marked as active, it must be exact -->
    <router-link tag="li" :to="{ name: 'home' }" active-class="active" exact
      ><a>Home</a></router-link
    >
    <router-link tag="li" to="/user" active-class="active"
      ><a>User</a></router-link
    >
  </ul>
</template>