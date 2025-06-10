<template>
    <v-container>
        <v-row>
<v-col cols="12" md="4">
<h1>동적으로 만드는 모델 </h1>
<form v-on:submit.prevent="addItem">

<p>
What do you need?<br>
<input type="text" required placeholder="item name..." v-model="itemName">
</p>

<p>
How many?<br>
<input type="number" required placeholder="number of items..." v-model="itemNumber">
</p>

<p>
Important?
<input type="number" v-model="itemImpotant">
{{ itemImportant }}
</p>
<button type="submit">Add item</button>
</form>
<br>
<hr>
<p>shopping list:</p>
<ul id="ulToFind">
    <li
    v-for="item in shoppingList"
    v-bind:class="{impClass: item.Important?}"
    v-on:click="item.found=!item.found"
    v-show="!item.found">
    {{ item.name }},{{ item.number }}
    </li>
</ul>

<ul id="ulFound">
    <li
    v-for="item in shoppingList"
    v-bind:class="{impClass: item.Important?}"
    v-on:click="item.found=!item.found"
    v-show="!item.found">
    {{ item.name }},{{ item.number }}
    </li>
</ul>
</v-col>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4"></v-col>
        </v-row>
    </v-container>
</template>