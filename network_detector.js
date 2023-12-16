window.onload = ()=> {
    const tost = document.querySelector('.tost');
        const wifi = tost.querySelector('i');
        const tost_status = document.querySelector('.tost_status');
        const msg = document.querySelector('.msg');
        const close_btn = document.querySelector('.close_btn');
        if (navigator.onLine) {
            wifi.className = "far fa-wifi";
        } else {
            tost.classList.remove('offline');
            tost.style.borderColor = "#ddd";
            tost_status.textContent = "Offline";
            msg.textContent = "Opps! Your network is not detected";
            wifi.className = "far fa-wifi-slash";
            wifi.style.background = "#ddd";
        }

        close_btn.onclick = function () {
            if (navigator.onLine) {
                tost.classList.add('offline');
                tost.classList.remove('move');
                tost.classList.remove('shake');
            } else {
                tost.classList.add('shake');
                setTimeout(() => {
                    tost.classList.remove('shake');
                }, 500);
            }
        }
        tost.classList.add('move')
}