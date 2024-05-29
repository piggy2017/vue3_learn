<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-28 10:33:24
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-28 10:41:01
 * @Description: 
-->
<template>
  <div>
    姓:<input type="text" v-model="person.firstName" />
    <br />
    名:<input type="text" v-model="person.lastName" />
    <br />
    <span>全名:{{ fullName }}</span>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    // vue3.x中的computed(不考虑修改的情况)
    // let fullName = computed(() => {
    //   return person.firstName + person.lastName;
    // });

    // vue3.x中的computed(考虑修改的情况)
    let fullName = computed({
      get() {
        return person.firstName + person.lastName;
      },
      set(value) {
        const names = value.split(" ");
        person.firstName = names[0];
        person.lastName = names[1];
      },
    });
    return {
      person,
      fullName,
    };
  },
  // computed:{   // vue2.x中的computed
  //     fullName(){
  //         return this.person.firstName+this.person.lastName
  //     }
  // }
};
</script>

<style>
</style>