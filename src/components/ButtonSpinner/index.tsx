import React from 'react';
import {Spinner } from '@ui-kitten/components';

type ButtonSpinnerProps = {
    isLoading : boolean
}

const ButtonSpinner = ({ isLoading } : ButtonSpinnerProps) => {
    return (
        isLoading ?
        <>
            <Spinner size='small'/>
        </> : null
    )
}

export default ButtonSpinner