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
        <div v-if="image != null">
            <v-img @click="removeImage" :src="image"/>
        </div>
        <div v-else>
          <input type="file" @change="uploadImage($event)">
        </div>
        <div>
            <h1>Cloudinary</h1>
            <cld-image cloudName="demo" publicId="sample" width="300" crop="scale" />
            <button id="upload_widget" class="cloudinary-button">Upload files</button>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
    data: () => ({
        loading:false,
        image: null,
    }),
    methods: {
        uploadImage(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.renderImage(files[0]);
        },
        renderImage(file) {
            var reader = new FileReader();

            reader.onload = (e) => {
                this.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
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
