import _ from 'lodash';

const getRandomNumber = (x = 0, y = 100) => _.random(x, y);
export default getRandomNumber;
