import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AppListItem, { AppListItemProps } from './app-list-item';

const data:AppListItemProps  = {
    id: "1",
    name: "Galaxy S7",
    description: "Samsung Galaxy S7 Android smartphone.",
    image: "https://www.androidcentral.com/sites/androidcentral.com/files/styles/mediumplus/public/article_images/2016/03/galaxy-s7-13.jpg",
    color: "gray"
}

test('<AppListItem />', () => {
    const { asFragment } = render(<AppListItem { ...data }/>);
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot(asFragment());
});

test('<AppList /> name', () => {
    const comp = render(<AppListItem  { ...data }/>);
    const name =  comp.getByTestId('name');
    expect(name).toHaveTextContent('Galaxy S7');
});

test('<AppList /> color', () => {
    const comp = render(<AppListItem  { ...data }/>);
    const color =  comp.getByTestId('color');
    expect(color).toHaveTextContent('Color:');
});

test('<AppList /> image', () => {
    const comp = render(<AppListItem  { ...data }/>);
    const image =  comp.getByTestId('image');
    expect(image.src).toMatch('https://www.androidcentral.com/sites/androidcentral.com/files/styles/mediumplus/public/article_images/2016/03/galaxy-s7-13.jpg');
});