<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 14:42:24
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 14:53:51
 * @Description: 
-->
<template>
  <div>
    <p>customRef的使用,显示一个输入框输入了内容,在页面中延迟1秒显示</p>
    <input type="text" v-model="keyWord">
    <p>当前的值为:{{ keyWord }}</p>
    <hr>
  </div>
</template>

<script>
import { customRef } from 'vue'
export default {
    setup(){
        const myRef=(value)=>{
            let timer=null;
            return customRef((track,trigger)=>{
                return{
                    get(){
                        console.log(`有人从myRef容器中读取数据了,我把数据${value}给了他`);
                        track();   // 通知vue追踪value的变化
                        return value;
                    },
                    set(newValue){
                        console.log(`有人把myRef这个容器的数据修改为了:${newValue}`)
                        
                        clearTimeout(timer);
                        timer=setTimeout(()=>{
                            trigger()  // 通知vue去重新解析模板
                            value=newValue;
                        },1000)
                    }
                }
            })
        }
        let keyWord=myRef("hello");
        
        return{
            keyWord
        }
    }
}
</script>

<style>

</style>