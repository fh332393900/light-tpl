let tpl = require('./../src/light-tpl.js')
const content = `
<ul>
    <% for(var i=0; i<data.length; i++){
        var item = data[i];
        if(item.age < 30){%>
            <li>你好我叫<%=item.name%>，我的年龄是<%=item.age%></li><br/>
            <li>我的电话号码：<%=item.phone%>，我的邮箱：<%=item.email%></li>
        <%}else{%>
            <li>my name is <%=item.name%>,my age is a sercet.</li>
        <%}%>
    <% } %>
</ul>`;

const data = [{ name: 'fenghang', age: 21 ,email:"332393900@qq.com",phone:"17713605274"}, { name: '冯航', age: 21 }, { name: 'lucy', age: 55 }];

console.log(tpl(content, data));