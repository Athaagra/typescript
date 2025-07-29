// method -> objecct
// function -> window, global

const book = {
    title:"The title",
    read(){
      console.log(this)
    }
}

book.stopreading = function (){
    console.log(this)
}

book.stopreading();

function watchmovie(){
  console.log(this)
}

watchmovie();


book.read()
// 1st way of using a function
const book = {
    title: "The Title",
    authors: ["John","Mark","Rob"],
    read(){
        console.log(this)
    },

    printAuthors(){
        this.authors.forEach(function (author:string)){
            console.log(this.title,' - ',author)
        }, this)
    }
}

book.printAuthors()
// 2nd way of using a function (arrow)
const book = {
    title: "The Title",
    authors: ["John","Mark","Rob"],
    read(){
        console.log(this)
    },

    printAuthors(){
        this.authors.forEach((author:string)=>{
            console.log(this.title,' - ',author)
        })
    }
}

book.printAuthors()
