export function calculateInvestmentResults({
  initialInvestment,
  monthlyInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];

  let investedCapital = initialInvestment;
  let totalGain = 0;

  for (let i = 0; i < duration; i++) {
    
    investedCapital += monthlyInvestment * 12;
    let gainPerAnnum = investedCapital * (expectedReturn / 100);

    totalGain += gainPerAnnum;

    let totalValue = investedCapital + gainPerAnnum;

    annualData.push({
      year: i + 1,
      investedCapital: investedCapital,
      gainPerAnnum: gainPerAnnum,
      totalGain: totalGain,
      totalValue: totalValue
    })
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
