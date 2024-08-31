export const titleToID = (title) => {
    return (title.replace(" ", ""),(Math.random()).toString(36).replace(".", ""))
}