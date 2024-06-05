import emoji from "../../node_modules/emoji-datasource-apple/emoji.json"
import EmojiCategory from "../components/EmojiCategory"
import EmojiItem from "../components/EmojiItem"



export class EmojiHandler {
    constructor(setCurrentEmoji, setCurrentCategory) {
        this.setCurrentEmoji = setCurrentEmoji
        this.setCurrentCategory = setCurrentCategory
        this.allEmojis = this.generateAllEmojis()
        this.categorizedEmoji = new Map();
        this.allEmojis.forEach((value, key, map) => {
            if(this.categorizedEmoji.get(key.category) == undefined) {
                this.categorizedEmoji.set(key.category, [value]);
            }
            else {
                this.categorizedEmoji.get(key.category).push(value);
            }
        })
    }

    generateAllEmojis() {
        let output = new Map();
        counter = 0;
        emoji.forEach(e => {
            if(e.category === "Component") return;
            output.set(e, <EmojiItem key={counter} emoji={this.unifiedToEmoji(e.unified)} setCurrentEmoji={this.setCurrentEmoji}/>)
            counter += 1;
        })
        return output
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
            output.push(<EmojiCategory key={counter} name={val} setCurrentCategory={this.setCurrentCategory} />)
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