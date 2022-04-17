class Products{
    render(){
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price, description, quantity, sold}) => {
            htmlCatalog += `
                <li >
                    <div class="theItem">
                        <!--это фотография обложки товара-->
                        <div  class="itemImg">
                            <img src="${img}" alt="image of a game">
                        </div>

                                                    <!--это блок с информацией о товаре. его взяла как отедльный блок, 
                                                    чтобы все элементы, которые в нем находятся просто были спава от картинки-->
                        <div class="itemInfo">
                            <div class="fistLineInfo">
                                <span class="gameName">${name}</span>
                                <span class="gamePrice">${price}</span>

                                <div class="editBtn">
                                    <button class="editBtn"> <img src="img/edit.png" class="editBtnImg"></button>
                                </div>
                            </div>

                                        <!--filters. не настраивала, тк эта функция скорее всего будет основана на той функции
                                        которая позволяет отображать на странице только товары с какой же характеристикой-->
                            <div>
                                <ul>
                                    <li>filter</li>
                                </ul>
                            </div>

                                        <!--просто отступ между фильтрами и информацией о количествестве, 
                                        который удобнее было прописать здесь в не в css-->
                            <br/> 

                                                        <!--инфа про количество на складе и сколько было продано-->
                            <div class="quantityInfo">
                                <p>Quantity: <span>${quantity}</span></p>
                                <p>Sold: <span>${sold}</span></p>
                            </div>
                            
                                        <!--открывает окно с комментариями -->
                            <a href="#" class="commentsShowBtn">Comments</a>
                        </div>
                    </div>
                                    <!--просто линия, которая должна быть между товарами в списке -->
                    <div class="lineAfterAnItem"></div>
                <li>
            `
        })

        const html = `
            <ul class="product">
                ${htmlCatalog}
            </ul>
        `

        ROOT_PRODUCTS.innerHTML = html;
    
    }
}


const products = new Products();
products.render();

