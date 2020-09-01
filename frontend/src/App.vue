<template>
  <div id="app">
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
