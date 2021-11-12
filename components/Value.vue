<template>
        <v-row>
          <v-col cols="4" style="padding-right: 0;">
            <v-sheet color="rgb(255, 255, 255, 0.3)" class="cardpage">
              <div class="mr-md-10 pl-md-4">
                <v-list-item-content class="pt-md-5 pr-md-15">
                  <v-card-title class="pl-md-15">
                    <v-icon
                      large
                      left
                      color="#f9f9f9"
                    >
                    mdi-cloud-outline
                    </v-icon>
                    <span class="text-h5 font-weight-bold pl-md-3">12+</span>
                  </v-card-title>
                  <v-card-subtitle class="ml-md-15 pl-md-15 font-weight-light">Supported Channel Integration, providing you many integration for all of your needs.</v-card-subtitle>
                </v-list-item-content>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4" style="padding-right: 0; padding-left: 0;">
            <v-sheet color="rgb(255, 255, 255, 0.3)" class="cardpage">
              <div class="mr-md-10 pl-md-4">
                <v-list-item-content class="pt-md-5 pr-md-15">
                  <v-card-title class="pl-md-15">
                    <v-icon
                      large
                      left
                      color="#f9f9f9"
                    >
                    mdi-earth
                    </v-icon>
                    <span class="text-h5 font-weight-bold pl-md-3">20+</span>
                  </v-card-title>
                  <v-card-subtitle class="ml-md-15 pl-md-14 font-weight-light">Countries trusting us for their customer service and we are making sure to deliver it.</v-card-subtitle>
                </v-list-item-content>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4" style="padding-left: 0;">
            <v-sheet color="rgb(255, 255, 255, 0.3)" class="cardpage">
              <div class="mr-md-10 pl-md-4">
                <v-list-item-content class="pt-md-5 pr-md-15">
                  <v-card-title class="pl-md-15">
                    <v-icon
                      large
                      left
                      color="#f9f9f9"
                    >
                    mdi-account-circle-outline
                    </v-icon>
                    <span class="text-h5 font-weight-bold pl-md-3">25.000+</span>
                  </v-card-title>
                  <v-card-subtitle class="ml-md-15 pl-md-14 font-weight-light">Satisfied customer and agent using our service and we continue to improve our service.</v-card-subtitle>
                </v-list-item-content>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
</template>

<style scoped>
    span{
        color: #f9f9f9;
    }
    .v-sheet{
        border-style: solid;
        border-width: 1.25px;
        color: #f9f9f9;
        border-color: rgb(255, 255, 255, 0.3);
    }
    .v-card__subtitle, .v-card__text {
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.375rem;
        letter-spacing: 0.0071428571em;
    }
</style>