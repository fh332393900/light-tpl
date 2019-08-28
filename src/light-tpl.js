function parse(content) {
    let arr = []
    let reg = /<%(?!=)([\s\S]*?)%>/g
    let match;
    let nowIndex = 0;
    while(match = reg.exec(content)){
        appendText(arr,content.substring(nowIndex,match.index))
        arr.push({
            type:'1',
            txt:match[1]
        })
        nowIndex = match.index + match[0].length;
    }
    appendText(arr, content.substr(nowIndex))
    return arr;
}
function appendText(list,content) {
    content = content.replace(/\r?\n/g, "\\n");
    list.push({txt:content})
}
function render(content,data) {
    data = data || {}
    let list = ['var tpl = "";']
    let codeArr = parse(content)
    for(let i = 0;i<codeArr.length;i++){
        let item = codeArr[i]
        if (!item.type) {
            let txt = 'tpl+="' + 
                      item.txt.replace(/<%=(.*?)%>/g, function (g0, g1) {
                          return '"+' + g1 + '+"';
                      }) + '"';
            list.push(txt)
        }else {
            list.push(item.txt)
        }
    }
    list.push('return tpl;')
    return new Function('data',list.join('\n'))(data)
}
module.exports = render