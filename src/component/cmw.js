import {getFinalTpl} from './template.js'

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

CMW.prototype.render = function() {
    const tpl = getFinalTpl(this.$template, this.$data)
    this.$el.innerHTML = tpl
}

export default CMW