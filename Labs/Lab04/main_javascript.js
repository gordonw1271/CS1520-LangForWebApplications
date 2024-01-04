
function getLoanInformation() {
    var out = new Array(4);
    out[0] = 600000;
    out[1] = 100000;
    out[2] = 5;
    out[3] = 30;
    return out;
}
// ==================================================================================================
function computeMontlyMortgagePayments(P, r, n) {
    let x = Math.pow((1 + r), 360)
    let num = r * x;
    let den = x - 1;
    let out = P * (num / den);
    return out.toFixed(2);
}
// ==================================================================================================
function displayResults(housePrice, down, annualIntrest, loanPeriod, monthyMort) {
    let equation = `<h2>Mortgage Calculator</h2>`;
    document.write(equation);
    equation = `<h4>House Price: $${housePrice}</h4>`;
    document.write(equation);
    equation = `<h4>Down Payment: $${down}</h4>`;
    document.write(equation);
    equation = `<h4>Principal: $${housePrice - down}</h4>`;
    document.write(equation);
    equation = `<h4>Annual Intrest Rate: ${annualIntrest}%</h4>`;
    document.write(equation);
    equation = `<h4>Loan Period: ${loanPeriod} years</h4>`;
    document.write(equation);
    equation = `<h4>Monthly Mortgage Payment: $${monthyMort} per month</h4>`;
    document.write(equation);
    equation = `<h4>Minimum Monthlyincome per House Hold: $${(monthyMort / 0.3).toFixed(2)} per month</h4>`;
    document.write(equation);
}
// ==================================================================================================
function getLoanPaymentValues(principal_P, monthlyMortgagePayments_M, annualInterestRate, loanPeriodInYears) {
    let xArray = [];
    let prinArray = [];
    let prinPayArray = [];
    let iArray = [];

    let p = principal_P;

    for (let i = 0; i < 360; i++) {
        let intrestPayment = (p * annualInterestRate / 100) / 12;
        let principalPayment = monthlyMortgagePayments_M - intrestPayment;

        xArray.push(i);
        prinArray.push(p);
        iArray.push(intrestPayment);
        prinPayArray.push(principalPayment);

        p = p - principalPayment;
    }
    return [xArray, prinArray, prinPayArray, iArray];
}
// ==================================================================================================
function plotValues(plottingArrays) {
    let x = plottingArrays[0];
    let y = plottingArrays[1];

    let prinPayArray = plottingArrays[2];
    let iArray = plottingArrays[3];

    // Define Data
    const data = [{
        x: x,
        y: prinPayArray,
        mode: "markers",
        name: "Principal Monthly Payment"
    },
    {
        x: x,
        y: iArray,
        mode: "markers",
        name: "Interest Monthly Payment"
    }];
    // Define Layout
    const layout = {
        xaxis: { title: "X-Axis" },
        yaxis: { title: "Y-Axis" },
        title: " Monthly Payments Towards Interest Rate/Principal"
    };

    // Display using Plotly
    Plotly.newPlot("monthlyInterestRateAndPrincipalPayments", data, layout);

    // Define Data
    const data1 = [{
        x: x,
        y: y,
        mode: "markers + line"
    }];

    // Define Layout
    const layout1 = {
        xaxis: { title: "X-Axis" },
        yaxis: { title: "Y-Axis" },
        title: "Principal Value over Time"
    };

    // Display using Plotly
    Plotly.newPlot("monthlyPrincipalValues", data1, layout1);


}
// ==================================================================================================
function plotMortgageCurves(principal_P, annualInterestRate, monthlyMortgagePayments_M, loanPeriodInYears) {
    let plottingArrays = getLoanPaymentValues(principal_P, monthlyMortgagePayments_M, annualInterestRate, loanPeriodInYears); // see note #6
    plotValues(plottingArrays); // see note #7
}
// ==================================================================================================
function main_driver() {
    let loanInformation = getLoanInformation();
    let housePrice = loanInformation[0];
    let downPayment = loanInformation[1];
    let annualInterestRate = loanInformation[2];
    let loanPeriodInYears = loanInformation[3];
    // derived data from loan information
    let principal_P = housePrice - downPayment;

    let montlyInterestRate_r = annualInterestRate / 1200;

    let totalNumberOfPayments_n = loanPeriodInYears * 12;

    let monthlyMortgagePayments_M = computeMontlyMortgagePayments(principal_P, montlyInterestRate_r, totalNumberOfPayments_n);
    displayResults(housePrice, downPayment, annualInterestRate, loanPeriodInYears, monthlyMortgagePayments_M);
    plotMortgageCurves(principal_P, annualInterestRate, monthlyMortgagePayments_M, loanPeriodInYears);
}