
class RocketRaccoonService{

    constructor() {

        this.config =  {
                "content": "div.row.preco.detalhe",
                "item": {
                    "name": "div.pull-left",
                    "price": "div.col-md-1.preco",
                    "description": "div.col-md-4.center",
                    "link": "div.col-md-4.center;div.no-mobile;a"
                }
        }
    }

    clean(element){
        return element.replace(/\s+/g,' ').trim();
    }

    regexRealPrice(price){

        let found = price.match(new RegExp('R\\$:[\\t ]*((\\d{1,3}\\.?)+(,\\d{2})?)'));

        if(found != null){
            return found[0];
        }

        found = price.match(new RegExp('R\\$ [\\t ]*((\\d{1,3}\\.?)+(,\\d{2})?)'));

        if(found != null){
            return found[0];
        }

        return price;
    }

    async getContent_(url) {
        return UrlFetchApp.fetch(url).getContentText()
    }


    async getItems(url){

        let responseHtml = await this.getContent_(url);
        let $ = Cheerio.load(responseHtml);

        let list = [];
        let itemData = this.config.item;

        $(this.config.content).each((idx, el) => {

            let $el = $(el);
            let item = {};

            item["price"] = this.regexRealPrice(this.clean($el.find(itemData.price).text()));

            list.push(item);
        });

        return list;
    }

}


const rocketRaccoonService = new RocketRaccoonService();