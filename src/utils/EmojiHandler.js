import emoji from "../../node_modules/emoji-datasource-apple/emoji.json"
import EmojiCategory from "../components/EmojiCategory"
import EmojiItem from "../components/EmojiItem"

export class EmojiHandler {
    constructor(setCurrentEmoji, setCurrentCategory) {
        this.setCurrentEmoji = setCurrentEmoji
        this.setCurrentCategory = setCurrentCategory
        this.categorizedEmoji = new Map();
        emoji.forEach((e) => {
            if(this.categorizedEmoji.get(e.category) == undefined) {
                this.categorizedEmoji.set(e.category, [e.unified]);
            }
            else {
                this.categorizedEmoji.get(e.category).push(e.unified);
            }
        })
        this.categorizedEmojiWithElements = new Map();
        this.categorizedEmoji.forEach((value, key, map) => {
            this.categorizedEmojiWithElements.set(key, this.generateCategoryEmojis(key, setCurrentEmoji));
        })      
    }

    unifiedToEmoji(unified) {
        output = "";
        unified.split("-").forEach(u => {
            output += String.fromCodePoint(parseInt(u, 16));
        })
        return output;
    }

    generateCategories() {
        let output = []
        let iterator = this.categorizedEmoji.keys()
        let counter = 0 
        let val = iterator.next().value

        while(val != undefined) {
            output.push(<EmojiCategory key={counter} name={val} emoji={this.unifiedToEmoji(this.categorizedEmoji.get(val)[0])} setCurrentCategory={this.setCurrentCategory} />)
            val = iterator.next().value
            counter += 1
        }
        return output
    }

    generateCategoryEmojis(category) {
        let counter = 0
        return this.categorizedEmoji.get(category).map((e) => {
            counter += 1
            return <EmojiItem key={counter} emoji={this.unifiedToEmoji(e)} setCurrentEmoji={this.setCurrentEmoji} /> 
        })
    }

     generateFilteredEmojis(searchText) {
        output = []
        this.categorizedEmoji.forEach((value, key, map) => {
        })
     }

}