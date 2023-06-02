const addToDb = id => {
    let jobCart = {}
    // get previous data from loacal Storage
    const storedCart = localStorage.getItem('job')
    if (storedCart) {
        jobCart = JSON.parse(storedCart)
    }

    //add Quantity
    const quantity = jobCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        jobCart[id]=newQuantity
    }else{
        jobCart[id]=1
    }
    localStorage.setItem('job',JSON.stringify(jobCart))
}

const getStoredCart=()=>{
    let jobCart={}
    // get previous data from loacal Storage
    const storedCart = localStorage.getItem('job')
    if (storedCart) {
        jobCart = JSON.parse(storedCart)
    }
    return jobCart
}
export{addToDb,getStoredCart}