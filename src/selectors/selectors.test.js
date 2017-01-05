import expect from 'expect';
import { formatAuthorsForSelect } from './selectors';

describe('Author Selectors', () => {
  describe('formatAuthorsForSelect', () => {
    it('should return author data formatted for use in a select input', () => {
      const authors = [
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House'
        },
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen'
        }
      ];
      const authorsExpected = [
        {
          value: 'cory-house',
          text: 'Cory House'
        },
        {
          value: 'scott-allen',
          text: 'Scott Allen'
        }
      ];
      const authorsFormatted = formatAuthorsForSelect(authors);
      expect(authorsFormatted).toEqual(authorsExpected);
    });
  });
});
