const url = "file:///C:/Users/victo/OneDrive/%C3%81rea%20de%20Trabalho/Cod-Flix-main/Cod-Flix-main/c%C3%B3digo%20flix/js/login.html#"
const btnLogin = document.querySelector('.btnLogin-popup')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
}

btnLogin.addEventListener('click', ()=>{
 openInNewTab(url)
})