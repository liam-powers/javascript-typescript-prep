interface MotorInput {
    position: number;
    velocity: number;
    acceleration: number;
};

interface SummaryStatistics {
    min: number;
    max: number;
    average: number;
    standardDeviation: number;
};

const motorInputs: Array<MotorInput> = [
  { position: 10, velocity: 5, acceleration: 2 },
  { position: 20, velocity: 7, acceleration: 3 },
  { position: 30, velocity: 9, acceleration: 4 },
  { position: 40, velocity: 12, acceleration: 5 },
];

const calculateSummaryStatistics = (inputs: Array<MotorInput>) => {
    const summaryStatisticsHelper = (inputs: Array<number>) => {
        let obj: SummaryStatistics = {
            min: NaN,
            max: NaN,
            average: NaN,
            standardDeviation: NaN,
        };
        obj.min = Math.min(...inputs);
        obj.max = Math.max(...inputs);
        obj.average = (inputs.reduce((accumulator, currentValue) => accumulator += currentValue, 0)) / inputs.length;
        // obj.standardDeviation = Math.standardDeviation(inputs);
        //
        return obj;
    };


    let positions: Array<number> = inputs.map((input) => input.position);
    let velocities: Array<number> = inputs.map((input) => input.velocity);
    let accelerations: Array<number> = inputs.map((input) => input.acceleration);

    /*
    for(let motorInput of inputs) {
        positions.push(motorInput.position);
        velocities.push(motorInput.velocity);
        accelerations.push(motorInput.acceleration);
    };
    */

    let position_summary: SummaryStatistics = summaryStatisticsHelper(positions);
    let velocity_summary: SummaryStatistics = summaryStatisticsHelper(velocities);
    let acceleration_summary: SummaryStatistics = summaryStatisticsHelper(accelerations);



    console.log(position_summary);
    console.log(velocity_summary);
    console.log(acceleration_summary);


};

// module.exports.motorInputs = motorInputs;
// module.exports.sumup = calculateSummaryStatistics;
module.exports = { motorInputs, calculateSummaryStatistics };
// console.log(calculateSummaryStatistics(motorInputs));
