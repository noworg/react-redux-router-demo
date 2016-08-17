webpackJsonp([0],{

/***/ 0:
/*!**************************!*\
  !*** ./js/Menu/Menu.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 1);
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 58);
	
	var _store = __webpack_require__(/*! ./store/store.jsx */ 198);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Menu = __webpack_require__(/*! ./container/Menu.jsx */ 207);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _App = __webpack_require__(/*! ./container/App.jsx */ 270);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 209);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 201);
	
	var _home = __webpack_require__(/*! ./component/home.jsx */ 273);
	
	var _home2 = _interopRequireDefault(_home);
	
	__webpack_require__(/*! ../../css/stylesheets/ie.css */ 275);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//require( '../../css/sass/ie.scss');
	
	
	//var $ = window.$ = window.jQuery = require('jquery'),
	//    bootstrap = require('bootstrap')
	
	//const middleware = routerMiddleware(hashHistory)
	var store = (0, _store2.default)();
	
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store);
	
	var ALL = function (_Component) {
	    _inherits(ALL, _Component);
	
	    function ALL() {
	        _classCallCheck(this, ALL);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ALL).apply(this, arguments));
	    }
	
	    _createClass(ALL, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);
	
	    return ALL;
	}(_react.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	        _reactRouter.Router,
	        { history: history },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/', component: _Menu2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _home2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _App2.default })
	        )
	    )
	), document.getElementById("content"));

/***/ },

/***/ 198:
/*!*********************************!*\
  !*** ./js/Menu/store/store.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configStore;
	
	var _redux = __webpack_require__(/*! redux */ 42);
	
	var _reducer = __webpack_require__(/*! ../reducer/reducer.jsx */ 199);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 206);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configStore(preloadedState) {
	    var store = (0, _redux.createStore)(_reducer2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	    return store;
	}

/***/ },

/***/ 199:
/*!*************************************!*\
  !*** ./js/Menu/reducer/reducer.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 42);
	
	var _action = __webpack_require__(/*! ../action/action.jsx */ 200);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 201);
	
	function getMenuData() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _action.ROW_DATA:
	            return action.rows;
	        default:
	            return state;
	    }
	} /**
	   * Created by xiangfahai on 16/7/27.
	   */
	
	function getInitData() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _action.REQUEST_SUCCESS:
	            return action.rows;
	        case _action.REQUEST_FAIL:
	            return action.rows;
	        case _action.SEARCH_REQUEST:
	            return state;
	        default:
	            return state;
	    }
	}
	
	function toggleActive() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _action.CHANGE_TOGGLE:
	            return action.active;
	        //case REQUEST_FAIL:
	        //    return action.rows;
	        default:
	            return state;
	    }
	}
	
	function toggleLeft() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _action.TOGGLE_LEFT:
	            return action.status;
	        default:
	            return state;
	    }
	}
	
	var rootReducer = (0, _redux.combineReducers)({
	    rows: getMenuData,
	    active: toggleActive,
	    table: getInitData,
	    routing: _reactRouterRedux.routerReducer,
	    left: toggleLeft
	});
	
	exports.default = rootReducer;

/***/ },

/***/ 200:
/*!***********************************!*\
  !*** ./js/Menu/action/action.jsx ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.menuData = menuData;
	exports.toggle = toggle;
	exports.toggleLeft = toggleLeft;
	exports.fetchData = fetchData;
	exports.send = send;
	exports.search = search;
	//menu
	var ROW_DATA = exports.ROW_DATA = 'ROW_DATA';
	var CHANGE_TOGGLE = exports.CHANGE_TOGGLE = 'CHANGE_TOGGLE';
	
	//table
	var REQUEST_SEND = exports.REQUEST_SEND = 'REQUEST_SEND';
	var REQUEST_SUCCESS = exports.REQUEST_SUCCESS = 'REQUEST_SUCCESS';
	var REQUEST_FAIL = exports.REQUEST_FAIL = 'REQUEST_FAIL';
	
	var SEARCH_REQUEST = exports.SEARCH_REQUEST = 'SEARCH_REQUEST';
	var TOGGLE_LEFT = exports.TOGGLE_LEFT = 'TOGGLE_LEFT';
	//menu
	function menuData() {
	
	    return {
	        type: ROW_DATA,
	        rows: [{ id: 1, title: '首页', url: '/home' }, { id: 2, title: '统计', url: '/about' }]
	    };
	}
	
	function toggle(index) {
	    return {
	        type: CHANGE_TOGGLE,
	        active: index
	    };
	}
	
	function toggleLeft(status) {
	    return {
	        type: TOGGLE_LEFT,
	        status: status
	    };
	}
	//table
	
	function loadData() {
	    var request = new Request("./js/App/aa.json", {
	        method: "GET",
	        mode: "no-cors"
	    });
	    return fetch(request);
	}
	function successLoad(rows) {
	    return {
	        type: REQUEST_SUCCESS,
	        rows: rows
	    };
	}
	
	function failLoad(rows) {
	    return {
	        type: REQUEST_FAIL,
	        rows: rows
	    };
	}
	
	function fetchData() {
	    return function (dispatch) {
	        return loadData().then(function (res) {
	            if (res.ok) {
	                res.json().then(function (data) {
	                    var row = {
	                        rows: data.rows,
	                        state: true,
	                        page: data.page
	                    };
	                    return dispatch(successLoad(row));
	                });
	            } else {
	                alert("获取失败");
	                return dispatch(failLoad([]));
	            }
	        }, function (e) {
	            console.log("error", e);
	        });
	    };
	}
	
	function send() {
	    return {
	        type: REQUEST_SEND,
	        rows: []
	    };
	}
	
	function search(text) {
	    alert(text);
	    return {
	        type: SEARCH_REQUEST,
	        rows: []
	    };
	}

/***/ },

/***/ 207:
/*!************************************!*\
  !*** ./js/Menu/container/Menu.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 1);
	
	var _menu = __webpack_require__(/*! ../component/menu.jsx */ 208);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _action = __webpack_require__(/*! ../action/action.jsx */ 200);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	    _inherits(App, _Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dispatch = this.props.dispatch;
	
	            dispatch((0, _action.menuData)());
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(index) {
	            var dispatch = this.props.dispatch;
	
	            dispatch((0, _action.toggle)(index));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_menu2.default, _extends({}, this.props, { handleClick: this.handleClick.bind(this) })),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    this.props.children
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react.Component);
	
	function storeFormatter(state) {
	    var rows = state.rows;
	    var active = state.active;
	    var routing = state.routing;
	
	
	    var ret = {
	        rows: rows.length ? rows : [],
	        active: active || 0,
	        routing: routing
	    };
	    return ret;
	}
	
	exports.default = (0, _reactRedux.connect)(storeFormatter)(App);

/***/ },

/***/ 208:
/*!************************************!*\
  !*** ./js/Menu/component/menu.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 209);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Menu = (0, _reactRouter.withRouter)(_react2.default.createClass({
	    displayName: 'Menu',
	    toggle: function toggle(i) {
	        var _props = this.props;
	        var rows = _props.rows;
	        var handleClick = _props.handleClick;
	
	        handleClick(i);
	        return _reactRouter.hashHistory.push(rows[i].url);
	    },
	    render: function render() {
	        var _props2 = this.props;
	        var rows = _props2.rows;
	        var active = _props2.active;
	        var routing = _props2.routing;
	
	        var colRow = [];
	        for (var i = 0; i < rows.length; i++) {
	            var className = '';
	            if (routing.locationBeforeTransitions.pathname == '/' && i == 0) {
	                className = 'active';
	                colRow.push(_react2.default.createElement(
	                    'li',
	                    { key: rows[i].id },
	                    _react2.default.createElement(
	                        'a',
	                        { className: className,
	                            onClick: this.toggle.bind(this, i) },
	                        rows[i].title
	                    )
	                ));
	                //return
	            } else {
	                if (rows[i].url == routing.locationBeforeTransitions.pathname) {
	                    className = 'active';
	                }
	                colRow.push(_react2.default.createElement(
	                    'li',
	                    { key: rows[i].id },
	                    _react2.default.createElement(
	                        'a',
	                        { className: className,
	                            onClick: this.toggle.bind(this, i) },
	                        rows[i].title
	                    )
	                ));
	            }
	        }
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'nav',
	                { className: 'navbar navbar-default' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container-fluid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse',
	                                'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'sr-only' },
	                                'Toggle navigation'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: 'home', className: 'navbar-brand' },
	                            'Brand'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            colRow
	                        )
	                    )
	                )
	            )
	        );
	    }
	}));
	
	exports.default = Menu;

/***/ },

/***/ 270:
/*!***********************************!*\
  !*** ./js/Menu/container/App.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 1);
	
	var _table = __webpack_require__(/*! ../component/table.jsx */ 271);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _head = __webpack_require__(/*! ../component/head.jsx */ 272);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _action = __webpack_require__(/*! ../action/action.jsx */ 200);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	    _inherits(App, _Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dispatch = this.props.dispatch;
	
	            dispatch((0, _action.fetchData)());
	        }
	    }, {
	        key: 'searchSubmit',
	        value: function searchSubmit(text) {
	            var dispatch = this.props.dispatch;
	            //dispatch
	            //alert("ss"+text)
	
	            dispatch((0, _action.search)(text));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var rows = this.props.rows;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'tableContainer' },
	                _react2.default.createElement(_head2.default, { searchSubmit: this.searchSubmit.bind(this) }),
	                _react2.default.createElement(_table2.default, { rows: rows })
	            );
	        }
	    }]);
	
	    return App;
	}(_react.Component);
	
	function storeFormatter(state) {
	    var table = state.table;
	
	    table = table || {
	        rows: [],
	        page: {},
	        state: true
	    };
	
	    var ret = {
	        rows: table.rows || [],
	        page: table.page || {},
	        state: table.state || true
	    };
	    return ret;
	}
	
	exports.default = (0, _reactRedux.connect)(storeFormatter)(App);

/***/ },

/***/ 271:
/*!*************************************!*\
  !*** ./js/Menu/component/table.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Table = function (_Component) {
	    _inherits(Table, _Component);
	
	    function Table() {
	        _classCallCheck(this, Table);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	    }
	
	    _createClass(Table, [{
	        key: "render",
	        value: function render() {
	            var rows = this.props.rows;
	
	            var tableRow = [];
	            for (var i = 0; i < rows.length; i++) {
	                tableRow.push(_react2.default.createElement(
	                    "tr",
	                    { key: rows[i].id },
	                    _react2.default.createElement(
	                        "td",
	                        null,
	                        rows[i].id
	                    ),
	                    _react2.default.createElement(
	                        "td",
	                        null,
	                        rows[i].name
	                    ),
	                    _react2.default.createElement(
	                        "td",
	                        null,
	                        rows[i].birth
	                    )
	                ));
	            }
	            return _react2.default.createElement(
	                "table",
	                { className: "table table-striped total-table" },
	                _react2.default.createElement(
	                    "thead",
	                    null,
	                    _react2.default.createElement(
	                        "tr",
	                        null,
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "id"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "name"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "birth"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "tbody",
	                    null,
	                    tableRow
	                )
	            );
	        }
	    }]);
	
	    return Table;
	}(_react.Component);
	
	exports.default = Table;

/***/ },

/***/ 272:
/*!************************************!*\
  !*** ./js/Menu/component/head.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Head = function (_Component) {
	    _inherits(Head, _Component);
	
	    function Head() {
	        _classCallCheck(this, Head);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Head).apply(this, arguments));
	    }
	
	    _createClass(Head, [{
	        key: "handSubmit",
	        value: function handSubmit() {
	            //alert(this.refs.myTextInput.value);
	            var searchSubmit = this.props.searchSubmit;
	
	            searchSubmit(this.refs.myTextInput.value);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "form",
	                { className: "form-inline" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "form-group" },
	                    _react2.default.createElement(
	                        "label",
	                        { htmlFor: "exampleInputName2" },
	                        "Name"
	                    ),
	                    _react2.default.createElement("input", { type: "text", className: "form-control", style: { marginLeft: '16px' }, ref: "myTextInput", id: "exampleInputName2", placeholder: "kssss" })
	                ),
	                _react2.default.createElement(
	                    "button",
	                    { type: "button", onClick: this.handSubmit.bind(this), className: "btn btn-default", style: { marginLeft: '16px' } },
	                    "查询"
	                )
	            );
	        }
	    }]);
	
	    return Head;
	}(_react.Component);
	
	exports.default = Head;

/***/ },

/***/ 273:
/*!************************************!*\
  !*** ./js/Menu/component/home.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(/*! classnames */ 274);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _action = __webpack_require__(/*! ../action/action.jsx */ 200);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_Component) {
	    _inherits(Home, _Component);
	
	    function Home() {
	        _classCallCheck(this, Home);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	    }
	
	    _createClass(Home, [{
	        key: 'bindClick',
	        value: function bindClick(status) {
	            var dispatch = this.props.dispatch;
	
	            dispatch((0, _action.toggleLeft)(status));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var left = this.props.left;
	
	            var btnClass = (0, _classnames2.default)({
	                'homeContainer': true,
	                'hideLeft': left
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'funBar' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'leftShow', onClick: this.bindClick.bind(this, false) },
	                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-menu-hamburger' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: btnClass },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'top' },
	                        _react2.default.createElement(
	                            'a',
	                            { onClick: this.bindClick.bind(this, true), style: { lineHeight: '48px', fontSize: 24 } },
	                            _react2.default.createElement('span', { className: 'glyphicon glyphicon-menu-left' })
	                        )
	                    ),
	                    _react2.default.createElement('div', { className: 'midd' }),
	                    _react2.default.createElement('div', { className: 'bottom' })
	                )
	            );
	        }
	    }]);
	
	    return Home;
	}(_react.Component);
	
	exports.default = Home;
	
	
	function storeFormatter(state) {
	    var left = state.left;
	
	    //if (active === undefined) {
	    //    if(routing.locationBeforeTransitions.pathname=="./"){
	    //
	    //    }
	    //}
	
	    var ret = {
	        left: left || false
	    };
	    //console.log(ret)
	    return ret;
	}
	
	exports.default = (0, _reactRedux.connect)(storeFormatter)(Home);

/***/ },

/***/ 274:
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 275:
/*!********************************!*\
  !*** ./css/stylesheets/ie.css ***!
  \********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bundle.js.map