<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 10:16:42
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 10:51:16
 * @Description: 
-->
<template>
  <div>
    <hr>
    <p>自定义hooks函数,需求:给window添加一个点击事件,输出点击的坐标</p>
    <p>当前鼠标点击的坐标x:{{ point.x }},y:{{ point.y }}</p>

    <pre>
        自定义hook---本质就是一个函数,把setup中使用到的数据、函数、生命周期等组合式API进行了封装.
        类似于vue2.x中的mixin,但是更加灵活,可以根据需求自定义.
    </pre>
    
  </div>
</template>

<script>
// import {reactive,onMounted,onBeforeUnmount} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    setup(){
        // 不使用自定义hook实现
        // const point=reactive({
        //     x:0,y:0
        // })
        // function clickPoint(event){
        //     point.x=event.pageX;
        //     point.y=event.pageY;
        //     console.log(point.x,point.y)
        // }
        // onMounted(()=>{
        //     window.addEventListener("click",clickPoint)
        // })
        // onBeforeUnmount(()=>{
        //     window.removeEventListener("click",clickPoint)
        // })

        let point=usePoint()

        return{
            point
        }
    }
}
</script>

<style>

</style>