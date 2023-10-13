function calculateLoadAndInverter() {
  // Calculates the total load in watts based on appliance quantities

  const applianceLoads = {
    tv: 100,
    cableDecoder: 30,
    ceilingFan: 80,
    lightBulb: 15,
    standingFan: 50,
    waterPump: 500,
    freezer: 200,
    refrigerator: 300,
    inverterAC: 800,
    mediumIndustrialFan: 500,
    computerSet: 100,
    cctvCamera: 10,
    phoneCharger: 10,
    washingMachine: 500,
  };

  const inverterDetails = {
    "0.9kva": {
      maxLoad: 750,
      price: "493,000",
    },
    "1.0kva": {
      maxLoad: 800,
      price: "420,200",
    },
    "2.3kva": {
      maxLoad: 2000,
      price: "1,272,400",
    },
    "3.5kva": {
      maxLoad: 3000,
      price: "1,433,900",
    },
    "5kva": {
      maxload: 4500,
      price: "2,132,100",
    },
    "7.5kva": {
      maxLoad: 7000,
      price: "2,882,100",
    },
    "10kva": {
      maxLoad: 9500,
      price: "5,453,300",
    },
    "15kva": {
      maxLoad: 14500,
      price: "7,459,500",
    },
    "20kva": {
      maxLoad: 19500,
      price: "11,578,600",
    },
  };

  let totalLoad = 0; // The total load in watts

  function compareTotalLoadWithInverterMaxLoad() {
    // Compares the total load with the inverter max loads to suggest an appropriate inverter
    let suggestedInverter = "";
    for (const inverter in inverterDetails) {
      if (totalLoad <= inverterDetails[inverter].maxLoad) {
        suggestedInverter = inverter;
        return suggestedInverter;
      }
    }
  }

  // TO:DO Add up the wattage of each appliance multiplied by its quantity
  for (const appliance in applianceLoads) {
    const quantity = parseInt(document.getElementById(`${appliance}`).value);
    if (quantity > 0) {
      totalLoad += quantity * applianceLoads[appliance];
    }
  }

  // Display the results in the "result" div
  const maxLoadElement = document.getElementById("maxLoad");
  const suggestedInverterElement = document.getElementById("suggestedInverter");
  const inverterPriceElement = document.getElementById("inverterPrice");

  // Update maxLoadElement and suggestedInverterElement based on the calculations
  const suggestedInverter = compareTotalLoadWithInverterMaxLoad();
  maxLoadElement.innerText = `${totalLoad}`;
  suggestedInverterElement.innerText = `${suggestedInverter}`;
  inverterPriceElement.innerText = `N${inverterDetails[suggestedInverter].price}`;

  // Show the result
  document.getElementById("result").classList.remove("hidden");
}
