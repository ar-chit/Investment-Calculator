export default function UserInput({ userInput, onChange }) {
    const handleInputChange = (field, value) => {
        // Check if the input is zero, replace it with the new input
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
                        value={userInput.monthlyInvestment}
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
                        value={userInput.expectedReturn}
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
                        value={userInput.duration}
                        onChange={(event) =>
                            handleInputChange('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}
