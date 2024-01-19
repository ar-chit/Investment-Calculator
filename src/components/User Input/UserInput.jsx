export default function UserInput({ userInput, onChange }) {
    const handleInputChange = (field, value) => {
        // Remove non-numeric characters from the input value
        const numericValue = value.replace(/[^0-9]/g, '');

        // Update the state with the cleaned numeric value
        onChange(field, numericValue);
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Monthly S.I.P Amount</label>
                    <input
                        type="text"
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
                        type="text"
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
                        type="text"
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
