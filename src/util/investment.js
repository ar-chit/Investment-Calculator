export function calculateMonthlyInvestmentResults({ monthlyInvestment, expectedReturn, duration }) {
  // Convert annual interest rate to decimal form
  const periodicInterestRate = expectedReturn / 100 / 12;

  const annualData = [];

  // Initialize variables to store data for each year
  let investedAmount = 0;
  let estimatedReturns = 0;
  let totalValue = 0;
  let previousYearGain = 0;

  // Loop through each year
  for (let year = 1; year <= duration; year++) {
    // Calculate the number of payments for the current year
    const numberOfPayments = year * 12;

    // Calculate the maturity amount for the current year
    const maturityAmount = monthlyInvestment * (((1 + periodicInterestRate) ** numberOfPayments - 1) / periodicInterestRate) * (1 + periodicInterestRate);

    // Update invested amount, estimated returns, and total value
    investedAmount += monthlyInvestment * 12;
    estimatedReturns = maturityAmount - investedAmount;
    totalValue = investedAmount + estimatedReturns;

    const currentYearGain = totalValue - investedAmount;

    const gainPerAnnum = currentYearGain - previousYearGain;

    annualData.push({
      year: year,
      investedCapital: investedAmount,
      gainPerAnnum: gainPerAnnum,
      totalGain: estimatedReturns,
      totalValue: totalValue
    })
    // Display data for the current year
    // console.log(`Year ${year}:`);
    // console.log("  Invested amount: ₹", investedAmount);
    // console.log("  Gain per annum: ₹", gainPerAnnum);
    // console.log("  Est. returns: ₹", estimatedReturns);
    // console.log("  Total Value: ₹", totalValue);
    // console.log("--------------");

    previousYearGain = currentYearGain;
  }

  return annualData;

}

export function calculateLumpsumInvestmentResults({ lumpsumAmount, expectedReturn, duration }) {
  // Convert annual interest rate to decimal form
  const periodicInterestRate = expectedReturn / 100;

  const annualData = [];

  // Initialize variables to store data for each year
  let investedAmount = 0;
  let totalValue = 0;
  let previousYearGain = 0;

  // Loop through each year
  for (let year = 1; year <= duration; year++) {
    // Calculate the maturity amount for the current year
    const maturityAmount = lumpsumAmount * ((1 + periodicInterestRate) ** year);

    // Calculate the returns for the current year
    const returnsForYear = maturityAmount - lumpsumAmount;

    // Update invested amount and total value
    investedAmount = lumpsumAmount;
    totalValue = investedAmount + returnsForYear;

    // Calculate the gain for the current year
    const currentYearGain = totalValue - investedAmount;

    // Calculate the gain per annum
    const gainPerAnnum = currentYearGain - previousYearGain;

    annualData.push({
      year: year,
      investedCapital: investedAmount,
      gainPerAnnum: gainPerAnnum,
      totalGain: totalValue - investedAmount,
      totalValue: totalValue
    });

    // Update previous year gain for the next iteration
    previousYearGain = currentYearGain;
  }

  return annualData;
}



export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
