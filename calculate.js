    // function calculate subscription
    //  // test case
    //  let date_str = "15/06/2022";
    //  let months = 3;
    //  let cost = 100;
    function calculate_subscription(date_str, months, cost) {
        let line =""
        var date_arr = date_str.split("/").map(Number);
        let date = date_arr[0];
        let months_to_buy = date_arr[1];
        let year = date_arr[2];
        if (date > 15) {
             line = "your expiry date is:-" +`15/${months_to_buy + 1}/${year}`;
        } else {
            line = "your expiry date is:-" +`01/${months_to_buy + 1}/${year}`;
        }
        return line
    }
    module.exports = calculate_subscription;

