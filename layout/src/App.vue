<template>

    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Vuetify reference</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="'/home'" >Home</v-btn>
            <v-btn text :to="'/nav1'" >nav1</v-btn>
            <v-btn text :to="'/nav2'">nav2</v-btn>
            <v-btn text :to="'/nav3'" >nav3</v-btn>
            <v-btn text :to="'/nav4'" >nav4</v-btn>
            <v-btn text :to="'/nav5'" >nav5</v-btn>
            <v-btn text :to="'/button'" >button</v-btn>
            <v-btn text :to="'/hello'" >hello</v-btn>
        </v-app-bar>

 

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>

 
</template>

<script>
export default {
  name: 'App',
}
</script>
