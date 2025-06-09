<template>
<v-container>
    <v-row>
        <v-col cols="12" md="4">
<div id="lightDiv">
    <div v-show="light"></div>
    <img src="src/assets/img/img_lightBulb.svg"/>
</div>
        </v-col>
        <v-col cols="12" md="4">

        </v-col>
        <v-col cols="12" md="4">
<p>{{ "count "  + count}}</p>
<button v-on:click="count++">Count 증가</button><br>
<v-btn v-on:click="count++" variant="primary">Count 증가</v-btn><br>
<h1>뷰 이벤트</h1>   
<pre>
- 이벤트 처리는 지시문을 통해 이루어지므로 v-on을 사용합니다
</pre>        
        </v-col>
    </v-row>
</v-container>
</template>



<script>
export default{
 data(){
    return{
        count:0
    }
 }
}
</script>

<style>
</style>