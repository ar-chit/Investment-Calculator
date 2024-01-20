export default function userInputMonthly({ userInputMonthly, onChange }) {
    const handleInputChange = (field, value) => {
        const newValue = value === '0' ? value : parseFloat(value);
        onChange(field, newValue);
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Monthly S.I.P Amount</label>
                    <input
                        type="number"
                        required
                        value={userInputMonthly.monthlyInvestment}
                        onChange={(event) =>
                            handleInputChange('monthlyInvestment', event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (% p.a)</label>
                    <input
                        type="number"
                        required
                        value={userInputMonthly.expectedReturn}
                        onChange={(event) =>
                            handleInputChange('expectedReturn', event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Duration (year)</label>
                    <input
                        type="number"
                        required
                        value={userInputMonthly.duration}
                        onChange={(event) =>
                            handleInputChange('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}
