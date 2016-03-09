"use strict";

var NavComponent = React.createClass({ displayName: "NavComponent",
  render: function render() {
    console.log(this.props.haveClick);
    return React.createElement("nav", null, React.createElement("div", { className: "nav-wrapper container" }, React.createElement("a", { href: "#", id: "logo", className: "brand-logo" }, React.createElement("img", { src: "images/logo.png" })), React.createElement("ul", { id: "nav-mobile", className: "right hide-on-med-and-down" }, React.createElement("li", null, React.createElement("a", { onClick: this.props.haveClick.bind(this, 'index') }, "首页")), React.createElement("li", null, React.createElement("a", { onClick: this.props.haveClick.bind(this, 'product') }, "产品介绍")), React.createElement("li", null, React.createElement("a", { onClick: this.props.haveClick.bind(this, 'about') }, "关于我们")), React.createElement("li", null, React.createElement("a", { href: "http://portal.eagleeyetech.cn" }, "企业登陆")), React.createElement("li", null, React.createElement("a", { onClick: this.props.haveClick.bind(this, 'try') }, "免费试用")))));
  }
});