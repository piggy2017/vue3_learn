<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 14:59:26
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 15:11:20
 * @Description: 
-->
<template>
  <div>
    <p>这儿是孙组件,获取到的祖组件通过provide传递的数据:价格:{{ sonCar.name }},价格:{{ sonCar.price }}</p>

    <pre>
        通过provide和inject实现跨组件之间的通信:
        父组件:
        <code>
            setup(){
                let car = reactive({name:"宝马",price:'80w'});
                provide('car',car);
            }
        </code>
        后代组件中:
        <code>
            setup(){
                const car = inject('car');
                return{ car };
            }
        </code>
    </pre>
    <hr>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
    setup(){
        let sonCar=inject('car')
        return{sonCar}
    }
}
</script>

<style>

</style>
