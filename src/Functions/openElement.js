

export function openElement(obj){
    setTimeout(() => {
        let sheet = document.createElement("div")
        sheet.id = 'sheet'
        sheet.innerHTML = obj.innerHTML
        const container = document.getElementById('container')
        container.append(sheet)
        obj.open = true;
    }, 1500)
    

}