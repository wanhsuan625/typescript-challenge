interface Product {
    id: string;
    name: string;
    price: number;
}

/**
 * 任務：實作一個函式 `createShoppingCart`，該函式應該能夠創建一個購物車。
 * 範例：createShoppingCart() 應該回傳一個購物車物件，該物件應該有 addItem、getTotalPrice、getItemCount 和 clear 等方法
 * @returns - 回傳一個購物車物件
 */
export function createShoppingCart() {
    let items: Product[] = [];

    // 新增物品至購物車
    function addItem(item: Product): void {
        items.push(item);
    }
    /**
     * getTotalPrice 方法：計算購物車中所有商品的總價
     * @returns - 回傳購物車中所有商品的總價
     * 範例：getTotalPrice() 應該回傳 300，假設購物車中有兩個商品，價格分別為 100 和 200
     */

    // 購物車所有品項 總金額
    function getTotalPrice(): number {
        let sum = 0;           // 給定初始值0， 這樣即使購物車空空，也會回傳 0
        items.forEach( item => {
            sum += item.price;
        })

        return sum;
    }

    // 計算 品項總數
    function getItemCount(): number {
        return items.length;
    }

    // 清空購物車
    function clear(): void {
        items = [];
    }

    return {
        addItem,
        getTotalPrice,
        getItemCount,
        clear
    };
}