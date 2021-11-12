<template>
    <v-container fluid>
      <v-row class="ma-auto px-md-7">
        <p class="omni-logo">OMNIBOTIKA</p>
        <v-spacer></v-spacer>
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

      <v-row class="text-center text-md-left px-md-7" justify="space-between">
        <v-col class="py-0 py-xl-15 py-lg-5" cols="12" md="6">
          <h1 class="d-none d-md-flex d-lg-flex mt-10" style="max-width: 680px;">Improve the way you works</h1>
          <p class="d-none d-md-flex d-lg-flex my-10" style="max-width: 550px;">
              Omnichannel Botika will help you improve customer experience, providing 
              the tools you will need, and bring your team to connect with the worlds.
          </p>
          <!-- Only visible in SM or below -->
          <h1 class="d-md-none d-lg-none mt-10">Improve the way you works</h1>
          <p class="d-md-none d-lg-none my-6">
              Omnichannel Botika will help you improve customer experience, providing 
              the tools you will need, and bring your team to connect with the worlds.
          </p>

          <div class="my-15">
            <v-btn class="btn-primary text-h6 font-weight-black mx-auto mr-sm-5 mb-5" style="width: 250px;" x-large rounded-sm elevation="0">
                TRY IT FOR FREE
            </v-btn>
            <v-btn class="btn-secondary text-subtitle-1 font-weight-bold mx-auto mb-5" color="#f9f9f9" style="width: 160px;" x-large rounded-sm outlined>
                Contact Us
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
            <v-img class="ma-auto" :src="require('@/assets/img/omni/Header-min.webp')" max-width="700px" height="auto"></v-img>
        </v-col>
        <hr class="vector-1">
        <hr class="vector-2">
        <hr class="vector-3">
        <hr class="vector-4">
      </v-row>
    </v-container>
</template>

<style scoped>
.omni-logo{
    font-weight: bold;
    font-size: 18px;
}
h1{
  font-size: 70px;
  line-height: 130%;
  color: #F9F9F9;
}
p{
    font-size: 18px;
    line-height: 150%;
    color: #F9F9F9;
}
.btn1{
  width: 110px;
}
.btn-primary{
    width: 110px;
    background-color: #F9F9F9;
    border: none;
    color:#1052A8;
    font-weight: bold;
}
.btn-secondary{
    width: 110px;
    border-width: 1.5px;
    color:#F9F9F9;
    font-weight: bold;
}
</style>