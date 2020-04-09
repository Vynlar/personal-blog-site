export const possibleColors = [
  "orange",
  "teal",
  "green",
  "blue",
  "cyan",
  "purple",
  "pink",
]

export const getColorByIndex = (index: number) =>
  possibleColors[index % possibleColors.length]
