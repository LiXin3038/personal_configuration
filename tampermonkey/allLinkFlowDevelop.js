// ==UserScript==
// @name         全连接流程环节
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.gtjadev.net/flowtool/flowDesign?flowId=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gtjadev.net
// @grant        none
// ==/UserScript==

let yjy = 0
let hjpz = 0
function setAntModalContent(){
    // 点击流程级意见域配置按钮
    var element = document.querySelector('.ant-modal-content');
    debugger
    if(element){
        // 修改样式
        if(yjy == 0) {
            element.style.width = '1200px'; // 改变宽度为1200
            yjy = 1
        } else {
            element.style.removeProperty("width");
            yjy = 0
        }
    }
}
function setHJdetailPanel(){
    // 点击 环节配置 按钮
    var element = document.querySelector('.antd-pro-pages-flow-design-detail-panel-styles-detailPanel');
    debugger
    if(element){
        // 修改样式
        if(hjpz == 0) {
            element.style.width = '1200px'; // 改变宽度为1200
            hjpz = 1
        } else {
            element.style.removeProperty("width");
            hjpz = 0
        }
    }
}

(function() {
    'use strict';

    // 你的代码在这里
    console.log('脚本已加载！');

    // 添加 流程级意见域配置 宽度调整 按钮到页面
    const button1 = document.createElement('button');
    button1.textContent = '流程级意见域配置 宽度调整';
    button1.style.position = 'fixed';
    button1.style.bottom = '800px';
    button1.style.right = '20px';
    button1.style.zIndex = '9999';
    button1.onclick = function() {
        // alert('按钮被点击了！');
        setAntModalContent();
    };
    // 添加 流程级意见域配置 宽度调整 按钮到页面
    const button2 = document.createElement('button');
    button2.textContent = '环节配置 宽度调整';
    button2.style.position = 'fixed';
    button2.style.bottom = '760px';
    button2.style.right = '20px';
    button2.style.zIndex = '9999';
    button2.onclick = function() {
        // alert('按钮被点击了！');
        setHJdetailPanel();
    };
    document.body.appendChild(button1);
    document.body.appendChild(button2);

    // 监听DOM变化（适用于动态加载内容的页面）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // 在这里处理DOM变化
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    });
})();
