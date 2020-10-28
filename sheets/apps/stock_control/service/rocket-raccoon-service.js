
class RocketRaccoonService{

    constructor() {

        this.config =  {
                "content": "div.row.preco.detalhe",
                "item": {
                    "name": "div.pull-left",
                    "price": "div.col-md-1.preco",
                    "description": "div.col-md-4.center",
                    "link": "div.col-md-4.center;div.no-mobile;a"
                },
                "limitItens": 5
        }
    }

    clean(element){
        return element.replace(/\s+/g,' ').trim();
    }

    //todo extrair apenas numericos
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

    cleanPrice(price){

        let newPrice = price.replace("R$ ", "");
            newPrice = newPrice.replace(".", "");
            newPrice = newPrice.replace(",", ".");

        return newPrice;
    }


    async getContent_(url) {
        return UrlFetchApp.fetch(url).getContentText()
    }


    async getItems(url){

        let responseHtml = await this.getContent_(url);
        let $ = Cheerio.load(responseHtml);

        let list = [];
        let itemData = this.config.item;

        let limitItens = this.config.limitItens;

        $(this.config.content).each((idx, el) => {

            if(idx === limitItens) {
                // equivalente ao braak no jquery
                return false;
            }

            let $el = $(el);
            let price = this.cleanPrice(this.clean($el.find(itemData.price).text()));
            list.push(price);
        });

        Logger.log('list -> ', list);
        return list;
    }

}


const rocketRaccoonService = new RocketRaccoonService();