<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 14:03:23
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 14:42:30
 * @Description: 
-->
<template>
  <div>
    <p>toRaw和markRaw的使用</p>
    <p>当前用户的姓名:{{ person.name }}</p>
    <p>当前用户的年龄:{{ person.age }}</p>
    <p>当前用户的薪资:{{ person.job.j1.salary }}K</p>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">修改薪资</button>
    <button @click="showRawPerson">toRaw</button>
    <button @click="addCar">给person添加car</button>
    <div>
      <p v-show="person.car">汽车的信息:{{ person.car }}</p>
      <button @click="person.car.name += '#'">修改car的name</button>
      <button @click="person.car.price++">修改car的price</button>
    </div> 
    <pre>
      toRaw:
        作用:讲一个reactive生产的响应式对象转为普通对象;
        使用场景:用于读取响应式对象对应的普通函数,对这个普通函数的所有操作,不会引起页面的更新.

      markRaw:
        作用:标记一个对象,使其永远不会再成为响应式对象.
        使用场景:1、某些值不应被设置为响应式的,例如复杂的第三方类库等;
                2、当渲染具有不可变数据源的大列表时,跳过响应式可以提高性能.
    </pre>
    <hr>

  </div>
</template>

<script>
import { reactive, toRaw, markRaw } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    const showRawPerson=()=> {
      const p = toRaw(person);
      p.age++;
      console.log(p); // p.age在加,但是person.age没有改变
    }

    const addCar=()=> {
      let car = { name: "奔驰", price: 40 };
      person.car = car;   // 给响应式对象添加新的属性,新添加的属性也是响应式的

      // person.car=markRaw(car);  // 给响应式对象添加新的属性,新添加的属性不是响应式的
    }

    return {
      person,
      showRawPerson,
      addCar,
    };
  },
};
</script>

<style>
</style>