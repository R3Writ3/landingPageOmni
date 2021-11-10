<template>
    <v-row justify="center" align="center" class="text-center">
        <v-col cols="12">
            <div>
                <span class="text-h3 font-weight-bold">Our Business Partner</span>
            </div>
            <v-row class="partnership-image mt-10 px-10">
                <v-col class="col-6 col-sm-4 col-md-2">
                    <v-img lazy-src="omni/beacukai-min.png" src="omni/beacukai-min.png"></v-img>
                </v-col>
                <v-col class="col-6 col-sm-4 col-md-2">
                    <v-img lazy-src="omni/liputan6-min.png" src="omni/liputan6-min.png"></v-img>
                </v-col>
                <v-col class="col-6 col-sm-4 col-md-2">
                    <v-img lazy-src="omni/brins-min.png" src="omni/brins-min.png"></v-img>
                </v-col>
                <v-col class="col-6 col-sm-4 col-md-2">
                    <v-img lazy-src="omni/bankindonesia-min.png" src="omni/bankindonesia-min.png"></v-img>
                </v-col>
                <v-col class="col-6 col-sm-4 col-md-2">
                    <v-img lazy-src="omni/bpjamsostek-min.png" src="omni/bpjamsostek-min.png"></v-img>
                </v-col>
                <v-col class="col-6 col-sm-4 col-md-2">
                    <v-img lazy-src="omni/PLN-min.png" src="omni/PLN-min.png"></v-img>
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