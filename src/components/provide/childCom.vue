<template>
  <div>
    <p>这儿是子组件,获取到的祖组件通过provide传递的数据:价格:{{ childCar.name }},价格:{{ childCar.price }}</p>
    <sonCom></sonCom>
  </div>
</template>

<script>
import { inject } from 'vue';
import sonCom from './sonCom.vue';
export default {
    components:{
        sonCom
    },
    setup(){
        let childCar=inject('car');
        return{childCar}
    }
}
</script>

<style>

</style>