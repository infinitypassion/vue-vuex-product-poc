<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">ABC Pvt. Ltd.</a>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" v-show="loggedInUser.status.loggedIn">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item" v-show="loggedInUser.status.loggedIn">
            <router-link to="/profile" class="nav-link">My Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item" v-show="!loggedInUser.status.loggedIn">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-show="loggedInUser.status.loggedIn">
            <a @click="doLogout()" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState({
      alert: state => state.alert,
      loggedInUser: state => state.account
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear',
      logout: 'account/logout'
    }),
    doLogout() {
      this.logout();
    }
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.clearAlert();
    }
  } 
};
</script>