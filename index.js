const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function addBatteries(accumulator, element){
    return accumulator + element;
  }
  
  const totalBatteries = batteryBatches.reduce(addBatteries);
  
  console.log(totalBatteries);



