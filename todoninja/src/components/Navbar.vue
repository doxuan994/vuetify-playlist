<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="snackbarNote" :timeout="4000" top color="success">
      <span>Awesome! You added a new note.</span>
      <v-btn flat color="white" @click="snackbarNote = false">Close</v-btn>
    </v-snackbar>


    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = ! drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>


      <!-- Dropdown menu -->
      <v-menu offset-y>
        <v-btn flat color="grey" slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" >
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat color="grey">Sign Out</v-btn>
      <v-icon right>exit_to_app</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary" disable-resize-watcher>
      <v-layout column wrap align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png">
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="my-1">
          <Popup @projectAdded="snackbar = true"/>
        </v-flex>
        <v-flex class="">
            <AddNote @noteAdded="snackbarNote = true"/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action><v-icon class="white--text">{{link.icon}}</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title></v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup';
import AddNote from './AddNote';

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
        { icon: 'note_add', text: 'Notes', route: '/notes' }
      ],
      snackbar: false,
      snackbarNote: false
    }
  },
  components: {
    Popup,
    AddNote
  }
}
</script>
