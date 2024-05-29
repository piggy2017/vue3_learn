<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-27 14:51:32
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 15:53:25
 * @Description: 
-->
<template>
  <div>
    <SetupCom msg="Welcome to Your Vue.js App" test="测试attrs" @hello="showAlert">
      <template v-slot:test1>
        <span>我是第一个插槽的内容</span>
      </template>
      <template v-slot:test2>
        <span>我是第二个插槽的内容</span>
      </template>
    </SetupCom>
    <RefCom ></RefCom>
    <RespondTheory></RespondTheory>
    <ComputedCom></ComputedCom>
    <WatchComOne></WatchComOne>
    <WatchComTwo></WatchComTwo>

    <hr>
    <p>点击切换显示、隐藏下面的组件</p>
    <button @click="showLifeCycle=!showLifeCycle">切换显示、隐藏</button>
    <LifeCycle v-if="showLifeCycle"></LifeCycle>

    <CustomHooks></CustomHooks>

    <ToRefCom></ToRefCom>
    <ShallowRefCom></ShallowRefCom>
    <ReadonlyCom></ReadonlyCom>
    <ToRawCom></ToRawCom>
    <CustomRefCom></CustomRefCom>
    
    <p>这儿是组组件:给后代组件传递的数据:名称:{{ car.name }},价格:{{ car.price }}</p>
    <button @click="car.name+='@'">点击更改car信息</button>
    <ChildCom></ChildCom>
    
    <JudgeApi></JudgeApi>

    <p>Teleport是能将我们的组件html结构移动到指定位置,to=body,就移动到body里面</p>
    <code>
      <teleport to="移动位置">
        <div v-if="isShow">
          <div class="doalog">
            <h3>我是弹窗</h3>
            <p>我是弹窗的内容</p>
            <button @click="isShow=false">关闭弹窗</button>
          </div>
        </div>
      </teleport>
    </code>
    <hr>
    <p>vue3中对全局API的调整:将全局API,即:Vue.xx调整到应用实例(app)上</p>
    <img class="api_class" src="./assets/api.jpg">
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SetupCom from './components/setupCom.vue'
import RefCom from './components/refReactiveCom.vue'
import RespondTheory from './components/respondTheory.vue'
import ComputedCom from './components/computedCom.vue'
import WatchComOne from './components/watchCom1.vue'
import WatchComTwo from './components/watchCom2.vue'
import LifeCycle from './components/lifeCycle.vue'
import CustomHooks from './components/customHooks.vue'
import ToRefCom from './components/toRefCom.vue'
import ShallowRefCom from './components/shallowRefCom.vue'
import ReadonlyCom from './components/readonlyCom.vue'
import ToRawCom from './components/toRawCom.vue'
import CustomRefCom from './components/customRefCom.vue'

import ChildCom from './components/provide/childCom.vue'

import JudgeApi from './components/judgeApi.vue'

import { ref,reactive,provide } from 'vue'
export default {
  name: 'App',
  components: {
    SetupCom,RefCom,RespondTheory,ComputedCom,WatchComOne,WatchComTwo,LifeCycle,CustomHooks,ToRefCom,ShallowRefCom,ReadonlyCom,ToRawCom,CustomRefCom,
    ChildCom,JudgeApi
  },
  setup(){
    let showLifeCycle=ref(true);
    let car=reactive({name:"宝马",price:'80w'})

    function showAlert(value) {
      alert(`你好啊,你触发了hello事件,我收到的参数是:${value}`)
    }

    provide('car',car)  // 给自己的后代组件传递的数据

    return{
      showLifeCycle,
      car,
      showAlert
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.api_class{
  width: 700px;
}
</style>
