<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = ! drawer"></v-toolbar-side-icon>



      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat color="grey">Sign Out</v-btn>
      <v-icon right>exit_to_app</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <p>test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false
      }
    },
    components: {

    }
  }
</script>
