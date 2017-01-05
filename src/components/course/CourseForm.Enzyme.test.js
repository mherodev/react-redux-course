import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const component = setup();
    const formCount = component.find('form').length;
    expect(formCount).toBe(1);
    const title = component.find('h1').text();
    expect(title).toBe('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const component = setup(false);
    const submitButton = component.find('input');
    expect(submitButton.props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const component = setup(true);
    const submitButton = component.find('input');
    expect(submitButton.props().value).toBe('Saving...');
  });
});

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm { ...props } />);
}
