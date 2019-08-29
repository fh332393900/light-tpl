# light-tpl
[![NPM version](https://img.shields.io/npm/v/light-tpl)](https://www.npmjs.com/package/light-tpl)
[![License MIT](https://img.shields.io/npm/l/light-tpl)](https://github.com/fh332393900/light-tpl/blob/master/LICENSE)
[![NPM size](https://img.shields.io/bundlephobia/min/light-tpl?color=orange)](https://www.npmjs.com/package/light-tpl)
[![NPM downloads](https://img.shields.io/npm/dw/light-tpl)](https://www.npmjs.com/package/light-tpl)


## How to use
You can use npm

    npm i light-tpl
    
Output the template as a function return value
```javascript
    let tpl = require('light-tpl')
    export default function myTest() {
        let data = [
            {name:"fenghang",phone:"17713605274",age:21},
            {name:"222",phone:"110",age:50}]
        let template = `
            <ul>
                <% for(var i=0; i < data.length; i++){
                    var item = data[i];
                    if(item.age < 30){%>
                        <li>我的名字是<%=item.name%>，我的年龄是<%=item.age%>,我的手机号：<%=item.phone%></li>
                    <%}else{%>
                        <li>my name is <%=item.name%>,my age is a sercet.</li>
                    <%}%>
                <% } %>
            </ul>`
        return tpl(template,data)
    }
```
result:
```html

        <ul>  
            <li>我的名字是fenghang，我的年龄是21,我的手机号：17713605274</li>
            <li>my name is 222,my age is a sercet.</li>
        </ul>
```
Rendered HTML:
* 我的名字是fenghang，我的年龄是21,我的手机号：17713605274
* my name is 222,my age is a sercet.
