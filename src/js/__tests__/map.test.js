import {ErrorRepository} from '../app'

test.each([
    [100, 'error'], [200, 'fatalError']
])('translae error', (code, expected) => {
    const newError = new ErrorRepository() 
    const result = newError.translate(code)
    expect(result).toEqual(expected);
  });