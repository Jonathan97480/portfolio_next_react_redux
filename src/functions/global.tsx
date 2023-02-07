
export function textSplit(text: string, limit: number): string {
    if (text.length > limit) {
        return text.substr(0, limit) + '...'
    }
    return text
}