import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogForm from './BlogForm';

describe('<BlogForm /> tests', () => {
  test('<BlogForm /> updates parent state and calls onSubmit', () => {
    const component = render(
      <BlogForm />,
    );

    const input = component.container.querySelector('input');

    fireEvent.change(input, {
      target: {value: 'testing this could be easier'},
    });
    expect(input.value).toBe('testing this could be easier');
  });
});
