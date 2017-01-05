import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const defaultCourse = {
      id: '',
      title: '',
      watchHref: '',
      authorId: '',
      length: '',
      category: ''
    };
    const props = {
      actions: {
        saveCourse: () => { return Promise.resolve(); }
      },
      authors: [],
      course: defaultCourse
    };
    const component = mount(<ManageCoursePage { ...props } />);
    const saveButton = component.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');

    saveButton.simulate('click');
    const errorMessage = component.state().errors.title;
    expect(errorMessage).toBe('Title must be at least 5 characters.');
  });
});
