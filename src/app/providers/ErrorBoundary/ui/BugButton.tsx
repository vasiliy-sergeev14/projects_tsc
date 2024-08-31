import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button 
            onClick={onThrow}
        // eslint-disable-next-line i18next/no-literal-string
        >
            throw error
        </Button>
    );
}