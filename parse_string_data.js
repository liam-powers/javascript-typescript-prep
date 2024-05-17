// Problem Statement:
// Given an array of customerID : chargeRequest strings,
// and an dictionary of starting customer balances,
// return the average valid amount requested by each customer,
// AND the number of invalid requests per customer.


const customerRequests = ['1 : $100', '2 : $5000', '3 : $1000', '4 : $1009']
const customerBalances = {
    1: '5000',
    2: '100',
    3: '6000',
    4: '890'
}


const avgValidAmount = () => {
    let avgValidAmounts = [0] * customerBalances.length;

    for(const [customerID, balance] of Object.entries(customerBalances)) { // should give us the key
        console.log("customerID: ");
        let totalValid = 0;
        let currentBalance = balance;
        let numValid = 0;

        for(request of customerRequests) {
            const [blank, requestAmount] = request.split(' : $');
            if (Number(request[0]) == customerID) {
                if (currentBalance - requestAmount >= 0) {
                    console.log("valid request value: ", requestAmount);
                    totalValid += Number(requestAmount);
                    numValid++;
                }
                else {
                    break;
                }
            }
        }

        console.log("here: ", totalValid / numValid);
        console.log(typeof customerID);

        avgValidAmounts[Number(customerID)] = (totalValid / numValid)
        console.log("avg valid amount of ", customerID, " = ", avgValidAmounts[Number(customerID)]);
    }

    return avgValidAmounts;
};

const numInvalidRequests = () => {

};

console.log(avgValidAmount());
