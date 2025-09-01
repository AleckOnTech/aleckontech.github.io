/* Initialize Date */
        const reldate = new Date(Date.UTC(2025, 9, 8, 12, 0, 0));
        let CDate = new Date();
    
        console.log(reldate + CDate); // Debug Print

        // LEADING ZERO FUNCTION
        function padZero(n) {
            return n.toString().padStart(2, "0");
        }

        function timerLoop(){
           // Timer Code from W3Schools, Rewritten by me to work on this environment!
            CDate = new Date()
            var distance = reldate - CDate; // Timer Duration from CDate - RDate

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (86400000));
            let hours = Math.floor((distance % (86400000)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // If the count down is finished, write some text
            if (distance < 0) {
                return "00 Days, 00 Hours, 00 Minutes, 00 Seconds"
            } else {
                return days + " Days, " + padZero(hours) + " Hours, " + padZero(minutes) + " Minutes, "+  padZero(seconds) + " Seconds ";
            }
        }
        
 
        window.onload = () =>{
            /* PRINT THE SECOND LINE ON RELEASE DATE*/
            document.getElementById("second_line").innerHTML = "Website will be released and hosted on October 8, 2025 at 12:00pm (GMT) or on your timezone: <br>" + reldate;
          
            document.getElementById("third_line").innerHTML = "Timer until release: " + timerLoop()
            
        }  
        /* PRINT THE THIRD LINE ON TIMER RELEASE*/
        setInterval(() => {
            document.getElementById("third_line").innerHTML = "Timer until release: " + timerLoop()
            }, 1000);
