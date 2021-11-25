// Скрипт должен срабатывать в IE11 поэтому не используется ES6 синтаксис
;(function () {
  const regexp = '(/en/|/en+$)'
  const loc = window.location.href.match(regexp) ? 'en' : 'ru'
  const CONTENT = {
    ru: {
      title: 'Ваш браузер устарел!',
      text1:
        'Вы пользуетесь устаревшим браузером, который не поддерживает современные <span class="no-wrap">веб-стандарты</span> и представляет угрозу вашей безопасности.',
      text2: 'Пожалуйста, установите современный браузер:',
      text3:
        'Закрывая это уведомление, вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    },
    en: {
      title: 'Outdated Browser Detected!',
      text1:
        'You are using an outdated browser that does not support modern web standards and poses a threat to your security.',
      text2: 'Please install the latest version of your browser:',
      text3:
        'By closing this notice you agree that the website may not be displayed correctly in your browser.',
    },
  }

  const title = CONTENT[loc].title
  const text1 = CONTENT[loc].text1
  const text2 = CONTENT[loc].text2
  const text3 = CONTENT[loc].text3

  const modalContent =
    '<h2 class="modal-browser__title"> ' +
    title +
    '</h2><p class="modal-browser__text"> ' +
    text1 +
    '</p> <p class="modal-browser__text"> ' +
    text2 +
    '</p> <div class="modal-browser__browser-list"> <div class="modal-browser__browser"> <a class="modal-browser__browser-link" href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" > <img class="modal-browser__browser-image" src="/modal/images/chrome@1x.png" alt="chrome" srcSet="/modal/images/chrome@1x.png 1x, /modal/images/chrome@2x.png 2x, /modal/images/chrome@3x.png 3x" /> </a> </div> <div class="modal-browser__browser"> <a class="modal-browser__browser-link" href="https://www.mozilla.org/firefox/new/" target="_blank" rel="noopener noreferrer" > <img class="modal-browser__browser-image" src="/modal/images/firefox@1x.png" alt="firefox" srcSet="/modal/images/firefox@1x.png 1x, /modal/images/firefox@2x.png 2x, /modal/images/firefox@3x.png 3x" /> </a> </div> <div class="modal-browser__browser modal-browser__browser--safari"> <a class="modal-browser__browser-link" href="https://www.apple.com/safari/" target="_blank" rel="noopener noreferrer" > <img class="modal-browser__browser-image" src="/modal/images/safari@1x.png" alt="safari" srcSet="/modal/images/safari@1x.png 1x, /modal/images/safari@2x.png 2x, /modal/images/safari@3x.png 3x" /> </a> </div> <div class="modal-browser__browser"> <a class="modal-browser__browser-link" href="https://www.microsoft.com/windows/microsoft-edge" target="_blank" rel="noopener noreferrer" > <img class="modal-browser__browser-image" src="/modal/images/edge@1x.png" alt="edge" srcSet="/modal/images/edge@1x.png 1x, /modal/images/edge@2x.png 2x, /modal/images/edge@3x.png 3x" /> </a> </div> <div class="modal-browser__browser"> <a class="modal-browser__browser-link" href="https://www.opera.com/" target="_blank" rel="noopener noreferrer" > <img class="modal-browser__browser-image" src="/modal/images/opera@1x.png" alt="opera" srcSet="/modal/images/opera@1x.png 1x, /modal/images/opera@2x.png 2x, /modal/images/opera@3x.png 3x" /></a> </div></div><p class="modal-browser__text">' +
    text3 +
    '</p>'

  const handleClose = function (event) {
    if (
      event.target.className === 'modal-browser__wrapper' ||
      event.target.className === 'modal-browser__close-image' ||
      event.target.className === 'modal-browser__close'
    ) {
      document.body.className = document.body.className.replace('static-body', '')
      document.body.removeChild(modal)
    }
  }

  const styles = document.createElement('link')
  styles.rel = 'stylesheet'
  styles.href = '/modal/modal.css'

  const close = document.createElement('button')
  close.type = 'button'
  close.className = 'modal-browser__close'
  close.innerHTML =
    '<img class="modal-browser__close-image" src="/modal/images/close.png" alt="Закрыть" srcSet="/modal/images/close.png 1x, /modal/images/close@2x.png 2x, /modal/images/close@3x.png 3x" />'

  const inner = document.createElement('div')
  inner.className = 'modal-browser__inner'
  inner.innerHTML = modalContent
  inner.appendChild(close)

  const wrapper = document.createElement('div')
  wrapper.className = 'modal-browser__wrapper'

  const modal = document.createElement('div')
  modal.className = 'modal-browser'
  modal.addEventListener('click', handleClose)

  wrapper.appendChild(inner)
  modal.appendChild(wrapper)

  document.body.appendChild(styles)
  document.body.className += ' static-body'
  document.body.appendChild(modal)
})()
