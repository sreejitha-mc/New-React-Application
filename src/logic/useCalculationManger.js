import { useState } from 'react';

const useCalculationManager = () => {
    const [displayValue, setDisplayValue] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            setResult(eval(displayValue));
        } else if (value === 'C') {
            setDisplayValue('');
            setResult('');
        } else {
            setDisplayValue(displayValue + value);
        }
    };
    return {
        displayValue,
        handleButtonClick,
        result,
    };

};

export default useCalculationManager;
