const sectwoDiv = (title2, image1, image2, image3, para1, para2, para3, button1, button2, button3) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "sectwoClass"
    mydiv.innerHTML = `<h1 class="title2">${title2}</h1>
                            <div class="container">
                                <ul class="column1">
                                    <li><img src="./${image1}" class="img1"></li>
                                    <li><p class="p2">${para1}</p></li>
                                    <a href="https://solo-leveling.fandom.com/wiki/Bellion"><li><button class="btn1">${button1}</button></li></a>
                                </ul>
                                <ul class="column2">
                                    <li><img src="./${image2}" class="img1"></li>
                                    <li><p class="p2">${para2}</p></li>
                                    <a href="https://solo-leveling.fandom.com/wiki/Beru"><li><button class="btn1">${button2}</button></li></a>
                                </ul>
                                <ul class="column3">
                                    <li><img src="./${image3}" class="img1"></li>
                                    <li><p class="p2">${para3}</p></li>
                                    <a href="https://solo-leveling.fandom.com/wiki/Igris"><li><button class="btn1">${button3}</button></li></a>
                                </ul>
                            </div>
                        `

    return mydiv
}

export {sectwoDiv}