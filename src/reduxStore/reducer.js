const initState = {
    items:[
        {
            productId: 1,
            productName: "Album 1",
            altPrice: 24.99,
            price: 12.99,
            url: "Images/Album 1.png",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus culpa sed repellendus. Tempora ipsa ut in harum consequuntur nam, debitis temporibus unde commodi distinctio fugiat pariatur!"
        },
        {
            productId: 2,
            productName: "Album 2",
            altPrice: 19.99,
            price: 14.99,
            url: "Images/Album 2.png",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus et vitae voluptas nisi reiciendis ex quo nobis mollitia illum excepturi asperiores, pariatur unde possimus quidem tenetur aut cum cumque corrupti"
        },
        {
            productId: 3,
            productName: "Album 3",
            altPrice: 12.99,
            price: 9.99,
            url: "Images/Album 3.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas est voluptatum asperiores autem molestiae quia perspiciatis accusamus repellat repellendus, veritatis qui hic neque quis mollitia vitae"
        },
        {
            productId: 4,
            productName: "Album 4",
            altPrice: 30.99,
            price: 19.99,
            url: "Images/Album 4.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt ad eius laborum deleniti omnis facere. Esse necessitatibus aspernatur tempore iure dolorem, officia laboriosam, possimus dolorum!"
        }
    ],
    cart:[
    
    ],
    figures:{
        discount: '',
        disabled: false,
        subtotal: 0,
        pickupSavings: -3.85,
        taxes: 0,
        estimatedTotal: 0,
        totalQty: 0
    }
   
}

export default function rootReducer(state=initState, action){
    let estimatedTotal;
    switch(action.type){
        case 'CALC_SUB_TOTAL':
            const getPrice = state.cart.map(cartItem => {
                const match = state.items.find(item=>item.productId === cartItem.productId)
                const newObj = {...cartItem}
                newObj.price = match.price
                return newObj
            })
            const totalQty = getPrice.reduce((a,b)=>{
                return a + b.qty
            },0)
            const sum = getPrice.reduce((a,b)=>{
                return a + (b.qty * b.price)
            },0)
            return {
                ...state, figures: {...state.figures, subtotal:sum, totalQty}
            }

        case 'APPLY_DISCOUNT':
            estimatedTotal = 0.9*state.figures.estimatedTotal
            return {
                ...state, figures: {...state.figures, disabled:true, discount: action.payload, estimatedTotal}
            }

        case 'CALC_EST_TOTAL':
            const {subtotal, pickupSavings} = state.figures
            const taxes = 7.5*(subtotal+pickupSavings)/ 100
            estimatedTotal = subtotal + pickupSavings + taxes 
            return{
                ...state, figures: {...state.figures, taxes, estimatedTotal}
            }

        case 'ADD_TO_CART':
            return{
                ...state, cart:state.cart.concat({productId: action.payload, qty: 1})
            }     

        case 'REMOVE_FROM_CART':
            const filtered = [...state.cart].filter(item => item.productId !== action.payload)
            return{
                ...state, cart:[...filtered]
            }  
                  
        case 'UPDATE_CART':
            const {productId} = action.payload
            const index = [...state.cart].findIndex(product=> product.productId === productId)
            return{
                ...state, cart:[...state.cart.slice(0,index), action.payload, ...state.cart.slice(index+1)]
            }      

        default:
            return state
    }
    
}