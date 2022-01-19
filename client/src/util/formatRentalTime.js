export default function formatRentalTime(mapArray){
    let result = "";
    mapArray.forEach(
        (key,value) => {
            let format = key + " " + value + " "; 
            result += format.toString();
        }
    );
    return result;
}