<template>
  <div id="app">

    <h1>Cloudinary</h1>
    <cld-image cloudName="demo" publicId="sample" width="300" crop="scale" />
    <button id="upload_widget" class="cloudinary-button">Upload files</button>

    <v-app id="">
        <v-container>
          <v-row align-center style="margin-top:50px">
            <v-col>
              <Index />
            </v-col>
          </v-row>
        </v-container>
    </v-app>
  </div>
</template>

<script>
import Index from './pages/index';

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>