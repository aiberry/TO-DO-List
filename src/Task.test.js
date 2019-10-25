import React from 'react';
import Task from './Task.js';
import renderer from "react-test-renderer";
import { initStoreState } from './constants/index.js'

describe("Task component", () => {
  test("snapshot renders", () => {
    const component = renderer
      .create(<Task task={initStoreState[0]} 
                    onClick={()=>console.log('onClick')} />);
    const tree = component.toJSON();
    // instance.handleClick();
    expect(tree).toMatchSnapshot();
  });
});
