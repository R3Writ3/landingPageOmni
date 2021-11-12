<template>
    <v-row class="text-center text-md-left">
        <v-col class="col-12 col-md-5 ml-md-15">
            <h2 class="d-none d-md-flex d-lg-flex ml-md-auto mb-auto my-5" style="max-width:400px">Integrate to Your Favourite Social Media</h2>
            <p class="d-none d-md-flex d-lg-flex ml-md-auto auto mb-auto my-6" style="max-width:400px">
                Choose your favourite channel you want to integrate and your omnichannel is ready.
            </p>
            <!-- Only visible in SM or below -->
            <h2 class="d-md-none d-lg-none ml-md-15 my-5">Integrate to Your Favourite Social Media</h2>
            <p class="d-md-none d-lg-none ml-md-15 my-6">
                Choose your favourite channel you want to integrate and your omnichannel is ready.
            </p>
        </v-col>
        <v-col class="col-12 col-md-6">
            <v-img class="ma-auto ma-lg-auto mr-md-auto" :src="require('@/assets/img/omni/All-Channel-Integrations-min.webp')" style="max-width:500px; max-height:500px;"></v-img>
        </v-col>
    </v-row>
</template>

<style scoped>
h2{
    font-size: 3.89em;
    line-height: 120%;
    color: #1052A8;
}
p{
    font-size: 1.33em;
    line-height: 150%;
    color: #1f1f1f;
}
</style>