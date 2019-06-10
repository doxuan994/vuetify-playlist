<template>
  <div class="team">
    <h1 class="subheading grey--text">Notes</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="note in notes" :key="note.id">
          <v-card flat class="text-xs-center ma-3">
            <v-img :src="note.src" height="150px"></v-img>


            <v-card-text>
              <div class="subheading">{{ note.title }}</div>
            </v-card-text>

            <v-card-text>
              <div class="grey--text">{{ note.content }}</div>
            </v-card-text>

            <v-card-actions>
              <v-menu transition="scale-transition">
                <template v-slot:activator="{ on }">
                  <v-btn flat dark color="primary" v-on="on" class="ml-1">Scale Transition</v-btn>
                </template>
                <v-list>
                  <v-list-tile v-for="n in 5" :key="n" @click="">
                    <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import db from '@/fb';

export default {
  data() {
    return {
      notes: [
        // { title: 'Check emails', content: 'Check emails of interns every morning at 8:00AM!', src: '/card-img-1.jpg' },
        // { title: 'Talk to team members', content: 'Talk to The Net Ninja, Ryu and Chun Li!', src: '/card-img-2.jpg' },
        // { title: 'Add more team members', content: 'Yoshi is the new team member.', src: '/card-img-3.jpg' },
        // { title: 'Remove old projects', content: 'Remove overdue projects!', src: '/card-img-4.jpg' },
      ]
    }
  },
  created() {
    db.collection('notes').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.notes.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  methods: {

  }
}
</script>
