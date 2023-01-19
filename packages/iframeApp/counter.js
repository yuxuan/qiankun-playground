export function setupCounter(element) {
  let counter = 0
  console.log(33, window);
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  window.addEventListener('scroll', event => {
    window.parent.postMessage({postion: window.scrollY}, '*')
  })
}
