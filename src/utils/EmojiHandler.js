import emoji from "../../node_modules/emoji-datasource-apple/emoji.json"
import EmojiCategory from "../components/EmojiCategory"
import EmojiItem from "../components/EmojiItem"

export class EmojiHandler {
    constructor() {
        this.categorizedEmoji = new Map()
        emoji.forEach((e) => {
            if(this.categorizedEmoji.get(e.category) == undefined) {
                this.categorizedEmoji.set(e.category, [e.unified.split("-")[0]])
            }
            else {
                this.categorizedEmoji.get(e.category).push(e.unified.split("-")[0])
            }
        })
    }

    unifiedToEmoji(unified) {
        return String.fromCodePoint(parseInt(unified.split("-")[0], 16))
    }

    generateCategories(setCurrentCategory) {
        let output = []
        let iterator = this.categorizedEmoji.keys()
        let counter = 0 
        let val = iterator.next().value

        while(val != undefined) {
            output.push(<EmojiCategory key={counter} name={val} emoji={this.unifiedToEmoji(this.categorizedEmoji.get(val)[0])} setCurrentCategory={setCurrentCategory} />)
            val = iterator.next().value
            counter += 1
        }
        return output
    }

    generateCategoryEmojis(category, setCurrentEmoji) {
        let counter = 0
        return this.categorizedEmoji.get(category).map((e) => {
            counter += 1
            return <EmojiItem key={counter} emoji={this.unifiedToEmoji(e)} setCurrentEmoji={setCurrentEmoji} /> 
        })
    }

}