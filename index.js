// Code your solution in this file!
const returnFirstTwoDrivers = (driversNames) => {
    const newArray =[driversNames[0], driversNames[1]];
    return newArray;
};
const returnLastTwoDrivers = (driversNames) => {
    //console.log(driversNames.slice(-1))
    const newArray = driversNames.slice(-2);
    
    return newArray;
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];
console.log(selectingDrivers);

function createFareMultiplier (multiplier) {
    return (originalFare) => multiplier * originalFare;
}

const fareDoubler = (createFareMultiplier(2));

const fareTripler = (createFareMultiplier(3));

const selectDifferentDrivers = (arrayOfDrivers, driversToBeSelected) => {
    return driversToBeSelected(arrayOfDrivers);
};