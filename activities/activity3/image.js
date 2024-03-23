const rightDiv = (image) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "RightClass"
    mydiv.innerHTML = `<img src="./image/${image}">`

    return mydiv
}

export {rightDiv}