const getHash = () => {
    if(location.hash){
        return location.hash.replace("#/", "")
    }else{
        return "/";
    }
} 

export default getHash;