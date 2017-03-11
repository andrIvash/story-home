/**
 * Обработка выбора списков
 */
export default (function() {
  /**
   *@type {Node=}
   */
  let currency = null;
  let currencySelected = null;
  let currencyList = null;

    let _addListener = () => {
      /**
       * @param{Event evt}
       */
      currency.addEventListener('click', (evt) => {
        let elem = evt.target;
        if(elem.tagName === 'DIV') {
          currencyList.classList.toggle('hide');
        }
        if(elem.tagName === 'LI') {
          currencySelected.textContent = elem.textContent;
          currencyList.classList.toggle('hide');
        }
      });
    };

    let _init = (className) => {
        currency = document.querySelector(className);
        currencySelected = currency.querySelector('div');
        currencyList = currency.querySelector('ul');
        _addListener();
    }

    return {
      init: _init,
      //remove: _remove
    }

})();
