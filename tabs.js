const tabHeader = document.getElementsByClassName("tab-header")[0];

const tabBody = document.getElementsByClassName("tab-body")[0];

const tabsPane = tabHeader.getElementsByClassName("tab-item");

const allTab = tabHeader.getElementsByClassName("all")[0];

const allDropdown = document.getElementsByClassName("all-dropdown")[0];

const tabBodyHeader = document.getElementsByClassName("view-all");

//collapsing All tab in mobile view
allDropdown.addEventListener("click", ()=>{
    console.log("clicked: ", allDropdown);
    allDropdown.nextElementSibling.classList.toggle("body-collapsed");
    allDropdown.classList.toggle("arrow-up");
})

//collapsing individual tabs with view all button
for(let j=0; j<tabBodyHeader.length; j++){
    tabBodyHeader[j].addEventListener("click", ()=>{
        console.log(tabBodyHeader[j].parentElement.nextElementSibling);
        tabBodyHeader[j].classList.toggle("collapsed");
        tabBodyHeader[j].parentElement.nextElementSibling.classList.toggle("collapsed");
    })
}

// showing all tabs when 'All' is clicked in desktop view
allTab.addEventListener("click", ()=>{
    Array.from(tabsPane).forEach(tab=>{
        tab.classList.contains("active")?tab.classList.remove("active"):"";
    })
    allTab.classList.add("active");
    Array.from(tabBody.getElementsByClassName("tab-body-item")).forEach((data)=>{
        data.classList.contains("active")?"":data.classList.add("active");
    })
})

// showing body of tabs when clicked on tab name in desktop view
for(let i=0; i<tabsPane.length; i++){
    tabsPane[i].addEventListener("click", ()=>{
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");

        Array.from(tabBody.getElementsByClassName("active")).forEach((data)=>{
            data.classList.remove("active");
        })
        tabBody.getElementsByClassName("tab-body-item")[i].classList.add("active");
    })
}

// const myObject = {
//     myMethod(items) {
//       console.log(this); // logs myObject
//     //   const callback = () => {
//         function callback(){
//         console.log("inside callback",this); // logs myObject
//       };
//       items.forEach(callback);
//     }
//   };
//   myObject.myMethod([1, 2, 3]); 

//   const myObject1 = {
//     myMethod(items) {
//       console.log(this); 
//         const data = [4,5];
//         function callback(){
//         console.log("inside callback",this);
//       };
//       data.forEach(callback);
//     }
//   };
//   myObject1.myMethod([1, 2, 3]); 


//In classic function expressions, the this keyword is bound to different values based on the context 
//in which the function is called. Whereas arrow functions use the value of this in their lexical scope. 
//That means it just uses the value of this in the surrounding code block. It doesn’t care what calls it, 
//it just cares where it was defined.

  let obj = {
    myName: 'Utkarsh',
    
    myFunc() {
        // const self = this;
      console.log(this.myName);

      setTimeout(()=>{
    //   setTimeout(function() {
        console.log(this.myName);
        // console.log(self.myName);
      }, 1000)
    }
  }
  obj.myFunc();

//   let obj2 = {myName:'Aakash'};
//   obj.myFunc.call(obj2);




let personObj = {
    prsnName: 'Utkarsh',

    mehthod(){
        // const self = this
        console.log(this.prsnName);

        setTimeout(()=>{
        // setTimeout(function(){
            console.log(this.prsnName);
        }, 1000)
    }
}

// personObj.mehthod();



let a = 5+6+'4'+7;
console.log(a);























