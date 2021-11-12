<template>
    <v-row class="text-center text-md-left">
        <v-col class="col-12 col-md-6 order-last order-md-first">
            <v-img class="ma-auto ma-lg-0 ml-lg-auto" :src="require('@/assets/img/omni/Chat-console-min.webp')" style="max-width:500px; max-height:500px;"></v-img>
        </v-col>
        <v-col class="col-12 col-md-4 order-first order-md-last">
            <h2 class="d-none d-md-flex d-lg-flex ma-auto my-5" style="max-width:350px;">Invite Your Team and Manage your Project</h2>
            <p class="d-none d-md-flex d-lg-flex ma-auto my-6" style="max-width:350px;">
                Invite all of your team and make the best experience for your customer by getting your team ready.
            </p>
            <!-- Only visible in SM or below -->
            <h2 class="d-md-none d-lg-none ma-auto my-5">Invite Your Team and Manage your Project</h2>
            <p class="d-md-none d-lg-none ma-auto my-6">
                Invite all of your team and make the best experience for your customer by getting your team ready.
            </p>
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