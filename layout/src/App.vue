<template>
<v-container>
    <v-row>
        <v-col cols="12" md="12" sm="12">
<v-card>
    <v-card-title class="bg-blue d-flex align-center">
        <span class="text-h5">Menu</span>
        <v-spacer></v-spacer>
    </v-card-title>
    <nav>
        <router-link to ="/">home</router-link>
        <router-link to ="/nav1">nav1</router-link>
        <router-link to ="/nav2">nav2</router-link>
        <router-link to ="/nav3">nav3</router-link>
        <router-link to ="/nav4">nav4</router-link>
        <router-link to ="/nav5">nav5</router-link>
    </nav>
</v-card>
        </v-col>
    </v-row>
</v-container>   
</template>


<script setup>
</script>