export default function UserInputLumpsum({ userInputLumpsum, onChange }) {
    const handleInputChange = (field, value) => {
        const newValue = value === '0' ? value : parseFloat(value);
        onChange(field, newValue);
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Lumpsum Amount</label>
                    <input
                        type="number"
                        required
                        value={userInputLumpsum.lumpsumAmount}
                        onChange={(event) =>
                            handleInputChange('lumpsumAmount', event.target.value)
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
                        value={userInputLumpsum.expectedReturn}
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
                        value={userInputLumpsum.duration}
                        onChange={(event) =>
                            handleInputChange('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}
