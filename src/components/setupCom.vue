<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-27 15:10:03
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-28 10:17:19
 * @Description: 
-->
<template>
    <div>
        <h3>1、setup:vue3.0中一个新的配置项,值是一个函数,是所有 Composition API(组合API)表演的舞台</h3>
        <h3>2、组件中所用到的:数据,方法等,都要配置在 steup 中.</h3>
        <h3>3、steup函数的两种返回值:</h3>
        <h4>一:若返回一个对象,则对象中的属性,方法,在模板中可以直接使用.(重点关注)</h4>
        <h4>二:若返回一个渲染函数,则可以自定义渲染内容.(了解)</h4>
        <h3>注意点:1、尽量不要和vue2.x配置混用vue2中配置的(data、methods\computed...)可以访问到steup中配置的属性、方法
            但在steup中不能访问到vue2.x中配置的属性、方法,如果有重名,steup优先.
            2.steup不能是一个async函数,因为返回值不再是return的对象,而是promise对象.模板看不到return的对象. 
        </h3>
        <h3>setup的执行时机:在beforeCreate之前执行一次,this是undefined.</h3>
        <h3>setup的参数:
            props:值为对象,包含:组件外部传递过来,且在组件内部声明接收了的属性.
            context:上下文对象,包含:attrs,slots,emit等属性.
                attrs:值为对象,包含了组件外部传递过来,但没有在props中声明接收的属性.
                slots:插槽对象,包含了插槽名称和插槽内容.相当于vue2.x中的this.$slots
                emit:触发自定义事件的方法.相当于vue2.x中的this.$emit
        </h3>
        <div>父组件传递的参数msg:{{ msg }}</div>
        <button @click="testFunc">测试触发父组件的hello事件</button>
        <slot name="test1"></slot>
        <slot name="test2"></slot>
        <hr>
    </div>
</template>

<script>
export default {
    props:{
        msg:String
    },
    emits:['hello'],
    beforeCreate() {
        console.log('-------beforeCreate-----',this);
    },
    setup(props,context) {
        // console.log('--------setup-------',this); // undefined
        console.log('--------setup-------props',props);    // {msg: "Welcome to Your Vue.js App"}

        console.log('--------setup-------context.attrs',context.attrs) // {test: '测试attrs'}

        console.log('--------setup-------context.slots',context.slots) // 插槽

        function testFunc(){
            context.emit('hello','我是子组件传递的数据');
        }
        return{
            testFunc
        }
    },
}
</script>

<style>

</style>