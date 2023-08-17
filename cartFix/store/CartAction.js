import { cartAction } from "./CartSlice";
import { uiActions } from "./UiSlice";

export const fetchCartData=()=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch('https://demoredux-f7405-default-rtdb.firebaseio.com/cart.json');
              if(!response.ok){
                throw new Error('failed to fetch data');
              }
              const data = await response.json();
              
              return data;
        }  
        try{
        const cartData =  await fetchData();
             
        dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }
        )
      );
        } catch(error){
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'fetching cart data failed!',
                  })
                  );
        }
     }
}
export const sendCartData =(cartData)=>{
    return async (dispatch)=>{
            dispatch(
                uiActions.showNotification({
                  status: 'pending',
                  title: 'Sending...',
                  message: 'Sending cart data!',
                })
              );

              const sendRequest = async()=>{
                const response = await fetch(
                    'https://demoredux-f7405-default-rtdb.firebaseio.com/cart.json',
                    {
                      method: 'PUT',
                      body: JSON.stringify({
                        items : cartData.items,
                        totalQuantity : cartData.totalQuantity
                      }),
                    }
                  );
            
                  if (!response.ok) {
                    throw new Error('Sending cart data failed.');
                  }
              }
              try{
             await sendRequest();
              dispatch(
                uiActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sent cart data successfully!',
                })
              );
            }catch(error){
                dispatch(
                    uiActions.showNotification({
                        status: 'error',
                        title: 'Error!',
                        message: 'Sending cart data failed!',
                      })
                      );
            }
    }
}
