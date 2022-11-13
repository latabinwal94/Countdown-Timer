(function() {
    var hour = document.querySelector('.hour')
    var min = document.querySelector('.minute')
    var sec = document.querySelector('.sec')

    var startBtn = document.querySelector('.start')
    var stopBtn = document.querySelector('.stop')
    var resetBtn = document.querySelector('.reset')
    console.log(startBtn, 'start btn')
    var countdownTimer = null;

    startBtn.addEventListener('click', function() {
        if(hour.value == 0 && min.value==0&&sec.value==0) return

        function startInterval() {
            startBtn.style.display = 'none';
            stopBtn.style.display = 'initial';

            countdownTimer = setInterval(() => {
                timer()
            },1000)
            
        }

        startInterval()
    })

    function stopInterval(state) {
        startBtn.innerHTML = state == 'pause' ? 'Continue' : 'Start'
        startBtn.style.display = 'initial';
        stopBtn.style.display = 'none';
        clearInterval(countdownTimer)
    }

    function resetInterval() {
        hour.value=''
        min.value=''
        sec.value=''
        stopInterval()
    }

    function timer() {
        if(sec.value > 60) {
            min.value++
            sec.value = parseInt(sec.value) - 59;
        }
        if(min.value > 60) {
            hour.value++
            min.value = parseInt(min.value) - 60;
        }
        if(hour.value == 0 && min.value == 0 && sec.value ==0) {
            hour.value=""
            min.value=""
            sec.value=""
            stopInterval()
        } else if(sec.value!=0) {
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`
        } else if(min.value != 0 && sec.value ==0) {
            sec.value = 59
            min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`
        } else if(hour.value != 0 && min.value == 0) {
            min.value = 60
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`
        }
    }

    stopBtn.addEventListener('click', () => {
        stopInterval('pause')
    })

    resetBtn.addEventListener('click', () => {
        resetInterval()
    })
}())