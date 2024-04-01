var letterContent = `Gửi em 
Quà đã trao tận tay, nhưng lời chúc đương nhiên vẫn phải nói. 
Chúc em 8/3 nụ cười luôn rạng rỡ, vì anh rất thích khi thấy em cười. Mong rằng em có thể suy nghĩ mọi việc đơn giản hơn mọi vấn đề sẽ được giải quyết. Anh muốn mình khi làm gì luôn thông cảm và thấu hiểu cho nhau, và đặc biệt phải chia sẻ với nhau một cách thật nghiêm túc chứ không phải chỉ bày ra vẻ mặt giận dỗi để bắt đối phương hiểu mình như trước nữa. Ngày 8/3 này anh muốn chúng mình cùng nhau đi chơi. Và điều cuối cùng anh muốn nói là văn anh không dài như cách "Anh yêu em ❤️"
\t\t\tEm bé của anh
     \t\t\t\t Quỳnh`;



durationWrite = 40;

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})