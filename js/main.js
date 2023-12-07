import {DESCRIPTIONS, LIKES, AVATAR, MESSAGES, NAMES } from './mock/data.js';
import { getRandomIntegerInRange } from './utils/utils.js';

const SIMILAR_USERS_COUNT = 25;
const COMMENTS_COUNT = 7;
const COMMENTS_ID = SIMILAR_USERS_COUNT * COMMENTS_COUNT;

const arrayIndex = Array.from({ length: COMMENTS_ID}, (value, index) => {
  index++;
  return index;
});

const creatComment = () => {
  const randomIndex = getRandomIntegerInRange(0, arrayIndex.length-1);
  const randomValue = arrayIndex[randomIndex];
  arrayIndex.splice(randomIndex, 1);
  return {
    id: randomValue,
    avatar: `img/avatar-${getRandomIntegerInRange(...AVATAR)}.svg`,
    messages: MESSAGES[getRandomIntegerInRange(0, MESSAGES.length-1)],
    names: NAMES[getRandomIntegerInRange(0, NAMES.length-1)],
  };
};

const creatUser = (value, index) => {
  const similarComments = Array.from({ length: getRandomIntegerInRange(0, COMMENTS_COUNT)}, creatComment);
  index++;
  return {
    id: index,
    url: `photos/${index}.jpg`,
    descriptions: DESCRIPTIONS[getRandomIntegerInRange(0, DESCRIPTIONS.length-1)],
    likes: getRandomIntegerInRange(...LIKES),
    comments: similarComments,
  };
};

const simsilarUsers = Array.from({ length: SIMILAR_USERS_COUNT}, creatUser);

// eslint-disable-next-line no-console
console.log(simsilarUsers);
