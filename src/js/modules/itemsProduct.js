import ItemsService from "./serverItems";
import popap from "./popap";

function itemsProduct(){

    const parentItems = document.querySelector('.parent-items');
    

    const itemsService = new ItemsService();

    function onData (){
        itemsService.getAllItems()
                        .then(res => {
                            console.log(res)
                            addCard(res)
                        })
        
    }

    // data.forEach(item => console.log(item))

    const addCard = (data) => {
        
        data.forEach(item => {
            const itemCard = document.createElement('li');
            itemCard.classList.add('item');
            parentItems.append(itemCard);

            itemCard.innerHTML = `
                <img src=${item.thumbnail} alt="img car">
            `;
        })
        popap(data);
    }

    const onError = () => {
        console.log(1)
    }

    onData();   
}
export default itemsProduct;