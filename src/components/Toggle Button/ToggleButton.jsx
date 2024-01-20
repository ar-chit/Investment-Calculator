import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({ handleSection }) {
    const [alignment, setAlignment] = React.useState('monthly');

    const handleChange = (event, newAlignment) => {
        // Check if a button is selected and it's different from the current alignment
        if (newAlignment !== null && newAlignment !== alignment) {
            setAlignment(newAlignment);
            // Lift the selected value back to the parent component
            handleSection(newAlignment);
        }
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            style={{ margin: '1rem auto', display: 'flex', justifyContent: 'center' }}
        >
            <ToggleButton
                value="monthly"
                style={{
                    backgroundColor: alignment === 'monthly' ? '#1a8470' : 'rgba(43, 153, 109, 0.5)',
                    color: '#e1eeeb',
                    border: '1px solid #76c0ae',
                }}
            >
                Monthly
            </ToggleButton>
            <ToggleButton
                value="lumpsum"
                style={{
                    backgroundColor: alignment === 'lumpsum' ? '#1a8470' : 'rgba(43, 153, 109, 0.5)',
                    color: '#e1eeeb',
                    border: '1px solid #76c0ae',
                }}
            >
                Lumpsum
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
