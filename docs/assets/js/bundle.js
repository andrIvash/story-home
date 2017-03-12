(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _list = require('./list');

var currencyList = new _list.List('.currency');
var languageList = new _list.List('.language');

currencyList.init();
languageList.init();

},{"./list":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = List;
/**
 * Обработка выбора списков
 */

/**
* @constructor
* @param{text} className
*/
function List(className) {
  this._baseElem = document.querySelector(className);
  this._elemSelected = this._baseElem.querySelector('div');
  this._elemList = this._baseElem.querySelector('ul');
  this._onManageList = this._onManageList.bind(this);
};

/**
 * определяем обработчики
 */

List.prototype.init = function () {
  this._baseElem.addEventListener('click', this._onManageList);
};

/**
 * удаляем обработчики
 */

List.prototype.remove = function () {
  this._baseElem.removeEventListener('click', this._onManageList);
};

/**
 * Действия при клике
 * @param {Event} evt
 */
List.prototype._onManageList = function (evt) {
  var elem = evt.target;
  if (elem.tagName === 'DIV') {
    this._elemList.classList.toggle('hide');
  }
  if (elem.tagName === 'LI') {
    this._elemSelected.textContent = elem.textContent;
    this._elemList.classList.toggle('hide');
  }
};

},{}]},{},[1])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBLElBQUksZUFBZSxlQUFTLFdBQVQsQ0FBbkI7QUFDQSxJQUFJLGVBQWUsZUFBUyxXQUFULENBQW5COztBQUVBLGFBQWEsSUFBYjtBQUNBLGFBQWEsSUFBYjs7Ozs7Ozs7UUNFZ0IsSSxHQUFBLEk7QUFSaEI7Ozs7QUFJQzs7OztBQUlNLFNBQVMsSUFBVCxDQUFjLFNBQWQsRUFBeUI7QUFDOUIsT0FBSyxTQUFMLEdBQWlCLFNBQVMsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLE9BQUssYUFBTCxHQUFxQixLQUFLLFNBQUwsQ0FBZSxhQUFmLENBQTZCLEtBQTdCLENBQXJCO0FBQ0EsT0FBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxDQUFlLGFBQWYsQ0FBNkIsSUFBN0IsQ0FBakI7QUFDQSxPQUFLLGFBQUwsR0FBcUIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0Q7O0FBRUQ7Ozs7QUFJQSxLQUFLLFNBQUwsQ0FBZSxJQUFmLEdBQXNCLFlBQVc7QUFDL0IsT0FBSyxTQUFMLENBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBd0MsS0FBSyxhQUE3QztBQUNELENBRkQ7O0FBSUE7Ozs7QUFJQSxLQUFLLFNBQUwsQ0FBZSxNQUFmLEdBQXdCLFlBQVc7QUFDakMsT0FBSyxTQUFMLENBQWUsbUJBQWYsQ0FBbUMsT0FBbkMsRUFBNEMsS0FBSyxhQUFqRDtBQUNELENBRkQ7O0FBS0E7Ozs7QUFJQSxLQUFLLFNBQUwsQ0FBZSxhQUFmLEdBQStCLFVBQVMsR0FBVCxFQUFjO0FBQ3pDLE1BQUksT0FBTyxJQUFJLE1BQWY7QUFDQSxNQUFHLEtBQUssT0FBTCxLQUFpQixLQUFwQixFQUEyQjtBQUN6QixTQUFLLFNBQUwsQ0FBZSxTQUFmLENBQXlCLE1BQXpCLENBQWdDLE1BQWhDO0FBQ0Q7QUFDRCxNQUFHLEtBQUssT0FBTCxLQUFpQixJQUFwQixFQUEwQjtBQUN4QixTQUFLLGFBQUwsQ0FBbUIsV0FBbkIsR0FBaUMsS0FBSyxXQUF0QztBQUNBLFNBQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsTUFBekIsQ0FBZ0MsTUFBaEM7QUFDRDtBQUNKLENBVEQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge0xpc3R9IGZyb20gJy4vbGlzdCc7XG5cbmxldCBjdXJyZW5jeUxpc3QgPSBuZXcgTGlzdCgnLmN1cnJlbmN5Jyk7XG5sZXQgbGFuZ3VhZ2VMaXN0ID0gbmV3IExpc3QoJy5sYW5ndWFnZScpO1xuXG5jdXJyZW5jeUxpc3QuaW5pdCgpO1xubGFuZ3VhZ2VMaXN0LmluaXQoKTtcbiIsIi8qKlxuICog0J7QsdGA0LDQsdC+0YLQutCwINCy0YvQsdC+0YDQsCDRgdC/0LjRgdC60L7QslxuICovXG5cbiAvKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFte3RleHR9IGNsYXNzTmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gTGlzdChjbGFzc05hbWUpIHtcbiAgdGhpcy5fYmFzZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk7XG4gIHRoaXMuX2VsZW1TZWxlY3RlZCA9IHRoaXMuX2Jhc2VFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICB0aGlzLl9lbGVtTGlzdCA9IHRoaXMuX2Jhc2VFbGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gIHRoaXMuX29uTWFuYWdlTGlzdCA9IHRoaXMuX29uTWFuYWdlTGlzdC5iaW5kKHRoaXMpO1xufTtcblxuLyoqXG4gKiDQvtC/0YDQtdC00LXQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4XG4gKi9cblxuTGlzdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9iYXNlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGhpcy5fb25NYW5hZ2VMaXN0KTtcbn07XG5cbi8qKlxuICog0YPQtNCw0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuFxuICovXG5cbkxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9iYXNlRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTWFuYWdlTGlzdCk7XG59O1xuXG5cbi8qKlxuICog0JTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0LrQu9C40LrQtVxuICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gKi9cbkxpc3QucHJvdG90eXBlLl9vbk1hbmFnZUxpc3QgPSBmdW5jdGlvbihldnQpIHtcbiAgICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gICAgaWYoZWxlbS50YWdOYW1lID09PSAnRElWJykge1xuICAgICAgdGhpcy5fZWxlbUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIH1cbiAgICBpZihlbGVtLnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICAgIHRoaXMuX2VsZW1TZWxlY3RlZC50ZXh0Q29udGVudCA9IGVsZW0udGV4dENvbnRlbnQ7XG4gICAgICB0aGlzLl9lbGVtTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgfVxufTtcbiJdfQ==
