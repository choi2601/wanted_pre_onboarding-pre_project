export const getTarget = (elem, nodeName) => {
  while (elem.nodeName !== nodeName) {
    elem = elem.parentNode;

    if (elem.nodeName === 'BODY') {
      elem = null;
      return;
    }
  }
  return elem;
};
