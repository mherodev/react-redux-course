import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      { title: 'a' },
      { title: 'b' }
    ];
    const newCourse = { title: 'c' };
    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('a');
    expect(newState[1].title).toEqual('b');
    expect(newState[2].title).toEqual('c');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      { id: 'a', title: 'a' },
      { id: 'b', title: 'b' },
      { id: 'c', title: 'c' }
    ];
    const updatedCourse = { id: 'c', title: 'd' };
    const action = actions.updatedCourseSuccess(updatedCourse);
    const newState = courseReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('a');
    expect(newState[1].title).toEqual('b');
    expect(newState[2].title).toEqual('d');
  });
});
