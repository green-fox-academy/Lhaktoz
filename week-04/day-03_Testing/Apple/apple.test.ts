'use strict';

import * as test from 'tape';
import { Apple} from './Apple';

test ('write apple', t => {
  let myObject = new Apple();
  const actual = myObject.getAppl();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});