// 1.引用express
const express = require('express');
// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应
    // response.send('Hello EXPRESS');
    response.send("HELLO AJAX")
});
app.post('/server',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应
    // response.send('Hello EXPRESS');
    response.send("HELLO AJAX POST")
});

// jQuery 服务
app.all('/jquery-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');


    const data = {name:'duye'}
    // 设置响应
    // response.send('Hello EXPRESS');
    response.send(JSON.stringify(data))
});
// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已启动，8000 端口监听中")
    
})