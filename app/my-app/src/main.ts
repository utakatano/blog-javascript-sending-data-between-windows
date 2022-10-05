export {}

declare global {
  interface Window {
    openNewWindow: () => void
    sendMessage: () => void
  }
}

let newWindow: Window | null;

window.openNewWindow = () => {
  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=300`
  newWindow = window.open('sub.html', 'sub', params)
}

window.sendMessage = () => {
  newWindow?.postMessage({ foo: 'bar' }, '*')
}