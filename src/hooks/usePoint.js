/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-29 10:25:09
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 10:52:43
 * @Description: 
 */
import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function (){
    const point = reactive({
        x:0,
        y:0
    })

    function getPoint(event){
        point.x=event.pageX;
        point.y=event.pageY;
        // console.log(event.pageX,event.pageY)
    }

    onMounted(()=>{
        window.addEventListener("click",getPoint)
    })

    onBeforeUnmount(()=>{
        window.removeEventListener("click",getPoint)
    })

    return point
}