export {}

let newWindow: Window | null;

const openNewWindow = () => {
  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=300`
  newWindow = window.open('sub.html', 'sub', params)
}