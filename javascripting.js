<script LANGUAGE="javascript" type="text/javascript">
                var today = new Date();

                var month = today.getMonth();

                var displayMonth="";

                switch (month) {
                    case 0:
                        displayMonth = "January"
                        break;
                    case 1:
                        displayMonth = "February"
                        break;
                    case 2:
                        displayMonth = "March"
                        break;
                    case 3:
                        displayMonth = "April"
                        break;
                    case 4:
                        displayMonth = "May"
                        break;
                    case 5:
                        displayMonth = "June"
                        break;
                    case 6:
                        displayMonth = "July"
                        break;
                    case 7:
                        displayMonth = "August"
                        break;
                    case 8:
                        displayMonth = "September"
                        break;
                    case 9:
                        displayMonth = "October"
                        break;
                    case 10:
                        displayMonth = "November"
                        break;
                    case 11:
                        displayMonth = "December"
                        break;
                    default:
                        displayMonth = "INVALID"
                }

                var hours = today.getHours();

                var minutes = today.getMinutes();

                var greeting;

                var ampm;

                if (hours<=11) {
                    greeting = "Good Morning!";
                    ampm = "a.m.";

                    if (hours == 0) {
                        hours = 12;
                    }
                }

                else if (hours > 11 && hours < 18) {
                    greeting = "Good Afternoon!";
                    ampm = "p.m.";

                    if (hours > 12) {
                        hours -= 12;
                    }
                }

                else if (hours > 17 && hours < 21) {
                    greeting = "Good Evening!";
                    ampm = "p.m.";
                    hours -= 12;
                }

                else if (hours > 21){
                    greeting = "Good night!";
                    ampm = "p.m.";
                    hours -= 12;
                }

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }

                var displayGreeting = displayMonth + " " + today.getDate() + ". " + today.getFullYear() + " - " + hours + ":" + minutes + " " + ampm

                document.write(displayGreeting)
        </script>