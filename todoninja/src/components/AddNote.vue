<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add new note</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new note.</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Content" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>


          <v-select :items="images" v-model="pickedImage" label="Image" prepend-icon="add_a_photo">

          </v-select>


          <v-menu>
            <v-text-field :value="formattedDate" slot="activator" label="Due date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
            <v-date-picker v-model="due" :landscape="landscape" color="green lighten-1"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn flat class="success mx-0 mt-3" @click="submitNewNote" :loading="loading">Add note</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '@/fb';


export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false,
      landscape: false,
      images: [
        { text: 'Image One', value: '/card-img-1.jpg' },
        { text: 'Image Two', value: '/card-img-2.jpg' },
        { text: 'Image Three', value: '/card-img-3.jpg' },
        { text: 'Image Four', value: '/card-img-4.jpg' }
      ],
      pickedImage: ''
    }
  },
  components: {

  },
  methods: {
    submitNewNote() {
      if (this.$refs.form.validate()) {

        // console.log(this.title, this.content, this.pickedImage, format(this.due, 'Do MMM YYYY'));


        // this.loading = true;

        const note = {
          title: this.title,
          content: this.content,
          src: this.pickedImage,
          due: format(this.due, 'Do MMM YYYY'),
        }

        db.collection('notes').add(note).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit('noteAdded');
        });



      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : '';
    }
  }
}
</script>
