/*var ss="";

window.onload = function() { const setupUI = (user) => {
  if (user) {ss=user.uid;} 
 console.log("abid");
      var uid = user.uid;

      var dbPath = 'UsersData/' + uid.toString()+'/readings';
      
      // Database references
      var dbRef = firebase.database().ref(dbPath);
  var jsonData = dbRef.toJSON(); // example: {temperature: 25.02, humidity: 50.20, pressure: 1008.48, timestamp:1641317355}
  // Save values on variables
  var temperature = jsonData.temperature;console.log(temperature);
  var humidity = jsonData.humidity;
  var gaugeT = createTemperatureGauge();
  var gaugeH = createHumidityGauge();
  gaugeT.draw();
  gaugeH.draw();
 console.log(humidity)
  var timestamp = jsonData.timestamp;
  tempElement.innerHTML = temperature;
  humElement.innerHTML = humidity;
  updateElement.innerHTML = epochToDateTime(timestamp);

  if(jsonData.led1==1){Btn1.src="on.png";}else if(jsonData.led1==0){Btn1.src="off.png";}
  if(jsonData.led1==1){Btn2.src="on.png";}else if(jsonData.led1==0){Btn2.src="off.png";}
  if(jsonData.led1==1){Btn3.src="on.png";}else if(jsonData.led1==0){Btn3.src="off.png";}
  if(jsonData.led1==1){Btn4.src="on.png";}else if(jsonData.led1==0){Btn4.src="off.png";}
  if(jsonData.led1==1){Btn5.src="on.png";}else if(jsonData.led1==0){Btn5.src="off.png";}
}};*/
function epochToJsDate(epochTime){
    return new Date(epochTime*1000);
  }
  
  // convert time to human-readable format YYYY/MM/DD HH:MM:SS
  function epochToDateTime(epochTime){
    var epochDate = new Date(epochToJsDate(epochTime));
    var dateTime = epochDate.getFullYear() + "/" +
      ("00" + (epochDate.getMonth() + 1)).slice(-2) + "/" +
      ("00" + epochDate.getDate()).slice(-2) + " " +
      ("00" + epochDate.getHours()).slice(-2) + ":" +
      ("00" + epochDate.getMinutes()).slice(-2) + ":" +
      ("00" + epochDate.getSeconds()).slice(-2);
  
    return dateTime;
  }
  const Btn1 = document.querySelector('#btn1');const Btn2 = document.querySelector('#btn2');
  const Btn3 = document.querySelector('#btn3');const Btn4 = document.querySelector('#btn4');
  const Btn5 = document.querySelector('#btn5');const Btn6 = document.querySelector('#btn6');
  
  // DOM elements services3
  const services2 = document.querySelector('#div11');
  const services3 = document.querySelector('#services3');
  const services4 = document.querySelector('#services4');
  const loginElement = document.querySelector('#login-form');
  const logoutElement = document.querySelector('#logout-link');
  const contentElement = document.querySelector("#content-sign-in");
  const userDetailsElement = document.querySelector('#user-details');

  const gaugesCheckboxElement = document.querySelector('input[name=gauges-checkbox]');
  const cardsCheckboxElement = document.querySelector('input[name=cards-checkbox]');
  
  
  // DOM elements for sensor readings
  const cardsReadingsElement = document.querySelector("#gauges-divh");
  const gaugesReadingsElement = document.querySelector("#gauges-divt");

  const tempElement = document.getElementById("temp");
  const humElement = document.getElementById("hum");
  const presElement = document.getElementById("pres");
  const updateElement = document.getElementById("lastUpdate");
  const led1 = document.getElementById("led1");const led2 = document.getElementById("led2");
  const led3 = document.getElementById("led3");const led4 = document.getElementById("led4");
  const led5 = document.getElementById("led5");const led6 = document.getElementById("led6");
  // MANAGE LOGIN/LOGOUT UI
 const setupUI = (user) => {
    if (user) { var uid = user.uid;
      
            // Database paths (with user UID)
            var dbPath = 'UsersData/' + uid.toString()+'/readings/readings';
            var dbRef = firebase.database().ref(dbPath);
            dbRef.on('value', snapshot =>{var jsonData = snapshot.toJSON(); 
              var temperature = jsonData.temperature;
              var humidity = jsonData.humidity;
             
              var timestamp = jsonData.timestamp;
              tempElement.innerHTML = temperature;
              humElement.innerHTML = humidity;
              updateElement.innerHTML = epochToDateTime(timestamp);
              var gaugeT = createTemperatureGauge();
              var gaugeH = createHumidityGauge();
              gaugeT.draw();
              gaugeH.draw();
              gaugeT.value = jsonData.temperature;
              gaugeH.value =jsonData.humidity;
              updateElement.innerHTML = epochToDateTime(timestamp);
              if(jsonData.btn1==1){Btn1.src="vert1.png";}else if(jsonData.btn1==0){Btn1.src="VERT2.png";}
              if(jsonData.btn2==1){Btn2.src="vert1.png";}else if(jsonData.btn2==0){Btn2.src="VERT2.png";}
              if(jsonData.btn3==1){Btn3.src="vert1.png";}else if(jsonData.btn3==0){Btn3.src="VERT2.png";}
              if(jsonData.btn4==1){Btn4.src="vert1.png";}else if(jsonData.btn4==0){Btn4.src="VERT2.png";}
              if(jsonData.btn5==1){Btn5.src="vert1.png";}else if(jsonData.btn5==0){Btn5.src="VERT2.png";}
              if(jsonData.btn6==1){Btn6.src="vert1.png";}else if(jsonData.btn6==0){Btn6.src="VERT2.png";}
              
    });
    var chartPath = 'UsersData/' + uid.toString()+'/led/led' ;
    var chartRef = firebase.database().ref(chartPath);
    chartRef.on('value', snapshot =>{var jsonData = snapshot.toJSON(); console.log(jsonData);
      if(jsonData.led1=="on"){led1.src="on.png";}else if(jsonData.led1=="off"){led1.src="off.png";}
      if(jsonData.led2=="on"){led2.src="on.png";}else if(jsonData.led2=="off"){led2.src="off.png";}
      if(jsonData.led3=="on"){led3.src="on.png";}else if(jsonData.led3=="off"){led3.src="off.png";}
      if(jsonData.led4=="on"){led4.src="on.png";}else if(jsonData.led4=="off"){led4.src="off.png";}
      if(jsonData.led5=="on"){led5.src="on.png";}else if(jsonData.led5=="off"){led5.src="off.png";}
      if(jsonData.led6=="on"){led6.src="on.png";}else if(jsonData.led6=="off"){led6.src="off.png";}
});        
            dbRef.on('child_changed', snapshot =>{var jsonData = snapshot.toJSON(); 
              if(jsonData.btn1 !=''){
              
              var temperature = jsonData.temperature;
              var humidity = jsonData.humidity;
             
              var timestamp = jsonData.timestamp;
              tempElement.innerHTML = temperature;
              humElement.innerHTML = humidity;
              updateElement.innerHTML = epochToDateTime(timestamp);
              var gaugeT = createTemperatureGauge();
              var gaugeH = createHumidityGauge();
              gaugeT.draw();
              gaugeH.draw();
              gaugeT.value = jsonData.temperature;
              gaugeH.value =jsonData.humidity;
              updateElement.innerHTML = epochToDateTime(timestamp);
              if(jsonData.btn1==1){Btn1.src="on.png";}else if(jsonData.btn1==0){Btn1.src="off.png";}
              if(jsonData.btn2==1){Btn2.src="on.png";}else if(jsonData.btn2==0){Btn2.src="off.png";}
              if(jsonData.btn3==1){Btn3.src="on.png";}else if(jsonData.btn3==0){Btn3.src="off.png";}
              if(jsonData.btn4==1){Btn4.src="on.png";}else if(jsonData.btn4==0){Btn4.src="off.png";}
              if(jsonData.btn5==1){Btn5.src="on.png";}else if(jsonData.btn5==0){Btn5.src="off.png";}
              if(jsonData.btn6==1){Btn6.src="on.png";}else if(jsonData.btn6==0){Btn6.src="off.png";}
    }
            });
            var chartPath = 'UsersData/' + uid.toString()+'/led' ;
            var chartRef = firebase.database().ref(chartPath);
      led1.addEventListener('click', e => {
        if (led1.value == 0) { led1.value = 1; chartRef.update({ "led/led1": "on" }); led1.src = "on.png"; }
        else { led1.value = 0; chartRef.update({ "led/led1": "off" }); led1.src = "off.png"; } });
      led2.addEventListener('click', e => {
        if (led2.value == 0) { led2.value = 1; chartRef.update({ "led/led2": "on" }); led2.src = "on.png"; }
        else { led2.value = 0; chartRef.update({ "led/led2": "off" }); led2.src = "off.png"; } });
      led3.addEventListener('click', e => {
        if (led3.value == 0) { led3.value = 1; chartRef.update({ "led/led3": "on" }); led3.src = "on.png"; }
        else { led3.value = 0; chartRef.update({ "led/led3": "off" }); led3.src = "off.png"; } });
      led4.addEventListener('click', e => {
        if (led4.value == 0) { led4.value = 1; chartRef.update({ "led/led4": "on" }); led4.src = "on.png"; }
        else { led4.value = 0; chartRef.update({ "led/led4": "off" }); led4.src = "off.png"; } });
      led5.addEventListener('click', e => {
        if (led5.value == 0) { led5.value = 1; chartRef.update({ "led/led5": "on" }); led5.src = "on.png"; }
        else { led5.value = 0; chartRef.update({ "led/led5": "off" }); led5.src = "off.png"; } });
      led6.addEventListener('click', e => {
        if (led6.value == 0) { led6.value = 1; chartRef.update({ "led/led6": "on" }); led6.src = "on.png"; }
        else { led6.value = 0; chartRef.update({ "led/led6": "off" }); led6.src = "off.png"; } });
      services2.style.display = 'block';
      services3.style.display = 'block';
      services4.style.display = 'block';
      logoutElement.style.display = 'block'; 
      userDetailsElement.style.display ='block';
      userDetailsElement.innerHTML = user.email;
      loginElement.style.display = 'none';
  
      // get user UID to get data from database
     

         
         
    
  

  

      // Checbox (gauges for sensor readings)
      gaugesCheckboxElement.addEventListener('change', (e) =>{
        if (gaugesCheckboxElement.checked) {
          gaugesReadingsElement.style.display = 'block';
        }
        else{
          gaugesReadingsElement.style.display = 'none';
        }
      });
      cardsCheckboxElement.addEventListener('change', (e) =>{
        if (cardsCheckboxElement.checked) {
          cardsReadingsElement.style.display = 'block';
        }
        else{
          cardsReadingsElement.style.display = 'none';
        }
      });

    } else{
      services2.style.display = 'none';
      services3.style.display = 'none';
      services4.style.display = 'none';
      logoutElement.style.display = 'none'; 
      userDetailsElement.style.display ='none';
      ///////////////
      userDetailsElement.innerHTML = "";
      loginElement.style.display = 'block';


    }
  }
  