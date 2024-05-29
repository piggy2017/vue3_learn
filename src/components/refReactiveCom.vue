<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-27 15:37:52
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-27 17:39:32
 * @Description: 
-->
<template>
  <div>
    <pre>
        ref函数:定义一个响应式数据,ref函数返回的是一个对象,对象中有一个value属性,这个value属性才是响应式数据.
        语法:let 变量名 = ref(初始值);创建一个包含响应式数据的引用对象,js中操作数据:变量名.value.模板读取数据:变量名
        备注:基本数据类型:响应式依然是靠 Object.defineProperty()的get和set实现的,
            对象类型的数据:内部借助了vue3中的一个新函数----reactive(Proxy)函数,实现了对象类型数据的响应式.
    </pre>
    <pre>
      reactive函数:定义一个 对象类型 的响应式数据(基本类型不要用它,要用ref函数);
      语法:let 代理对象 = reactive(源对象);接收一个对象或数组,返回一个代理对象(Proxy的实例对象),代理对象中的数据是响应式的.
      reactive定义的响应式数据是深层次的
      内部基于es6的Proxy实现,通过代理对象操作源对象内部数据. 
    </pre>
    <h3>我的名字:{{ name }},年龄:{{ age }}</h3>
    <h4>工作:{{ info.job }},地点:{{ info.address }}</h4>
    <h4>
      身高:{{ about.height }},体重:{{ about.weight }},测试深层数据:{{
        about.a.b
      }}
    </h4>
    <h4>第一个兴趣是:{{ hobby[0] }}</h4>
    <button @click="changeData">点我修改数据</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let info = ref({
      job: "web前端",
      address: "四川成都",
    });

    let about = reactive({
      height: 180,
      weight: 70,
      a: {
        b: 1,
      },
    });

    let hobby = reactive(["篮球", "足球", "乒乓球"]);

    function changeData() {
      name.value = "李四";
      age.value = 20;
      console.log(name, age); // RefImpl 对象

      info.value.job = "java后端";
      info.value.address = "四川绵阳";
      console.log(info, info.value); // info是RefImpl 对象; info.value是Proxy对象

      about.height = 190;
      about.weight = 80;
      about.a.b = 2;
      console.log(about, about.weight); // about是Proxy对象

      hobby[0] = "排球";
    }

    return {
      name,
      age,
      info,
      about,
      hobby,
      changeData,
    };
  },
};
</script>

<style>
</style>