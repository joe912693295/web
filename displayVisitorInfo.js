document.addEventListener("DOMContentLoaded", function() {
    var visitorInfoList = document.getElementById('visitorInfo');
    
    // Get IP address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var ipAddress = document.createElement('span');
            ipAddress.textContent = "Welcome Visitor from " + data.ip;
            visitorInfoList.appendChild(ipAddress);
        })
        .catch(error => {
            console.log('Error fetching IP address:', error);
        });

});
