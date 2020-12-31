import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Blog from './Blog';

test('renders content', () => {
  const blog = {
    title: 'Test Blog',
    author: 'Matt Jackson',
    url: 'www.testingURL.com',
    likes: 0,
  };

  const component = render(
    <Blog blog={blog} />,
  );

  expect(component.container).toHaveTextContent(
    'Test Blog',
  );

  const element = component.getByText(
    'Test Blog',
  );
  expect(element).toBeDefined();

  const div = component.container.querySelector('.blog');
  expect(div).toHaveTextContent(
    'Test Blog',
  );
});
