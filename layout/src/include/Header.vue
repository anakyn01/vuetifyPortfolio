<template>
     <v-app-bar app>
            <v-toolbar-title>Vuetify reference</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="'/home'" >Home</v-btn>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        vue
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="navigate(item.link)"
                    >
<v-list-item-title>{{ item.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        nav
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(nav, index) in navItems"
                    :key="index"
                    @click="navigate(nav.link)"
                    >
<v-list-item-title>{{ nav.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        Vuetify3
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(vuetify, index) in vuetifyItems"
                    :key="index"
                    @click="navigate(vuetify.link)"
                    >
                    <v-list-item-title>{{ vuetify.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

  
        </v-app-bar>
    <v-main>
         <router-view></router-view>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
    {title:'뷰디렉티브', link:'/dir'},
    {title:'이벤트', link:'/events'},
])

const navItems = ref([
    {title:'nav1', link:'/nav1'},
    {title:'nav2', link:'/nav2'},
    {title:'nav3', link:'/nav3'},
    {title:'nav4', link:'/nav4'},
    {title:'nav5', link:'/nav5'},
])

const vuetifyItems = ref([
    {title:'tabs', link:'/tabs'},
    {title:'button', link:'/button'},
    {title:'floating Btn', link:'/fbutton'},
    {title:'helloworld', link:'/tooltip'},
    {title:'page', link:'/page'},
    {title:'footers', link:'/footer'},
     {title:'bottom navi', link:'/bottom1'},
])
/*
          <v-btn text :to="'/bread'" >빵부스러기</v-btn>

            <v-btn text :to="'/tabs'" >tabs</v-btn>                     
            <v-btn text :to="'/button'" >button</v-btn>
            <v-btn text :to="'/fbutton'">floating Btn</v-btn>
            <v-btn text :to="'/hello'" >hello</v-btn>
            <v-btn text :to="'/tooltip'">툴팁</v-btn>
            <v-btn text :to="'/page'" >페이지네이션</v-btn>
            <v-btn text :to="'/footers'">footer</v-btn>
            <v-btn text :to="'/bottom1'" >bottom navi</v-btn>
*/
//add
import { useRouter } from 'vue-router'

const router = useRouter()

function navigate(link) {
  router.push(link)
}
</script>
