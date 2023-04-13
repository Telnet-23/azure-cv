window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVistCount = () => {
    let count = 30;
    fetch(functionApi).then( response => {
        return response.json()
    }).then( response +>{
        console.log("website called funstion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}