import { bannedWords } from "./badWords"

const escapeRegex = (word: string) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const positiveReplacements: Record<string, string> = {
    "jawa hama": "jawa hebat",
    "jawir": "jawa inspiratif"
}

export const sensor = (text: string) => {
    let result = text
    bannedWords.forEach((word: string) => {
        const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, "gi")
            if (positiveReplacements[word]) {
                result = result.replace(regex, positiveReplacements[word])
            } else {
                result = result.replace(regex, "*".repeat(word.length))
            }
        })
    return result
}
