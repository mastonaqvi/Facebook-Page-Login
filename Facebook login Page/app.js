let darkmode_toggle = document.querySelector("#darkmode-toggle");


// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    let body = document.querySelector('body');
    body.classList.toggle('dark')
    darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode'

}