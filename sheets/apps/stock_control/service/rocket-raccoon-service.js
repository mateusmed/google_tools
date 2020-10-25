
//import cheerio from 'cheerio';
//import requestPromise from 'request-promise';

/*
var cheerio = require('../lib/cheerio');
var requestPromise = require('../lib/request-promise');
 */

//var XMLHttpRequest = require('../lib/xmlhttprequest');

//import XMLHttpRequest from '../lib/xmlhttprequest'

class RocketRaccoonService{

    /*
    config = {
            name: "boadica",
            host: "https://www.boadica.com.br",
            page: "/pesquisa/cpu_plmae/precos?ClasseProdutoX=5&CodCategoriaX=13&XT=2&XE=2&XG=4",
            content: "div.row.preco.detalhe",
            item: {
                name: "div.pull-left",
                price: "div.col-md-1.preco",
                description: "div.col-md-4.center",
                link: "div.col-md-4.center;div.no-mobile;a"
            },
            incrementPage: 1,
            numberOfPage: 1
        }


    buildPage(site, numberOfPage) {
        site['url'] = site.host.concat(site.page).replace('{page}', numberOfPage);
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

    buildLink(site, $el){

        let $myEl = $el;
        let layers = site.item.link.split(';');

        layers.forEach((item) => {
            $myEl = $myEl.find(item)
        });

        let href = $myEl.attr('href');

        return site.host.concat(href);
    }

    async getItems(site){

        let responseHtml = await requestPromise(site.url);
        let $ = cheerio.load(responseHtml);

        let list = [];
        let itemData = site.item;

        $(site.content).each((idx, el) => {

            let $el = $(el);
            let item = {};

            item["name"] = this.clean($el.find(itemData.name).text());
            item["price"] = this.regexRealPrice(clean($el.find(itemData.price).text()));
            item["description"] = this.clean($el.find(itemData.description).text());
            item["link"] = this.buildLink(site, $el);

            list.push(item);
        });

        return list;
    }

    async getByPages(){


        let list = [];
        let i = this.config.incrementPage;

        while(i <= this.config.numberOfPage){

            this.buildPage(this.config, i);
            let items = await this.getItems(this.config);
            list.push(items);

            i = i + this.config.incrementPage;
        }

        Logger.log("[RESPOSTA - BOA DICA] BOADICA ---->  ", list);
        return list;
    }


 */

    async request_simples(){
        let response = UrlFetchApp.fetch('https://jsonplaceholder.typicode.com/posts', {'muteHttpExceptions': true});
        Logger.log('response ', response);
    }

}


const rocketService = new RocketRaccoonService();