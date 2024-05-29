<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-28 16:06:42
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-28 16:18:53
 * @Description: 
-->
<template>
  <div>
    <pre>
        vue3中的生命周期 
        beforeDestroy更名为beforeUnmount
        destroyed() 更名为unmounted

        在setup中的组合式生命周期函数
        setup===beforeCreate
        setup===created
        onBeforeMount===beforeMount
        onMounted===mounted
        onBeforeUpdate===beforeUpdate
        onUpdated===updated
        onBeforeUnmount===beforeUnmount
        onUnmounted===unmounted
    </pre>
    <p>vue3中的生命周期</p>
    <p>当前的count:{{ count }}</p>
    <button @click="count++">点击count+1</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
    setup(){
        let count=ref(0);

        onBeforeMount(()=>{
            console.log('setup-------onBeforeMount-----');
        });
        onMounted(()=>{
            console.log('setup-------onMounted-----');
        });
        onBeforeUpdate(()=>{
            console.log('setup-------onBeforeUpdate-----');
        });
        onUpdated(()=>{
            console.log('setup-------onUpdated-----');
        });
        onBeforeUnmount(()=>{
            console.log('setup-------onBeforeUnmount-----');
        });
        onUnmounted(()=>{
            console.log('setup-------onUnmounted-----');
        });

        return{
            count
        }
    },

    // 生命周期函数,单独配置写法

    // #region
    // beforeCreate() {
    //     console.log('-------beforeCreate-----');
    // },
    // created() {
    //     console.log('-------created-----');
    // },
    // beforeMount() {
    //     console.log('-------beforeMount-----');
    // },
    // mounted() {
    //     console.log('-------mounted-----');
    // },
    // beforeUpdate() {
    //     console.log('-------beforeUpdate-----');
    // },
    // updated() {
    //     console.log('-------updated-----');
    // },
    // beforeUnmount() {
    //     console.log('-------beforeUnmount-----');
    // },
    // unmounted() {
    //     console.log('-------unmounted-----');
    // }
    // #endregion
}
</script>

<style>

</style>