const bannedWords : string[] = [
    "asu", "jancuk", "jancok", 
    "ndasmu", "picek", "edan", 
    "bodho", "geblek", "kontol"
]

export const sensor = (text : string) => {
    let result = text
    bannedWords.forEach((word : string) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi")
        result = result.replace(regex,"*".repeat(word.length))
    })
    return result
}

