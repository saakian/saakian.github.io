
////////////////////-------------------------------------/////////////////////////////////

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  
  // function success(pos) {
  //   var crd = pos.coords;
  
  //   // console.log('Your current position is:');
  //   // console.log(`Latitude : ${crd.latitude}`);
  //   // console.log(`Longitude: ${crd.longitude}`);
  //   // console.log(`More or less ${crd.accuracy} meters.`);
  //   document.getElementById("search").innerHTML = (` More or less ${crd.accuracy} meters radius.`);
    
    
    
  // }


  
  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }
  
  // navigator.geolocation.getCurrentPosition(success, error, options);
  // navigator.geolocation.watchPosition(success, error, options);
  // //1. Find and store the element we want to listen to events on.
  // var clickerButton = document.getElementById("button");
  // // 2. Define the function that will respond to the event.
  // var onButtonClick = function() {
  //   window.location.href=window.location.href;
  // };
  // // 3. Add the event listener for the element and function
  // clickerButton.addEventListener("click", onButtonClick);

  //////////////////////////////

  function distance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
    var dLon = (lon2-lon1).toRad(); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    
    //var inner =("Απεχεις Inner: ")+(d.toFixed(3)*1000)+("inner!");
    return (document.getElementById("search2").textContent = ('Aπεχετε : ')+(d.toFixed(3)*1000)+(" μετρα."));
    document.getElementsById("search").value = (d.toFixed); 
    
    
    
  }
  
  /** Converts numeric degrees to radians */
  if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
  }
 
  window.navigator.geolocation.watchPosition(function(pos) { 

      distance (pos.coords.longitude, pos.coords.latitude, 23.707102, 37.959390)
    
  });

/////////********** PROGRESS BAR /////////////////////////////////////////TRIAL  ******/////////////////

//  function move() {
//   var elem = document.getElementById("myBar"); 
//   var targetDistance = crd.accuracy;
//   var id = setInterval(frame, 10);
  
//   function frame() {
//       if (targetDistance <= d) {
//           console.log(d + 2147147);
//       } else {
//           targetDistance++; 
//           elem.style.distance = crd.accuracy + d; 
//           elem.innerHTML = d * 5000;
//       }
//   }
// };

