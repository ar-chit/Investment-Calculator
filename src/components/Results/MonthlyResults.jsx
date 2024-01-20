import { calculateMonthlyInvestmentResults, formatter } from "../../util/investment"

export default function MonthlyResults({ input }) {
    const results = calculateMonthlyInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Capital</th>
                    <th>Gain (p.a.)</th>
                    <th>Total Gain</th>
                    <th>Total Value</th>
                </tr>
            </thead>
            <tbody>
                {results.map(result => {
                    return (<tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.investedCapital)}</td>
                        <td>{formatter.format(result.gainPerAnnum)}</td>
                        <td>{formatter.format(result.totalGain)}</td>
                        <td>{formatter.format(result.totalValue)}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    )
}