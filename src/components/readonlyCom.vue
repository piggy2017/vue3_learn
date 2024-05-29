<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 11:35:20
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 14:04:44
 * @Description: 
-->
<template>
  <div>
    <p>readonly和shallowReadonly的使用</p>
    <p>当前用户的姓名:{{ person.name }}</p>
    <p>当前用户的年龄:{{ person.age }}</p>
    <p>当前用户的薪资:{{ person.job.j1.salary }}K</p>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">修改薪资</button>
    <p>当前sum:{{ sum }}</p>
    <button @click="sum++">sum++</button>
    <pre>
        readonly:让一个响应式数据或响应式对象变成只读的(深只读);
        shallowReadonly:让一个响应式数据变成只读的(浅只读);
        应用场景:不希望数据被修改时.
    </pre>
    <hr>
  </div>
</template>

<script>
import { ref, reactive,readonly,shallowReadonly } from 'vue'
export default {
    setup(){
        let sum=ref(0);
        let person=reactive({   
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })
        // person=readonly(person);      // 属性不会被无效
        person=shallowReadonly(person);  // name和age无法被修改,job内的数据可以被修改
        sum=readonly(sum);              // 也不会被修改

        return{
            sum,
            person
        }
    }
}
</script>

<style>

</style>