function globalObjects(){
    //Cloths Objects
    let firstCloth = {
        title:"Mens Dress <br/> 2021-2022 New Collection",
        price:125 + "$",
        brand:"Steffano Ricci",
        url:"url('./images./1.jpg')"
    }
    let secondCloth = {
        title:"Mens Dress || 2021 New Collection",
        price:75 + "$",
        brand:"Polo Italia",
        url:"url('./images./2.jpg')"
    }
    let thirdCloth = {
        title:"Espany Mode || 2019<br/>New Collection",
        price:255 + "$",
        brand:"Levis Espany",
        url:"url('./images./3.jpg')"
    }
    let fourthCloth = {
        title:"Espany Mode || 2019<br/>New Collection",
        price:255 + "$",
        brand:"Levis Espany",
        url:"url('./images./4.jpg')"
    }
    function first(){
        let fcst = document.querySelector('.cloths-first-span-title').innerHTML = firstCloth.title  + "<br/>" + firstCloth.price + "<br/>" + firstCloth.brand
        let cfs = document.querySelector('.cloths-one')
        cfs.style.background = firstCloth.url
        cfs.style.backgroundSize = "contain"
        cfs.style.backgroundRepeat = "no-repeat"
    }

    first()

    function second(){
        let scst = document.querySelector('.cloths-second-span-title').innerHTML = secondCloth.title  + "<br/>" + secondCloth.price + "<br/>" + secondCloth.brand
        let css = document.querySelector('.cloths-two')
        css.style.background = secondCloth.url
        css.style.backgroundSize = "contain"
        css.style.backgroundRepeat = "no-repeat"
    }
    second()

    function third(){
        let tcst = document.querySelector('.cloths-third-span-title').innerHTML = thirdCloth.title  + "<br/>" + thirdCloth.price + "<br/>" + thirdCloth.brand
        let tss = document.querySelector('.cloths-tree')
        tss.style.background = thirdCloth.url
        tss.style.backgroundSize = "contain"
        tss.style.backgroundRepeat = "no-repeat"
    }
    third()

    function fourth(){
        let fcst = document.querySelector('.cloths-fourth-span-title').innerHTML = fourthCloth.title  + "<br/>" + fourthCloth.price + "<br/>" + fourthCloth.brand
        let fss = document.querySelector('.cloths-four')
        fss.style.background = fourthCloth.url
        fss.style.backgroundSize = "contain"
        fss.style.backgroundRepeat = "no-repeat"
    }
    fourth()
}
    globalObjects()
    function sizes(){
        let getOrange = document.querySelector('.orange')
        let firstdollar = 120;
        let seconddollar = 75;
        let thirddollar = 255;
        let fourthdollar = 255;

        let getresult = document.querySelector('.result').innerHTML
        let res;
        let createIcon = document.createElement('i')
        createIcon.setAttribute('class','fa fa-remove')
        createIcon.style.fontSize = "36px"
        createIcon.style.color = "black"
        let one = document.querySelector('.first-size-container-m').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-first').innerText
            let get = document.querySelector('.text-one')
            get.innerHTML = getoneinner + "Your Size Is <b>M</b>" + "<br>" + "The Price of this Cloths are "+ " " + firstdollar + "$" 
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
           
        })

        let two = document.querySelector('.first-size-container-l').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-first').innerText
            let get = document.querySelector('.text-one')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>L</b>" + "<br>" + "The Price of this Cloths are" + " " + firstdollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let tree = document.querySelector('.first-size-container-xl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-first').innerText
            let get = document.querySelector('.text-one')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XL</b>" + "<br>" + "The Price of this Cloths are" + " " + firstdollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let four = document.querySelector('.first-size-container-xxl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-first').innerText
            let get = document.querySelector('.text-one')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XXL</b>" + "<br>" + "The Price of this Cloths are" + " " + firstdollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })
        //
        let five = document.querySelector('.second-size-container-m').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-second').innerText
            let get = document.querySelector('.text-two')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>M</b>" + "<br>" + "The Price of this Cloths are" + " " + seconddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let six = document.querySelector('.second-size-container-l').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-second').innerText
            let get = document.querySelector('.text-two')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>L</b>" + "<br>" + "The Price of this Cloths are" + " " + seconddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let seven = document.querySelector('.second-size-container-xl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-second').innerText
            let get = document.querySelector('.text-two')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XL</b>" + "<br>" + "The Price of this Cloths are" + " " + seconddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let eight = document.querySelector('.second-size-container-xxl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-second').innerText
            let get = document.querySelector('.text-two')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XXL</b>" + "<br>" + "The Price of this Cloths are" + " " + seconddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })
        //
        let nine = document.querySelector('.third-size-container-m').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-tree').innerText
            let get = document.querySelector('.text-tree')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>M</b>" + "<br>" + "The Price of this Cloths are" + " " + thirddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let ten = document.querySelector('.third-size-container-l').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-tree').innerText
            let get = document.querySelector('.text-tree')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>L</b>" + "<br>" + "The Price of this Cloths are" + " " + thirddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let eleven = document.querySelector('.third-size-container-xl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-tree').innerText
            let get = document.querySelector('.text-tree')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XL</b>" + "<br>" + "The Price of this Cloths are" + " " + thirddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let twoeleve = document.querySelector('.third-size-container-xxl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-tree').innerText
            let get = document.querySelector('.text-tree')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XXL</b>" + "<br>" + "The Price of this Cloths are" + " " + thirddollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })
        //
        let thirtee = document.querySelector('.fourth-size-container-m').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-four').innerText
            let get = document.querySelector('.text-four')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>M</b>" + "<br>" + "The Price of this Cloths are" + " " + fourthdollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let fourtee = document.querySelector('.fourth-size-container-l').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-four').innerText
            let get = document.querySelector('.text-four')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>L</b>" + "<br>" + "The Price of this Cloths are" + " " + fourthdollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let fivetee = document.querySelector('.fourth-size-container-xl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-four').innerText
            let get = document.querySelector('.text-four')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XL</b>" + "<br>" + "The Price of this Cloths are" + " " + fourthdollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })

        let sixtee = document.querySelector('.fourth-size-container-xxl').addEventListener('click',()=>{
            let getoneinner = document.querySelector('.cloths-span-four').innerText
            let get = document.querySelector('.text-four')
            get.innerHTML = getoneinner + "<br/>" + "Your Size Is <b>XXL</b>" + "<br>" + "The Price of this Cloths are" + " " + fourthollar + "$"
            getOrange.style.visibility = "visible"
            get.addEventListener('click',()=>{
                get.innerHTML = ""
            })
        })
    }
    sizes()

   function otherFunctions(){
    let btn = document.querySelector('.remove')
    let modal = document.querySelector('.modal-container')
    let icon = document.querySelector('i').addEventListener('click',()=>{
        btn.style.display = "block"
        modal.style.display = "block"
        btn.addEventListener('click',()=>{
            modal.style.display = "none"
            btn.style.display = "none"
        })
    })
   }
   otherFunctions()
