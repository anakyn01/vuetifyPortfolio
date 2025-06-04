<template>
     <v-app-bar app>
            <v-toolbar-title>Vuetify reference</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="'/home'" >Home</v-btn>
            <v-btn text :to="'/dir'" >뷰디렉티브</v-btn>
            <v-btn text :to="'/bread'" >빵부스러기</v-btn>
            <v-btn text :to="'/nav1'" >nav1</v-btn>
            <v-btn text :to="'/nav2'">nav2</v-btn>
            <v-btn text :to="'/nav3'" >nav3</v-btn>
            <v-btn text :to="'/nav4'" >nav4</v-btn>
            <v-btn text :to="'/nav5'" >nav5</v-btn>  
            <v-btn text :to="'/tabs'" >tabs</v-btn>                     
            <v-btn text :to="'/button'" >button</v-btn>
            <v-btn text :to="'/fbutton'">floating Btn</v-btn>
            <v-btn text :to="'/hello'" >hello</v-btn>
            <v-btn text :to="'/tooltip'">툴팁</v-btn>
            <v-btn text :to="'/page'" >페이지네이션</v-btn>
            <v-btn text :to="'/footers'">footer</v-btn>
            <v-btn text :to="'/bottom1'" >bottom navi</v-btn>
        </v-app-bar>
    <v-main>
         <router-view></router-view>
    </v-main>
</template>