<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-28 14:31:09
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-28 14:37:49
 * @Description: 
-->
<template>
  <div>
    <hr>
    <p>vue3的watch示例1</p>
    <p>当前的sum:{{ sum }}</p>
    <button @click="sum++">点击sum+1</button>
    <p>当前的msg:{{ msg }}</p>
    <button @click="msg+='!'">点击改变msg</button>
    <hr>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
export default {
    setup(){
        let sum=ref(0);
        let msg=ref("你好啊");

        // 情况1,watch监听1个ref类型的数据
        // watch(sum,(newVal,oldVal)=>{
        //     console.log('sum发生了变化',newVal,oldVal);
        // })

        // 情况2,watch监听多个ref类型的数据
        watch([sum,msg],(newVal,oldVal)=>{
            console.log('sum和msg发生了变化',newVal,oldVal); // newVal,oldVal都是一个数组
        },{ immediate : true })   // immediate:true表示立即执行一次


        return{
            sum,
            msg
        }
    }
}
</script>

<style>

</style>