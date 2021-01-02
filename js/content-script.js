function addJs() {
    const file = chrome.extension.getURL('js/extension.js')
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = file
    console.log(s);
    document.documentElement.appendChild(s)
}
addJs();