

export function openElement(obj){
    setTimeout(() => {
        let sheet = document.createElement("div")
        sheet.id = 'sheet'
        sheet.textContent = obj.name
        const container = document.getElementById('container')
        container.append(sheet)
        obj.open = true;
    }, 1500)
    

}