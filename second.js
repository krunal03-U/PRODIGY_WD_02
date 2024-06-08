let [seconds, minutes, hours] = [0, 0, 0];
        let displaytime = document.getElementById("displaytime");
        let timer = null;

        function Stopwatch() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;

            displaytime.innerHTML = `${h}:${m}:${s}`;
        }

        function watchStart() {
            if (timer !== null) {
                clearInterval(timer);
            }
            timer = setInterval(Stopwatch, 1000);
        }

        function watchStop() {
            clearInterval(timer);
            timer = null;
        }

        function watchRestart() {
            clearInterval(timer);
            timer = null;
            [seconds, minutes, hours] = [0, 0, 0];
            displaytime.innerHTML = "00:00:00";
        }