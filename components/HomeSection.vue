<template>
  <v-row justify="center" align="center" class="ml-md-1 mr-md-1" fluid>
      <v-col cols="12">
          <v-app-bar 
            hide-on-scroll
            app color="transparent" 
            elevation="0" 
            class="mt-md-2 px-md-16"
          >
            <p class="omni">OMNIBOTIKA</p>
            <v-spacer></v-spacer>

            <div class="text-center">
              <v-row align="center">
                <!-- <v-select
                  :items="items"
                  class="mr-md-4 mt-md-1 d-none d-md-flex d-lg-flex d-xl-flex"
                  value="EN"
                  color="#f9f9f9"
                >
                </v-select> -->

                <v-btn 
                  small
                  color="#f9f9f9"
                  class="btn1 mb-md-3 mr-md-2 d-none d-md-flex d-lg-flex d-xl-flex"
                  style="border-width: 1.5px;"
                  outlined
                >
                  REGISTER
                </v-btn>

                <v-btn 
                  small
                  color="#f9f9f9"
                  class="btn1 mb-3 mb-md-3 mb-sm-4"
                  elevation="0"
                >
                  <a color="#1052A8">LOGIN</a>
                </v-btn>          
              </v-row>
            </div>
          </v-app-bar>


        <v-col cols="12">
          <div class="main-wrap">
            <div class="container" fluid>
              <div class="row d-flex justify-center align-center">
                <v-col cols="7" lg="7" md="7" sm="12" xs="12">
                  <div class="row pb-0 pb-md-0 pb-sm-15" style="max-width: 680px;">
                    <h1 class="text-md-2 font-weight-bold" style="max-width: 680px;">Improve the way you works</h1>
                    <div class="pt-5 pt-md-5 pt-sm-8">
                      <p style="max-width: 550px; font-size: 18px;">Omnichannel Botika will help you improve customer experience,  providing the tools you will need, and bring your team to connect with the worlds.</p>
                    </div>
                  </div>
                  <div>
                    <div class="row mt-10 mt-md-10 mt-sm-15">
                        <v-btn
                          x-large
                          color="#f9f9f9"
                          class="btn1"
                          max-width="250"
                          style="width: 250px;"
                          elevation="0"
                        >
                          <a class="text-h6 font-weight-black" color="#1052A8">Try It For Free</a>
                        </v-btn>
                        <v-btn
                          x-large
                          color="#f9f9f9"
                          class="btn1 ml-md-4 text-subtitle-1 font-weight-bold d-none d-md-flex d-lg-flex d-xl-flex"
                          style="width: 160px; border-width: 2px;"
                          elevation="0"
                          outlined
                        >
                          Contact Us
                        </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col lg="5" md="5" sm="12" align="center">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/500/300"
                    src="https://picsum.photos/id/11/500/300"
                    max-width="100%"
                    max-height="100%"
                  >

                  </v-img>
                </v-col>
              </div>
            </div>
          </div>
        </v-col>

      </v-col>
          <hr class="vector-1">
          <hr class="vector-2">
          <hr class="vector-3">
          <hr class="vector-4">
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: ['EN', 'ID'],
  }),
}
</script>

<style>
  h1{
    font-size: 70px;
    color: #F9F9F9;
  }
  p{
    color: #F9F9F9;
  }
  .app-bar{
    box-shadow: 0dp;
  }
  .theme--light.v-select .v-select__selections {
    color: #F9F9F9;
    min-height: 10px;
  }
  .theme--light.v-icon {
    color: #F9F9F9;
  }
  .theme--light.v-text-field > .v-input__control > .v-input__slot::before {
    border-color: #F9F9F9;
  }
  .theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot::before {
    border-color: #F9F9F9;
  }
  .theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot::after {
    border-color: #FFFFFF;
  }
  .omni{
    font-family: "Source Sans Pro", sans-serif;
    font-weight: bold;
    font-size: 18px;
  }
  .bt-text{
    font-family: "Montserrat", sans-serif;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0px;
  }
  .v-btn{
    border-radius: 4px;
  }
  .v-select{
    width: 50px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 12px;
  }
  .btn1{
    width: 110px;
  }
</style>