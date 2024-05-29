<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 15:13:48
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 15:43:32
 * @Description: 
-->
<template>
  <div>
    <p>一些判断的api</p>
    <hr>
  </div>
</template>

<script>
import { ref, reactive, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
    setup(){
        let sum=ref(0);
        let car=reactive({name:"奔驰",price:1000000})
        let car2=readonly(car);

        console.log(isRef(sum));       // true
        console.log(isReactive(car));  // true
        console.log(isReadonly(car2)); // true
        console.log(isProxy(car2));    // true

        return{
            sum,car,car2
        }
    }
}
</script>

<style>

</style>