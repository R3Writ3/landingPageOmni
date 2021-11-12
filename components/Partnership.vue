<template>
    <v-row justify="center" align="center" class="text-center">
        <v-col cols="12">
            <div>
                <span class="text-h3 font-weight-bold">Our Business Partner</span>
            </div>
            <v-row class="partnership-image mt-10 px-10">
                <v-col class="col-6 col-md-2 d-none d-md-flex d-lg-flex d-xl-flex">
                </v-col>
                <v-col class="col-6 col-md-2 col-sm-6">
                    <v-img :lazy-src="require('@/assets/img/omni/liputan6-min.webp')"
                    :src="require('@/assets/img/omni/liputan6-min.webp')"></v-img>
                </v-col>
                <v-col class="col-6 col-md-2 col-sm-6">
                    <v-img :lazy-src="require('@/assets/img/omni/brins-min.webp')"
                    :src="require('@/assets/img/omni/brins-min.webp')"></v-img>
                </v-col>
                <v-col class="col-6 col-md-2 col-sm-6">
                    <v-img :lazy-src="require('@/assets/img/omni/bankindonesia-min.webp')"
                    :src="require('@/assets/img/omni/bankindonesia-min.webp')"></v-img>
                </v-col>
                <v-col class="col-6 col-md-2 col-sm-6">
                    <v-img :lazy-src="require('@/assets/img/omni/bpjamsostek-min.webp')"
                    :src="require('@/assets/img/omni/bpjamsostek-min.webp')"></v-img>
                </v-col>
                <v-col class="col-6 col-md-2 d-none d-md-flex d-lg-flex d-xl-flex">
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<style scoped>
.text-h3{
    color: #1052A8;
}
.partnership-image{
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: 0.5s;
}
.partnership-image:hover{
    transition: 0.5s;
    filter: none;
}
</style>