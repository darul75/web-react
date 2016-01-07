// LIBRARY
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import assert from 'assert';

// COMPONENT
import TodoItem from '../TodoItem';

//const TestUtils = React.addons.TestUtils;

// https://github.com/jesstelford/react-testing-mocha-jsdom

describe('Todo-item component', function() {

  before('render and locate element', function() {
    require('../../../../conf/tests/setup.js');

    const todoItem = {completed:false, text:'hello'};

    // render component <TodoItem>
    const renderedComponent = TestUtils.renderIntoDocument(<TodoItem todo={todoItem} />);

    // Searching for <input> tag within rendered React component
    // Throws an exception if not found
    const inputCheckBoxComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'toggle'
    );

    this.inputElement = inputCheckBoxComponent.getDOMNode();
  });

  it('<input> should be of type "checkbox"', function() {
    assert(this.inputElement.getAttribute('type') === 'checkbox');
  });

  it('<input> should not be checked', function() {
    assert(this.inputElement.checked === false);
  });
});