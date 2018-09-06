import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

const adapter = new Adapter();
Enzyme.configure({ adapter });

import AllUnicorns from '../src/AllUnicorns';
import UnicornCard from '../src/UnicornCard';

describe('React', () => {
  const unicorns = [
    {
      name: 'Lady Rainicorn',
      imageUrl:
        'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f6/Jake_w_lady.png/revision/latest?cb=20120729200735',
      age: 18,
    },
    {
      name: 'Quirin',
      imageUrl:
        'https://about-mythical-creatures.weebly.com/uploads/9/3/4/7/9347709/7353641_orig.jpg',
      age: 5000,
    },
    {
      name: 'Dabby',
      imageUrl:
        'https://i.pinimg.com/originals/f4/a0/e8/f4a0e8658deda92fa9b21b003f148853.jpg',
      age: 8,
    },
  ];
  describe('<AllUnicorns />', () => {
    let allUnicorns;

    beforeEach('Create Component', () => {
      allUnicorns = shallow(<AllUnicorns />);
    });
    xit('has a `unicorns` field on state', () => {
      expect(allUnicorns.state().unicorns).to.exist;
      expect(allUnicorns.state().unicorns.to.be.an('array'));
    });
    xit('passes a prop called `unicorn` with a unicorn to a `UnicornCard` component', () => {
      expect(allUnicorns.find(UnicornCard).props().unicorn).to.be.deep.equal(
        unicorn
      );
    });
  });
});
