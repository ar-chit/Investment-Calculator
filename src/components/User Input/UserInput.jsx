export default function UserInput({userInput, onChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Monthly S.I.P Amount</label>
                    <input type="number"
                        required
                        value={userInput.monthlyInvestment}
                        onChange={(event) => onChange(
                            'monthlyInvestment', event.target.value
                        )}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (% p.a)</label>
                    <input type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange(
                            'expectedReturn', event.target.value
                        )}
                    />
                </p>
                <p>
                    <label>Duration (year)</label>
                    <input type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => onChange(
                            'duration', event.target.value
                        )}
                    />
                </p>
            </div>
        </section>
    )
}