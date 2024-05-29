<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 11:25:13
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 11:35:47
 * @Description: 
-->
<template>
  <div>
    <p>shallowReactive和shallowRef的使用</p>
    <p>当前用户的姓名:{{ person.name }}</p>
    <p>当前用户的年龄:{{ person.age }}</p>
    <p>当前用户的薪资:{{ person.job.j1.salary }}K</p>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">修改薪资</button>
    <p>当前sum:{{ sum }}</p>
    <button @click="sum++">sum++</button>
    <pre>
        shallowReactive:创建一个浅层响应式代理对象,只代理对象的第一层属性,不会对对象的属性进行深层代理.
        shallowRef:创建一个ref对象,其value值指向另一个对象中的某个属性,但是只代理对象的第一层属性,不会对对象的属性进行深层代理.
    </pre>
    <hr>
  </div>
</template>

<script>
import { ref, reactive,shallowReactive,shallowRef } from 'vue'
export default {
    setup(){
        let sum=ref(0);
        const person=shallowReactive({   // shallowReactive ,job中的j1不是响应式数据
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        return{
            sum,
            person
        }
    }
}
</script>

<style>

</style>