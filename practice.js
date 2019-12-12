const tuna = () => {
    const tunaCatchProbapility = Math.random() * 3
if (tunaCatchProbapility <= 1) {
    return "Sven hooked a tuna! :)"
} else {
    return "Seven came up empty-handed :("
}
}
console.log(tuna())