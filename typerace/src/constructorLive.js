export function constructorLive(amountLife) {
  let newUl = '';

  while (amountLife) {
    newUl += '<li></li>';
    // eslint-disable-next-line no-param-reassign
    amountLife -= 1;
  }
  return newUl;
}
