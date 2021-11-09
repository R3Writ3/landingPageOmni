<template>
  <v-app
    dark
    max-width="1920"
  >
    <v-main class="landing-page">
      <!-- <v-main class="landing-page" fluid> -->
        <v-container>
          <HomeSection />
        </v-container>
        <v-container class="ma-0 mt-15 pa-0 d-none d-md-flex d-lg-flex d-xl-flex" fluid>
          <Value />
        </v-container>
      <!-- </v-main>
      <v-main style="height: 400px;"> -->
        <v-container class="d-flex justify-center py-15" style="background-color: #ffffff" fluid>
          <Partnership />
        </v-container>
      <!-- </v-main>
      <v-main style="height: 800px"> -->
        <v-container class="bg-2 py-15" fluid>
          <Benefit />
        </v-container>
      <!-- </v-main>
      <v-main class="d-flex align-center" style="height: 700px"> -->
        <v-container class="bg-3 pa-0 mb-10 py-15 px-13">
          <Integration />
        </v-container>
      <!-- </v-main>
      <v-main> -->
        <v-container class="bg-4 py-10 mb-0 mb-md-0 mb-sm-15" fluid>
          <AboutSection />
        </v-container>
        <v-container class="line1 mb-15 d-none d-md-flex d-lg-flex d-xl-flex">

        </v-container>
      <!-- </v-main>
      <v-main> -->
        <v-container class="bg-5 py-10 mb-0 mb-md-0 mb-sm-15">
          <AboutSection2 />
        </v-container>
        <v-container class="line2 mb-10 d-none d-md-flex d-lg-flex d-xl-flex">
          
        </v-container>
      <!-- </v-main>
      <v-main> -->
        <v-container class="bg-4 py-10">
          <AboutSection3 />
        </v-container>

      <!-- </v-main>
      <v-main style="height:500px"> -->
        <v-container class="py-15">
          <ContactUs />
        </v-container>
      <!-- </v-main>
      <v-main class="free-trial"> -->
        <v-container class="d-flex justify-center align-center free-trial py-15 px-10" fluid>
          <FreeTrial />
        </v-container>
      <!-- </v-main> -->
        <v-container class="pa-0" fluid>
          <FooterSection />
        </v-container>
    </v-main>
  </v-app>
</template>


<style>
  @font-face {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: bold;
    src: url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  }
  .gr-blue{
    background: linear-gradient(180deg, #1F77EA 0%, #448EEE 100%);
    box-shadow: 0px 6px 12px rgba(7, 0, 11, 0.2);
    border-radius: 20px;
  }
  .box1sm{
    width: auto;
    height: 100px;
    border: 15px solid green;
  }
  .theme--light.v-application {
    background-color: #ffffff;
  }
  .line1{
    width: 100%;
    height: 100%;
    max-width: 1920px;
    max-height: 200px;
    background-image: url('~assets/img/linebg1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .line2{
    width: 100%;
    height: 100%;
    max-width: 1920px;
    max-height: 200px;
    background-image: url('~assets/img/linebg2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .bg-2{
    width: auto;
    height: auto;
    max-width: 2048px;
    max-height: 100%;
    background-image: url('~assets/img/BackgroundBenefit.png');
    background-color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .bg-3{
    width: auto;
    height: auto;
    max-width: 1920px;
    max-height: 100%;
    background-image: url('~assets/img/BackgroundIntegration.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .bg-4{
    width: auto;
    height: auto;
    max-width: 1920px;
    max-height: 100%;
    background-image: url('~assets/img/Background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .bg-5{
    width: auto;
    height: auto;
    max-width: 1920px;
    max-height: 100%;
    background-image: url('~assets/img/Background-2-rev.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .landing-page{
    /* Rectangle 40 */
    flex: 1 1 auto;
    max-width: 100%;
    height: 100%;
    max-height: 1150px;
    position: relative;
    background: linear-gradient(99.14deg, #1052A8 4.94%, #1F77EA 100%);
    background-repeat: no-repeat;
    background-position: center;
  }
  .free-trial{
    /* Rectangle 40 */
    background: linear-gradient(99.14deg, #1F77EA 4.94%, #448EEE 100%);
    background-size: 100%; 
    background-repeat: no-repeat;
  }
  .cardpage{
    border-style: solid;
    border-color: rgba(#f9f9f9, 100%);
    border-width: 1.25px;
    height: 200px;
  }
  .vector-1{
    position: absolute;
    width: 110px;
    left: -15px;
    top: -15px;
    opacity: 0.3;
    border: 1px solid #F9F9F9;
    transform: rotate(140deg);
  }
  .vector-2{
    position: absolute;
    width: 130px;
    left: -15px;
    top: 30px;
    opacity: 0.3;
    border: 1px solid #F9F9F9;
    transform: rotate(140deg);
  }
  .vector-3{
    position: absolute;
    width: 270px;
    right: -20px;
    top: 20px;
    opacity: 0.3;
    border: 1px solid #F9F9F9;
    transform: rotate(140deg);
  }
  .vector-4{
    position: absolute;
    width: 100px;
    right: 0px;
    top: 80px;
    opacity: 0.3;
    border: 1px solid #F9F9F9;
    transform: rotate(140deg);
  }
</style>