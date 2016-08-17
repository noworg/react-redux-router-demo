import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, Redirect, hashHistory } from 'react-router'

class About extends Component {
    render() {
        return (
            <div>
                about
            </div>
        )
    }
}

const Message = React.createClass({
    render() {
        return <h3>Message</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                <ul>
                    <li><Link to="/messages/1123">message</Link></li>
                </ul>
                {/* 渲染这个 child 路由组件 */}
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})


class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* 把 <a> 变成 <Link> */}
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                {/*
                 接着用 `this.props.children` 替换 `<Child>`
                 router 会帮我们找到这个 children
                 */}
                {this.props.children}
            </div>
        )
    }
})

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="inbox" component={Inbox}>
                {/* 添加一个路由，嵌套进我们想要嵌套的 UI 里 */}
                <Route path="/messages/:id" component={Message}/>
                <Redirect from="messages/:id" to="/messages/:id"/>
            </Route>
        </Route>
    </Router>
), document.getElementById("content"))