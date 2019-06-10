<template>
  <div class="team">
    <h1 class="subheading grey--text">Notes</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="note in notes" :key="note.id">
          <v-card flat class="text-xs-center ma-3">

            <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="150px"></v-img> -->
            <v-img :src="note.url" height="150px"></v-img>


            <v-card-text>
              <div class="subheading">{{ note.title }}</div>
            </v-card-text>

            <v-card-text>
              <div class="grey--text">{{ note.content }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn flat>Share</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        { title: 'Check emails', content: 'Check emails of interns every morning at 8:00AM!', url: '/card-img-1.jpg' },
        { title: 'Talk to team members', content: 'Talk to The Net Ninja, Ryu and Chun Li!', url: '/card-img-2.jpg' },
        { title: 'Add more team members', content: 'Yoshi is the new team member.', url: '/card-img-3.jpg' },
        { title: 'Remove old projects', content: 'Remove overdue projects!', url: '/card-img-4.jpg' },
      ]
    }
  }
}
</script>
