<template>
    <v-container class="text-center">
        <v-row>
<v-col cols="12" md="4" sm="4">
<h1>small variant</h1>
<v-card class="mx-auto" max-width="">
    <v-toolbar
    color="light-blue"
    extended
    light
    >
<v-app-bar-nav-icon color="grey-darken-4">
</v-app-bar-nav-icon>

<v-toolbar-title>My files</v-toolbar-title>
<v-btn color="grey-darken-4" icon="mdi-magnify"></v-btn>
<v-btn color="grey-darken-4" icon="mdi-view-module"></v-btn>

<template v-slot:extension>
    <v-fab
    class="ms-4"
    color="cyan-accent-2"
    icon="mdi-plus"
    location="bottom left"
    size="40"
    absolute
    offset
    @click="dialog = !dialog"
    ></v-fab>
</template>
</v-toolbar>
<v-list lines="two">
    <v-list-subheader title="Folders" inset></v-list-subheader>
    <v-list-item
    v-for="item in items"
    :key="item.title"
    link
    >
        <template v-slot:prepend>
            <v-avatar :class="[item.iconClass]" :icon="item.icon"></v-avatar>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>

        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>

        <template v-slot:append>
            <v-list-item-action>
<v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
            </v-list-item-action>
        </template>
    </v-list-item>
</v-list>

<v-dialog
v-model="dialog" max-width="500"
>
    <v-card>
        <v-card-text>
            <v-text-field label="File name"></v-text-field>
            <small class="text-grey">' actually save'</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="primary" variant="text" @click="dialog = false"
            >
        Submit
            </v-btn>
        </v-card-actions>
    </v-card>

</v-dialog>
</v-card>

</v-col> 
<v-col cols="12" md="4" sm="4">
<h1></h1>   
</v-col>
<v-col cols="12" md="4" sm="4">
<h1></h1>   
</v-col>           
        </v-row>
    </v-container>
</template>