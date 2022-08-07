var countdown = document.querySelector("#result")
let time = 10
countdown.innerHTML = "";
countdown.innerHTML = time--;
setTimeout(() => {
    countdown.innerHTML = time--;
    setTimeout(() => {
        countdown.innerHTML = time--;
        setTimeout(() => {
            countdown.innerHTML = time--;
            setTimeout(() => {
                countdown.innerHTML = time--;
                setTimeout(() => {
                    countdown.innerHTML = time--;
                    setTimeout(() => {
                        countdown.innerHTML = time--;
                        setTimeout(() => {
                            countdown.innerHTML = time--;
                            setTimeout(() => {
                                countdown.innerHTML = time--;
                                setTimeout(() => {
                                    countdown.innerHTML = time--;
                                    setTimeout(() => {
                                        countdown.innerHTML = time--;
                                        setTimeout(() => {
                                            countdown.innerHTML = "happy independence day"
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)