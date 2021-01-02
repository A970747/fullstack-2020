import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Blog from './Blog';
import Togglable from './Togglable';

describe('testing Blog component', () => {
  let component;
  const blog = {
    title: 'Test Blog',
    author: 'Matt Jackson',
    url: 'www.testingURL.com',
    likes: 0,
  };

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel='show'>
        <Blog blog={blog} />
      </Togglable>,
    );
  });

  test('renders content', () => {
    expect(component.container).toHaveTextContent('Test Blog');

    const element = component.getByText('Test Blog');
    expect(element).toBeDefined();

    const div = component.container.querySelector('.blog');
    expect(div).toHaveTextContent('Test Blog');
  });
});
