;
;
var motorInputs = [
    { position: 10, velocity: 5, acceleration: 2 },
    { position: 20, velocity: 7, acceleration: 3 },
    { position: 30, velocity: 9, acceleration: 4 },
    { position: 40, velocity: 12, acceleration: 5 },
];
var calculateSummaryStatistics = function (inputs) {
    var summaryStatisticsHelper = function (inputs) {
        var obj = {
            min: NaN,
            max: NaN,
            average: NaN,
            standardDeviation: NaN,
        };
        obj.min = Math.min.apply(Math, inputs);
        obj.max = Math.max.apply(Math, inputs);
        obj.average = (inputs.reduce(function (accumulator, currentValue) { return accumulator += currentValue; }, 0)) / inputs.length;
        // obj.standardDeviation = Math.standardDeviation(inputs);
        //
        return obj;
    };
    var positions = inputs.map(function (input) { return input.position; });
    var velocities = inputs.map(function (input) { return input.velocity; });
    var accelerations = inputs.map(function (input) { return input.acceleration; });
    /*
    for(let motorInput of inputs) {
        positions.push(motorInput.position);
        velocities.push(motorInput.velocity);
        accelerations.push(motorInput.acceleration);
    };
    */
    var position_summary = summaryStatisticsHelper(positions);
    var velocity_summary = summaryStatisticsHelper(velocities);
    var acceleration_summary = summaryStatisticsHelper(accelerations);
    console.log(position_summary);
    console.log(velocity_summary);
    console.log(acceleration_summary);
};
// module.exports.motorInputs = motorInputs;
// module.exports.sumup = calculateSummaryStatistics;
module.exports = { motorInputs: motorInputs, calculateSummaryStatistics: calculateSummaryStatistics };
// console.log(calculateSummaryStatistics(motorInputs));
