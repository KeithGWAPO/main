const rightDiv = (image) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "rightClass"
    mydiv.innerHTML = `<img src="./${image}" class="imgc">`

    return mydiv
}

export {rightDiv}