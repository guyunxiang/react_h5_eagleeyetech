var NavComponent = React.createClass({
  render() {
    console.log(this.props.haveClick);
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#" id="logo" className="brand-logo">
            <img src="images/logo.png"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a onClick={this.props.haveClick.bind(this,'index')}>首页</a></li>
            <li><a onClick={this.props.haveClick.bind(this,'product')}>产品介绍</a></li>
            <li><a onClick={this.props.haveClick.bind(this,'about')}>关于我们</a></li>
            <li><a href="http://portal.eagleeyetech.cn">企业登陆</a></li>
            <li><a onClick={this.props.haveClick.bind(this,'try')}>免费试用</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});