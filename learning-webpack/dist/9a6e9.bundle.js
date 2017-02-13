webpackJsonp([1],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactRouter = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
	return _react2.default.createElement(
		'div',
		null,
		'App',
		_react2.default.createElement(
			_reactRouter.Link,
			{ to: '/c' },
			'to c'
		),
		props.children
	);
};

exports.default = App;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactRouter = __webpack_require__(35);

var _b = __webpack_require__(111);

var _b2 = _interopRequireDefault(_b);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const rootRouter = {
// 	childRoutes: [
// 		path: '/',
// 		component: require.ensure([], () => {
// 			require('./b')
// 		}, 'require_b')
// 	]
// }

var getC = function getC(location, callback) {
	__webpack_require__.e/* require.ensure */(0).then((function (require) {
		callback(null, __webpack_require__(112));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

(0, _reactDom.render)(_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.browserHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _b2.default },
		_react2.default.createElement(_reactRouter.Route, { path: '/c', getComponent: getC })
	)
), document.getElementById('app'));

/***/ })

},[234]);