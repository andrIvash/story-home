/**
 * Обработка выбора списков
 */

 /**
 * @constructor
 * @param{text} className
 */
export function List(className) {
  this._baseElem = document.querySelector(className);
  this._elemSelected = this._baseElem.querySelector('div');
  this._elemList = this._baseElem.querySelector('ul');
  this._onManageList = this._onManageList.bind(this);
};

/**
 * определяем обработчики
 */

List.prototype.init = function() {
  this._baseElem.addEventListener('click',this._onManageList);
};

/**
 * удаляем обработчики
 */

List.prototype.remove = function() {
  this._baseElem.removeEventListener('click', this._onManageList);
};


/**
 * Действия при клике
 * @param {Event} evt
 */
List.prototype._onManageList = function(evt) {
    let elem = evt.target;
    if(elem.tagName === 'DIV') {
      this._elemList.classList.toggle('hide');
    }
    if(elem.tagName === 'LI') {
      this._elemSelected.textContent = elem.textContent;
      this._elemList.classList.toggle('hide');
    }
};
