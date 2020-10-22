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
// class StockService {
//
//     async getAllProducts(){
//         return await productDAO.getAll();
//     }
//
//     async getProductById(productId){
//         return await productDAO.getById(productId);
//     }
//
//     async invalidForm(data){
//
//         let totalProductValue = (data.qtd * data.ppuc);
//
//         let totalInvestment = data.investment.reduce(function (total, item) {
//             return (total + item.value);
//         }, 0);
//
//         if(totalInvestment < totalProductValue){
//             return true;
//         }
//
//         return false;
//     }
//
//     isUpdate(data){
//         return (data.id !== "" && data.id !== undefined);
//     }
//
//     async updateProduct(data){
//
//         //todo atualização não considera o company mantem o mesmo, bloquiar o select item no frontend
//         Logger.log("[productService] edição ");
//
//         let productDTO = await productDAO.getById(data.id);
//         let cashOfCompany = await financeDao.getFinanceOfUser(productDTO.company.id);
//
//         Logger.log("[productService] cashOfCompany ", cashOfCompany);
//         Logger.log("[productService] productDTO ", productDTO);
//
//         if(data.qtd > productDTO.quantity){
//
//             let newQuantityProduct = data.qtd - productDTO.quantity;
//             let cost = newQuantityProduct * data.ppuc;
//
//             Logger.log("[productService] cost ", cost);
//
//             if(cashOfCompany >= cost){
//
//                 await financeDao.save(["",
//                                                      productDTO.company.id,
//                                                      -cost,
//                                                      getDate(undefined)]);
//             }else{
//
//                 return await renderMessageResponse("warning",
//             `saldo insuficiente, empresa ${productDTO.company.name} possui: ${cashOfCompany}`);
//             }
//
//         }else{
//
//             //todo essa mensagem aparece quando a quantidade não é alterada
//             return await renderMessageResponse("danger",
//                 `não é possível reduzir produtos quantidade atual: ${productDTO.quantity}`);
//         }
//
//         //todo e se alterar o valor de unidade compra?
//
//
//         let productArrayValues = this.createArrayOfForm(data)
//         await productDAO.updateProduct(productArrayValues);
//
//         return await renderMessageResponse("primary",
//             "produto atualizado");
//     }
//
//     createArrayOfForm(data){
//         return [data.id,
//                 data.name,
//                 data.qtd,
//                 data.ppuc,
//                 data.ppuv,
//                 data.description,
//                 data.companyId];
//     }
//
//     async createNewProduct(data){
//
//
//         Logger.log("[productService] savando ");
//
//         let cost = (data.qtd * data.ppuc);
//
//         let cashOfCompany = await financeDao.getFinanceOfUser(data.companyId);
//
//         Logger.log("[productService] cashOfCompany ", cashOfCompany);
//
//         if(cashOfCompany >= cost){
//
//             await financeDao.save(["",
//                                                  data.companyId,
//                                                  -cost,
//                                                  getDate(undefined)]);
//
//             let productArrayValues = this.createArrayOfForm(data)
//
//             await productDAO.saveProduct(productArrayValues);
//             return await renderMessageResponse("primary",
//                 "produto criado");
//         }
//
//         return await renderMessageResponse("warning",
//             `saldo insuficiente, empresa possui: ${cashOfCompany}`);
//     }
//
//     async saveOrUpdateProductForm(data){
//
//         try{
//             Logger.log("[productService] received data ", JSON.stringify(data));
//
//             //todo criar um metodo que valida o input
//
//             if(data.companyId === "Escolha a empresa"){
//                 return await renderMessageResponse("warning",
//                     `Selecione uma empresa`);
//             }
//
//             if(this.isUpdate(data)){
//                 return await this.updateProduct(data);
//             }
//
//             return await this.createNewProduct(data);
//
//         }catch (error){
//
//             Logger.log("[productService] received data ", JSON.stringify(data));
//
//             return await renderMessageResponse("danger",
//                                         `ocorreu um erro inesperado ${error}`);
//         }
//     }
// }
//
// //--------------------------- call from page
//
// async function saveOrUpdateProduct(data){
//     return await stockService.saveOrUpdateProductForm(data);
// }
//
//
// const stockService = new StockService();
