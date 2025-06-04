<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <h1>지시어</h1>
<pre>
- v-bind :
- v-if :
- v-show :
- v-for :
- Events :
- v-on :
</pre>
                <div class="" id="msg">
                {{ message }}
                </div>
            </v-col>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4"></v-col>
        </v-row>
    </v-container>
</template>

<style>
#msg{padding:10px; font-size:x-large; background-color:lightgreen;}
</style>

<script>
//html로 뷰를 학습할때는 const app = Vue.createApp
export default{
    data() {
        return{
message:"Hello world"
        };
    }
}
</script>