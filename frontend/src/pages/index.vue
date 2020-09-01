<template>
  <v-card
    class="mx-auto"
    max-width="80%"
    outlined
  >
    <v-card-text 
        class="d-flex justify-center align-center"
        :class="{'margin-vertical': image == null}">
      <div height="500">
        <div
            v-if="image != null">
            <v-img @click="removeImage" :src="'data:'+extension+';base64, '+image"/>
        </div>
        <div v-else>
          <input type="file" @change="uploadImage($event)">
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

import axios from 'axios'

export default {
    data: () => ({
        loading:false,
        image: null,
        extension: 'image/jpg'
    }),
    methods: {
        uploadImage(e) {
            var files = e.target.files;
            if (!files.length) return;
            // this.renderImage(files[0]);

            var selectedFile = event.target.files[0]
            console.log(selectedFile)
            const formData = new FormData()
            formData.append('image', selectedFile)

            axios.post('http://192.168.10.3:8000/apis/images/process/', formData)
            .then(res=>{
              this.image = res.data
              this.extension = res.headers['content-type']
            })
        },
        // renderImage(file) {
        //     var reader = new FileReader();

        //     reader.onload = (e) => {
        //         this.image = e.target.result;
        //     };
        //     reader.readAsDataURL(file);
        // },
        removeImage: function () {
            this.image = null; 
        }
    }
}
</script>

<style>
.margin-vertical{
    margin-top: 200px;
    margin-bottom: 200px;
}
</style>
