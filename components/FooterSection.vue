<template>
  <!-- Footer -->
  <v-footer id="bgFooter" >
    <v-container class="text-left py-10">
      <v-row justify="center">
        <v-col class="col-lg-3 col-md-4 col-sm-6 col-12 pr-0">
          <v-col cols="12" class="pl-md-6">
	          <a href="http://botika.online/"><v-img :src="require('@/assets/img/logo-primary.png')" max-width="150px" max-height="150px"></v-img></a>
          </v-col>
          <v-col cols="12">
            <v-row style="max-width: 300px;">
              <v-col cols="3">
                <a href="https://www.linkedin.com/company/botika/">
                  <v-icon
                    max-width="100%"
                    max-height="100%"
                    color="#1052A8"
                  >
                    mdi-linkedin
                  </v-icon>
                </a>
              </v-col>
              <v-col cols="3">
                <a href="https://www.facebook.com/botikaonline/">
                  <v-icon
                    max-width="100%"
                    max-height="100%"
                    color="#1052A8"
                  >
                    mdi-facebook
                  </v-icon>
                </a>
              </v-col>
              <v-col cols="3">
                <a href="https://twitter.com/BotikaOnline">
                  <v-icon
                    max-width="100%"
                    max-height="100%"
                    color="#1052A8"
                  >
                    mdi-twitter
                  </v-icon>
                </a>
              </v-col>
              <v-col cols="3">
                <a href="https://www.instagram.com/botikaonline/?hl=en">
                  <v-icon
                    max-width="100%"
                    max-height="100%"
                    color="#1052A8"
                  >
                    mdi-instagram
                  </v-icon>
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
        <v-col class="col-lg-auto col-lg-offset-1 col-6 ml-md-15">
          <h3 class="text-uppercase mb-4 mt-3 font-weight-bold grey--text">CORPORATE</h3>
          <ul>
            <li><a href="http://botika.online/about-us/index.php">About Us</a></li>
            <li><a href="http://botika.online/about-us/index.php#our-team">Team Work</a></li>
            <li><a href="http://botika.online/blog/">Blog</a></li>
            <li><a href="http://botika.online/botika-privacy-policy/index.php">Privacy Policy</a></li>
            <li><a href="https://omni.botika.online/terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="http://botika.online/brand-identity/">Brand Identity</a></li>
          </ul>
        </v-col>
        <v-col class="col-lg-auto col-6 ml-md-15">
          <h3 class="text-uppercase mb-4 mt-3 font-weight-bold grey--text">PRODUCT</h3>
          <ul>
            <li><a href="http://botika.online/chatbotika/">Chatbotika</a></li>
            <li><a href="https://omni.botika.online">Omnibotika</a></li>
            <li><a href="http://botika.online/TextToSpeech/">Text to Speech</a></li>
            <li><a href="http://botika.online/voice/">Voice Botika</a></li>
            <li><a href="http://botika.online/pulse/">Botika Pulse</a></li>
            <li><a href="https://widyawicara.com/">WidyaWicara Speaker</a></li>
          </ul>
        </v-col>
        <v-col class="col-lg-auto col-md-6 col-12 ml-md-15">
          <h3 class="text-uppercase mb-4 mt-3 font-weight-bold grey--text">BUSINESS SOLUTION</h3>
          <ul>
            <li><a href="http://botika.online/solution/">Solution</a></li>
            <li><a href="http://botika.online/product/">Product</a></li>
            <li><a href="http://botika.online/about-us/index.php?sec=technology">Technology</a></li>
          </ul>
        </v-col>
        <div class="footer-copyright grey--text pl-15 pl-md-15 col-12">
            &copy; 2019 Botika.online
        </div>
      </v-row>
    </v-container>
  </v-footer>
  <!-- Footer -->
</template>

<style scoped>
#bgFooter{
  background-image: url('~assets/img/bg-footer.png');
  background-size: cover;
  background-position: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: rgba(255,255,255,0.6);
}
a:hover {
  text-decoration: none;
  color: #f5f5f5;
}
li {
  padding: 7px 0;
}
.col-lg-auto {
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
}
.col-3{
  max-width: 18%;
}
</style>