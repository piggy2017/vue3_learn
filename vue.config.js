/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-27 14:51:32
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-29 10:59:23
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,  // 关闭eslint的语法检查
  transpileDependencies: true
})
