export const productActionCreator = () => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      fetch("http://localhost:3004/shirts")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          //  electronicAction(data, dispatch);

          dispatch({
            type: "SHIRTS",
            payload: data,
          });
        });
    };

    if (getState().productReducer.shirts.length === 0) {
      getElectronicData();
    }
  };
};

export const bagActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const cartArray= getState().productReducer.cart;
      cartArray.push(data)
          

          dispatch({
            type: "CART",
            payload: cartArray,
          });
        
    };

    
      getElectronicData();
    
  };
};

export const wishActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const cartArray= getState().productReducer.wishlist;
      cartArray.push(data)
          

          dispatch({
            type: "WISH",
            payload: cartArray,
          });
        
    };

    
      getElectronicData();
    
  };
};

export const removeWishActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const cartArray= getState().productReducer.wishlist;
      const newcartArray= cartArray.filter((item)=> item.id !== data.id)
          

          dispatch({
            type: "REMOVEWISH",
            payload: newcartArray,
          });
        
    };

    
      getElectronicData();
    
  };
};

export const removeBagActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const cartArray= getState().productReducer.wishlist;
      const newcartArray= cartArray.filter((item)=> item.id !== data.id)
          

          dispatch({
            type: "REMOVEBAG",
            payload: newcartArray,
          });
        
    };

    
      getElectronicData();
    
  };
};

export const filterActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const shirtArray= getState().productReducer.shirts;
      if (shirtArray.length === 15) {
      const newshirtArray= shirtArray.filter((item)=> item.pname === data)
          

          dispatch({
            type: "FILTER",
            payload: newshirtArray,
          });
        }
        else {
          fetch("http://localhost:3004/shirts")
        .then((res) => res.json())
        .then((data) => {

          dispatch({
            type: "SHIRTS",
            payload: data,
          });
        });
        }
        
    };

    
      getElectronicData();
    
  };
};

export const filterCatActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const shirtArray= getState().productReducer.shirts;
      if (shirtArray.length === 15) {
      const newshirtArray= shirtArray.filter((item)=> item.category === data)
          

          dispatch({
            type: "FILTER",
            payload: newshirtArray,
          });
        }
        else {
          fetch("http://localhost:3004/shirts")
        .then((res) => res.json())
        .then((data) => {

          dispatch({
            type: "SHIRTS",
            payload: data,
          });
        });
        }
        
    };

    
      getElectronicData();
    
  };
};

export const filterGenderActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const shirtArray= getState().productReducer.shirts;
      if (shirtArray.length === 15) {
      const newshirtArray= shirtArray.filter((item)=> item.filter === data)
          

          dispatch({
            type: "FILTER",
            payload: newshirtArray,
          });
        }
        else {
          fetch("http://localhost:3004/shirts")
        .then((res) => res.json())
        .then((data) => {

          dispatch({
            type: "SHIRTS",
            payload: data,
          });
        });
        }
        
    };

    
      getElectronicData();
    
  };
};

export const sortActionCreator = (data) => {
  return (dispatch, getState) => {
    const getElectronicData = () => {
      console.log("API is Called");
      const shirtArray= getState().productReducer.shirts;

      if (data==="lth"){
      shirtArray.sort(function(a,b){
        return Number(b.price.substring(3))- Number(a.price.substring(3))
      })
      }
      else {
      shirtArray.sort(function(a,b){
        return Number(a.price.substring(3))- Number(b.price.substring(3))
      })
      }
          

          dispatch({
            type: "SORT",
            payload: shirtArray,
          });
        
    };

    
      getElectronicData();
    
  };
};