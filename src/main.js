const CMW = function(opts) {
    this.$el = null
    this.$template = null
    this.$data = null

    this.init(opts)
    this.render()
}

CMW.prototype.init = function(opts) {
    if (opts.el) {
        this.$el = document.querySelector(opts.el)
    }
    if (opts.template) {
        this.$template = document.querySelector(opts.template).innerHTML
    }
    if (opts.data) {
        this.$data = opts.data
    }
}

const getFinalTpl = (tpl, data) => {
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

CMW.prototype.render = function() {
    const tpl = getFinalTpl(this.$template, this.$data)
    this.$el.innerHTML = tpl
}

export default CMW