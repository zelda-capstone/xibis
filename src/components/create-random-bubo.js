export default function createRandomBubo() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
  const accessories = [
    'antennae',
    'hat',
    'glasses',
    'monobrow',
    'bow',
    'sunglasses',
    'eyestalk',
  ]
  const personalityOne = [
    'shy',
    'stubborn',
    'proud',
    'assertive',
    'outspoken',
    'spontaneous',
    'soft-spoken',
  ]
  const personalityTwo = [
    'brave',
    'kind',
    'confident',
    'thoughtful',
    'nurturing',
    'charismatic',
    'patient',
  ]

  const getRandomTrait = (array) => {
    const index = Math.floor(Math.random() * Math.floor(array.length))
    return array[index]
  }

  const randomBubo = {
    color: getRandomTrait(colors),
    accessory: getRandomTrait(accessories),
    personality: [
      getRandomTrait(personalityOne),
      getRandomTrait(personalityTwo),
    ],
  }

  return randomBubo
}
