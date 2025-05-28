<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <v-app-bar color="surface-variant" name="app-bar">
            <child v-slot="{print}">
                <v-btn class="mx-auto" @click="print('app-bar')">
                    Get data
                </v-btn>
            </child>
        </v-app-bar>

        <v-navigation-drawer
        color="surface-light" name="drawer" permanent
        >

        <div class="d-flex justify-center align-center h-100">
            <child v-slot="{print}">
                <v-btn variant="text" @click="print('drawer')">
                    Get data
                </v-btn>
            </child>
        </div>

        </v-navigation-drawer>


        <v-main class="d-flex align-center justify-center" height="890">
            <v-container>
                <v-sheet
                border="dashed md" color="suface-light" height="790" rounded="lg" width="100%"
                >
                <h1 class="my-5 text-secondary">Buttons</h1>
<p><v-btn>기본형</v-btn><v-btn prepend-icon="$vuetify" class="mx-3">btn</v-btn>
<v-btn prepend-icon="$vuetify" append-icon="$vuetify">btn</v-btn>
<v-btn prepend-icon="$vuetify" stacked class="mx-3">btn</v-btn>
</p>
                </v-sheet>
            </v-container>
        </v-main>

        <v-footer color="surface-light" name="footer" app>
                <v-btn 
                class="mx-auto"
                text="Get data"
                variant="text"
                 @click="print('footer')">
                </v-btn>
        </v-footer>
    </v-layout>
</template>

<script setup>/*얘는 vue3에서 컴포지션 API를 간결하게 사용할수 있도록 해주는 
 SFC문법 입니다
*/
import {useLayout} from 'vuetify'

const Child = {
    setup (props, ctx){//setup함수의 매개변수 입니다
        const {getLayoutItem} = useLayout()

        function print(key){//키 값을 받아서 아이템의 정보를 json 으로 경고창 출력
            alert(JSON.stringify(getLayoutItem(key), null, 2))
        }

        return () => ctx.slots.default({print})
    },
}
</script>