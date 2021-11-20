
export default function convertMapToString(mapArray){
    let result = "";
    mapArray.forEach(
        (key,value) => {
            let format = value + "(" + key +")\n";
            result += format.toString();
        }
    );
    return result;
}