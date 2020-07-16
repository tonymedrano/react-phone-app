import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AppList from './app-list';

const { asFragment } = render(<AppList />);

test('<AppList />', () => {
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot(asFragment());
});