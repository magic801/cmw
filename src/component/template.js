export const getFinalTpl = (tpl, data) => {
	const reg = /{{\s*(.*?)\s*}}/g
    let item = null
    let cursor = 0
    let list = []

    while ((item = reg.exec(tpl)) != null) {
        let tmp = tpl.slice(cursor, item.index)
        list.push(tmp)
        list.push(data[item[1]])
        cursor += item[0].length + item.index
    }
    return list.join('')
}