<template>
    <v-container>
        <v-row>
<v-col cols="12" md="4">
<ol>
    <li v-for="x in manyFoods">
        {{ x }}
    </li>
</ol>
</v-col>
<v-col cols="12" md="4">
    
</v-col>
<v-col cols="12" md="4">
    
</v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <h1>지시어</h1>
<pre>
- v-bind : 태그의 속성을 vue인스턴스 내부의 데이터 변수에 연결
- v-if : 조건부 렌더링 <code>v-if, v-else-if, v-else</code>
- v-show : true가 되면 보이고 false가 되면 안보임
- v-for : 정해진 크기 만큼 반복
- Events :
- v-on :
</pre>
                <div class="" id="msg">
                {{ message }}
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <h1>v-bind</h1>
                <p>line</p>
<section v-bind:class="vueClass">이 요소는 핑크bg이다</section>
<p v-bind:style="{fontSize:size}">글자를 키워 볼까나</p>
<div v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray'}">
    조건부 배경색 칠하기
</div>
            </v-col>
            <v-col cols="12" md="4">
<div class="" v-if="text.includes('pizza')">
    <p>텍스트에 피자 단어가 포함 되어 있음</p>
    <img src="../../assets/img/img_pizza.svg" class="mrPizza">
</div>

<div class="" v-else-if="text.includes('burrito')">
    <p>텍스트에 부리또 단어가 포함 되어 있음</p>
</div>

<div class="" v-else>
    <p>텍스트에 피자 / 부리또 단어가 포함 되어 있지 않음</p>
</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
#msg{padding:10px; font-size:x-large; background-color:lightgreen;}
.pinkBG{background-color:lightpink;}
.mrPizza{width:50%;}
</style>

<script>
//html로 뷰를 학습할때는 const app = Vue.createApp
export default{
    data() {
        return{
message:"Hello world",
vueClass:"pinkBG",
size:'48px',
isImportant:true,
text:'I like burrito, pizza, ...',
manyFoods:['Burrito','Salad','Cake','Soup','Fish','Pizza','Rice'],
        };
    }
}
</script>