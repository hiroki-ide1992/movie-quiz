export type maruBatuType = {
  id: number
  category: string,
  answer: number,
  text: string,
}

export type turnType = {
  id: number
  category: string,
  folder: string,
  answer: string,
  text: string
}

export type videoType = {
  id: number
  category: string,
  thumb: string,
  folder: string,
  answer: number,
  text: string,
  answerText01: string,
  answerText02: string,
  answerText03: string,
  answerText04: string,
}

export type manyType = {
  id: number
  category: string,
  folder: string,
  answer: string,
  title: string,
  text: string
}
