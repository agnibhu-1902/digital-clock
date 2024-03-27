const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
setInterval(() => {
    const date = new Date()
    let day_idx = date.getDay()
    let date_no = date.getDate();
    let month_idx = date.getMonth()
    let year = date.getFullYear()
    let date_area = document.querySelector('.date')
    date_area.innerText = day[day_idx] + ', ' + date_no + ' ' + month[month_idx] + ', ' + year
    let hours = document.querySelector('#hr .number')
    hours.innerText = date.getHours().toString().padStart(2, '0')
    let minutes = document.querySelector('#min .number')
    minutes.innerText = date.getMinutes().toString().padStart(2, '0')
    let seconds = document.querySelector('#sec .number')
    seconds.innerText = date.getSeconds().toString().padStart(2, '0')
}, 1000)