import { Spinner } from 'components/loader/loader.style';
import React from 'react';
import StyledButton, { ButtonSpinner } from './button.style';

type Props = {
    children: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
    type: 'submit' | 'button';
    [key: string]: unknown;
};
export type Ref = HTMLButtonElement;
export const Button = React.forwardRef<Ref, Props>(({ children, disabled, loading = false, ...props }, ref) => (
    <StyledButton ref={ref} {...props} disabled={disabled}>
        {children}
        {loading && <ButtonSpinner />}
    </StyledButton>
));
