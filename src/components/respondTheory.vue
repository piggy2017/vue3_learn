<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-27 16:59:05
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-28 10:10:25
 * @Description: 
-->
<template>
  <div>
    <hr>
    <h3>响应式原理:</h3>
    <pre>
        vue2中数据响应式原理: 
            对象类型:通过Object.defineProperty()对属性的读取、修改进行拦截.
            数组类型:通过重写更新数组的一系列方法来实现拦截.(对数组的变更进行了包裹).
            Object.defineProperty(data,'key',{
                get(){},
                set(){}
            })
        存在的问题:
            1、新增属性,删除属性,界面不会更新. 需要使用Vue.set()和Vue.delete()来解决.
            2、数组通过索引直接修改数据,界面不会更新. this.$set(data,index,'value')解决.
    </pre>

    <pre>
        vue3中的响应式原理:
            通过Proxy(代理):拦截对象中任意属性的变化,包含:属性之的读写、添加、删除等.
            通过Reflect(反射):对被代理对象的属性进行操作.
    </pre>
    <h3>我的名字:{{ person.name }},年龄:{{ person.age }}</h3>
    <h3 v-show="person.addr">我的地址是:{{ person.addr }}</h3>
    <h4>第一个兴趣是:{{ person.hobby[0] }}</h4>
    <button @click="changeData">点我修改数据,并且添加和删除响应式属性</button>
    <hr>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const person=reactive({
      name:"张三",
      age:18,
      hobby:["篮球","足球","乒乓球"]
    })

    function changeData() {
      person.name='李四';
      person.age=20;
      person.addr='北京市昌平区';
      person.hobby[0]='羽毛球';
    }

    return {
      person,
      changeData,
    };
  },
};
</script>

<style>

</style>