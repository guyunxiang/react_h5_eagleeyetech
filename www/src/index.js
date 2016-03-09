//首页内容

var Banner = React.createClass({
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 5000,
      speed: 1000,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationClickable: true
    });
  },

  render() {
    return (
      <div className="container" id="banner">
        <div className="banner-swiper swiper-container swiper-container-horizontal">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="images/banner.jpg" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="images/banner_2.jpg" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="images/banner_3.jpg" alt=""/>
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination swiper-pagination-clickable"></div>
        </div>
      </div>
    )
  }
});

var Intro = React.createClass({
  render() {
    var styles = {
      date: {
        "border-top": "#0d873a solid 5px"
      },
      cost: {
        "border-top": "#4aa7f6 solid 5px"
      },
      phyd: {
        "border-top": "#f2c510 solid 5px"
      }
    };

    return (
      <div className="container" id="intro">
        <div className="row">
          <div className="col l4">
            <div className="center-align intro-module" style={styles.date}>
              <img src="images/index_logo_date.png" alt=""/>
              <h6>大数据风控</h6>
              <span>恒河沙数,挖掘价值。</span>
            </div>
          </div>
          <div className="col l4">
            <div className="center-align intro-module" style={styles.cost}>
              <img src="images/index_logo_cost.png" alt=""/>
              <h6>失信数据库</h6>
              <span>联防联控, <br/>云端数据专家。</span>
            </div>
          </div>
          <div className="col l4">
            <div className="center-align intro-module" style={styles.phyd}>
              <img src="images/index_logo_phyd.png" alt=""/>
              <h6>个人资信报告</h6>
              <span>行业定制,百条数据维度<br/>构建丰富精准资信报告。</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var FooterComponent = React.createClass({
  render() {
    return (
      <footer className="page-footer">
        <div className="container center-align">
          ©2014 - 2020 All Rights Reserved. 版权所有 仁穗互联网金融服务（深圳）有限公司 粤ICP备15095292号
        </div>
      </footer>
    )
  }
});

var Introduce = React.createClass({
  getInitialState() {
    return {
      index: '',
      historyList: [],
      introContent: [],
      styles: ['active', '', '']
    }
  },
  componentWillReceiveProps(nextProps) {
    var dataObj = nextProps.data,
      historyList = [],
      styles = this.state.styles;

    var index = dataObj.content[0].title;

    // 初始化左侧栏
    for (var d in dataObj.title) {
      historyList.push(
        <li className={"intro-name "+ styles[d]}
            onClick={this.handleClick.bind(this,d)}>
          {dataObj.title[d]}
        </li>
      )
    }

    // 初始化右侧内容主体
    var introContent = [];
    introContent.push(
      <h5 className="center-align">{dataObj.content[0].title}</h5>
    );
    var contentBody = dataObj.content[0].body;
    for (var c in contentBody) {
      if (contentBody[c]["p"]) {
        introContent.push(
          <p>
            <span className="left-2em"></span>
            {contentBody[c]["p"]}
          </p>
        )
      } else if (contentBody[c]["image"]) {
        introContent.push(
          <img src={contentBody[c]['image']} alt=""/>
        )
      } else if (contentBody[c]["h6"]) {
        introContent.push(
          <h6>{contentBody[c]["h6"]}</h6>
        )
      } else if (contentBody[c]['text']) {
        introContent.push(
          <p>{contentBody[c]['text']}</p>
        )
      }
    }

    this.setState({
      index: index,
      historyList: historyList,
      introContent: introContent
    });

  },
  handleClick(index) {

    var historyList = [],
      styles = this.state.styles,
      dataObj = this.props.data;

    // 修改左侧栏选中样式
    for (var s in styles) {
      styles[s] =
        index == s ? 'active' : '';
    }

    // 渲染左侧栏
    for (var d in dataObj.title) {
      historyList.push(
        <li className={"intro-name "+ styles[d]}
            onClick={this.handleClick.bind(this,d)}>
          {dataObj.title[d]}
        </li>
      )
    }

    // 渲染右侧内容
    var introContent = [];

    introContent.push(
      <h5 className="center-align">{dataObj.content[index].title}</h5>
    );

    var contentBody = dataObj.content[index].body;
    for (var c in contentBody) {
      if (contentBody[c]["p"]) {
        introContent.push(
          <p>
            <span className="left-2em"></span>
            {contentBody[c]["p"]}
          </p>
        )
      } else if (contentBody[c]["image"]) {
        introContent.push(
          <img src={contentBody[c]['image']} alt=""/>
        )
      } else if (contentBody[c]["h6"]) {
        introContent.push(
          <h6>{contentBody[c]["h6"]}</h6>
        )
      } else if (contentBody[c]["text"]) {
        introContent.push(
          <p>{contentBody[c]["text"]}</p>
        )
      }
    }

    this.setState({
      styles: styles,
      index: this.props.data.title[index],
      historyList: historyList,
      introContent: introContent
    });

  },
  render() {
    var historyList = this.state.historyList,
      introContent = this.state.introContent;
    return (
      <div style={{"background-color":"#f8f8f8"}}>
        <img className="banner2" src="images/banner2.jpg" alt=""/>
        <div className="container">
          <div className="history">
            <p> {this.props.title} {' > ' + this.state.index} </p>
          </div>
          <div className="row">
            <ul className="col l3 product-type">
              {historyList}
            </ul>
            <ul className="col l9 product-intro-title">
              <li className="product-intro">
                {introContent}
              </li>
            </ul>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }
});

// 首页
var IndexPage = React.createClass({
  render() {
    return (
      <div>
        <Banner />
        <Intro />
        <FooterComponent />
      </div>
    )
  }
});

// 产品介绍
var ProductPage = React.createClass({
  getInitialState(){
    return {
      data: null
    }
  },
  componentWillMount(){
    $.get('data/intro.json', function (data) {
      this.setState({
        data: data
      })
    }.bind(this))
  },
  render(){
    return (
      <div>
        <Introduce title="产品介绍" data={this.state.data}/>
      </div>
    )
  }
});

// 关于我们
var AboutPage = React.createClass({
  getInitialState(){
    return {
      data: null
    }
  },
  componentWillMount(){
    $.get('data/about.json', function (data) {
      this.setState({
        data: data
      })
    }.bind(this))
  },
  render(){
    return (
      <div>
        <Introduce title="关于我们" data={this.state.data}/>
      </div>
    )
  }
});

// 免费试用
var TryPage = React.createClass({
  render(){
    return (
      <div style={{"background-color":"#f8f8f8"}}>
        <img className="banner2" src="images/banner2.jpg" alt=""/>
        <div className="container">
          <div className="history">
            <p>{ '免费试用 > 申请鹰眼账户'} </p>
          </div>
          <div className="container">
            <div className="container try-form">
              <div className="input-field">
                <input id="company_name" type="text" className="validate"/>
                <label htmlFor="company_name">公司名称</label>
              </div>
              <div className="input-field">
                <input id="user_name" type="text" className="validate"/>
                <label htmlFor="user_name">姓名</label>
              </div>
              <div className="input-field">
                <input id="email" type="text" className="validate"/>
                <label htmlFor="email">企业邮箱</label>
              </div>
              <div className="input-field">
                <input id="phone" type="text" className="validate"/>
                <label htmlFor="phone">手机</label>
              </div>
              <p>
                <input type="checkbox" id="agreement"/>
                <label htmlFor="agreement">
                  <a href="view/agree.html" target="_blank">同意《用户注册协议》</a>
                </label>
              </p>
              <div className="input-fieldgoogle center-align">
                <button className="btn waves-effect" id="submit-try" type="submit" name="action">提交</button>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }
});

//-----------------------------------------------------------------------

// 导航栏&导航器
var NavComponent = React.createClass({
  getInitialState() {
    return {
      Components: <IndexPage />,
      styles: {
        index: {
          'color': '#2b98f3'
        },
        product: {
          'color': '#333333'
        },
        about: {
          'color': '#333333'
        },
        try: {
          'color': '#333333'
        }
      }
    }
  },
  // 配置路由
  router(index) {
    var Components = [];

    for (var a in this.state.styles) {
      this.state.styles[a] = index == a ? {'color': '#2b98f3'} : {'color': '#333333'};
    }

    switch (index) {
      case 'index':
        Components = <IndexPage />;
        break;
      case 'product':
        Components = <ProductPage />;
        break;
      case 'about':
        Components = <AboutPage />;
        break;
      case 'try':
        Components = <TryPage />;
        break;
      default:
        Components = <IndexPage />;
        break;
    }

    this.setState({
      Components: Components
    })
  },
  render() {
    var styles = this.state.styles;
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <a href="#" id="logo" className="brand-logo">
              <img src="images/logo.png"/>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a onClick={this.router.bind(this,'index')} style={styles.index}>首页</a>
              </li>
              <li>
                <a onClick={this.router.bind(this,'product')} style={styles.product}>产品介绍</a>
              </li>
              <li>
                <a onClick={this.router.bind(this,'about')} style={styles.about}>关于我们</a>
              </li>
              <li>
                <a href="https://portal.eagleeyetech.cn" target="_blank" id="login">企业登陆</a>
              </li>
              <li>
                <a onClick={this.router.bind(this,'try')} style={styles.try}>免费试用</a>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.Components}
      </div>
    )
  }
});

ReactDOM.render(
  <NavComponent />,
  document.getElementById('root')
);