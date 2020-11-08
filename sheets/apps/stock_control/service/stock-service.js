//
// /* todo estratégia para metodos privados
//   function Restaurant() {
//     var myPrivateVar;
//
//     var private_stuff = function() {  // Only visible inside Restaurant()
//         myPrivateVar = "I can set this here!";
//     }
//
//     this.use_restroom = function() {  // use_restroom is visible to all
//         private_stuff();
//     }
//
//     this.buy_food = function() {   // buy_food is visible to all
//         private_stuff();
//     }
// }
// * */
//
//
 class StockService {

     async getAllStock(){
         return await stockDAO.getAll();
     }


     async saveStockProduct(data){

         try{
             Logger.log("[StockService] received data ", JSON.stringify(data));

             //todo criar um metodo que valida o input
             //todo verificar quanto a empresa tem de saldo para poder debitar

             let array = ["",
                          data.id,
                          data.status,
                          data.qtd,
                          data.value,
                          getDate()];

             await stockDAO.saveStock(array);

             return await renderMessageResponse("primary",
                                         "stock criado");

         }catch (error){

             Logger.log("[productService] received data ", JSON.stringify(data));

             return await renderMessageResponse("danger",
                                         `ocorreu um erro inesperado ${error}`);
         }
     }
 }

 //--------------------------- call from page

 async function saveStockProduct(data){
     return await stockService.saveStockProduct(data);
 }


 const stockService = new StockService();
