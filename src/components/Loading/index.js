import React from 'react';

import {
    Loader,
} from './styles';

export function Loading({ size, backgroundColor = "#696969", spinnerColor = "#fff" }) {
    return (
        <Loader size={size} backgroundColor={backgroundColor} spinnerColor={spinnerColor}>
            <div />
        </Loader>

    );
}