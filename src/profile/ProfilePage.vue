<template>
  <div>
    <h2>Profile</h2>
    <pre>
      FirstName: {{loggedInUser.user.firstName}}
      LastName: {{loggedInUser.user.lastName}}
      email: {{loggedInUser.user.email}}
    </pre>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      loggedInUser: state => state.account
    })
  },
  methods: {
  },
  watch: {
  } 
};
</script>