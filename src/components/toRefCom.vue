<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 10:48:57
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 11:04:03
 * @Description: 
-->
<template>
  <div>
    <hr>
    <p>toRef和toRefs</p>
    <p>{{ person }}</p>
    <p>当前用户的姓名:{{ name }}</p>
    <p>当前用户的年龄:{{ age }}</p>
    <p>当前用户的薪资:{{ job.j1.salary }}K</p>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">修改薪资</button>

    <pre>
        toRef:创建一个ref对象,其value值指向另一个对象中的某个属性,
        语法: const xx=toRef(Object,'key');
        应用场景:要将响应式对象中的某个属性单独提供给模板进行使用时.
        toRefs和toRef功能一致,但可以批量创建多个ref对象.
    </pre>
    <hr>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'  // toRef,
export default {
    setup(){
        let person=reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        // return {person}  // 常规写法

        // toRef:将一个响应式对象的属性转换为一个ref对象
        // return{
        //     person,  // 用于对比数据是否被更改
        //     name:toRef(person,'name'),
        //     age:toRef(person,'age'),
        //     salary:toRef(person.job.j1,'salary'),
        // }

        // toRefs的使用
        return{
            person,
            ...toRefs(person)
        }

    }
}
</script>

<style>

</style>