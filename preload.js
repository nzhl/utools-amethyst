window.exports = {
  "h": { // 注意：键对应的是 plugin.json 中的 features.code
     mode: "none",  // 列表模式
     args: {
        // 进入插件时调用（可选）
        enter: (action, callbackSetList) => {
           window.utools.hideMainWindow()
           utools.simulateKeyboardTap('h', 'shift', 'alt')
           window.utools.outPlugin()
        },
     } 
  },
  "l": { // 注意：键对应的是 plugin.json 中的 features.code
    mode: "none",  // 列表模式
    args: {
       // 进入插件时调用（可选）
       enter: (action, callbackSetList) => {
          window.utools.hideMainWindow()
          utools.simulateKeyboardTap('l', 'shift', 'alt')
          window.utools.outPlugin()
       },
    } 
 }
}