import { rightDiv } from "./image.js"
import { leftdiv } from "./info.js"

const data ={
    title1:      "KEITH",
    title2:      "GWAPO",
    para1:      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis harum assumenda tenetur optio aspernatur, dolorum animi voluptates culpa officia nostrum doloremque nulla architecto laboriosam sequi, impedit nesciunt deleniti laborum.",
    para2:      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis harum assumenda tenetur optio aspernatur, dolorum animi voluptates culpa officia nostrum doloremque nulla architecto laboriosam sequi, impedit nesciunt deleniti laborum.",
    button1:    "Home",
    button2:    "View",
    button3:    "Contact Us",
    button4:    "About Us",
    myImage:    "dog.jpg",
}

const{ title1, title2, para1, para2, button1, button2, button3, button4, myImage} = data

container.append(leftdiv(title1, title2, para1, para2, button1, button2, button3, button4))
container.append(rightDiv( myImage))