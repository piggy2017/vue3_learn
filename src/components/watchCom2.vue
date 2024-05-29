<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-28 14:49:28
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 11:26:43
 * @Description: 
-->
<template>
  <div>
    <p>使用watch监听reactive中的数据</p>
    <p>当前用户的姓名:{{ person.name }}</p>
    <p>当前用户的年龄:{{ person.age }}</p>
    <p>当前用户的薪资:{{ person.job.j1.salary }}K</p>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">修改薪资</button>
    <p>当前sum:{{ sum }}</p>
    <button @click="sum++">sum++</button>

    <pre>
        watchEffect:监听一个函数,函数中使用到的响应式数据发生变化时,会触发回调,首次也会执行一次.
        也就是回调中用到了哪个响应式属性,那就监视哪个响应式属性.
        
    </pre>
    <hr>
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect} from 'vue'
export default {
    setup(){
        let sum=ref(0);
        const person=reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        watchEffect(()=>{
            const sumVal=sum.value;
            const personVal=person.name;
            console.log('watch指定的回调触发了',sumVal,personVal);
        })

        /*
            情况三:监听reactive所定义的一个响应式数据的全部属性
            注意:1、此处无法正确的获取oldValue;
                2、强制开启了深度监视(deep配置无效).
        */
        // watch(person,(newValue,oldValue)=>{
        //     console.log('person发生了变化',newValue,oldValue);
        // },{deep:false})  // 此处的deep:false无效,因为强制开启了深度监视

        // 情况四:监视reactive所定义的响应式数据中的某些属性,能正确获取到oldValue
        // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        //     console.log('person.name或person.age发生了变化',newValue,oldValue);
        // })

        // 特殊情况:
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log('person下面的job发生了变化',newValue,oldValue);
        },{deep:true})  // 此处由于监视的是reactive所定义的对象的某个属性,而且该属性的值是一个对象,所以deep配置有效

        return{
            sum,
            person
        }
    }
}
</script>

<style>

</style>