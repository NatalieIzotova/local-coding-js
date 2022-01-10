const state ={
    count1:0
}
const areaBtn = document.createElement('div')
areaBtn.id='areaBtn'
document.body.appendChild(areaBtn)

const btnAdd=document.createElement('button')
btnAdd.id='btn'
btnAdd.innerText='Add counter'
areaBtn.appendChild(btnAdd)





btnAdd.addEventListener('click', ()=>{
    const area = document.createElement('div')
    area.id='area'
    document.body.appendChild(area)
    const countDisplay=document.createElement('h1')
    countDisplay.innerText=state.count1
    area.appendChild(countDisplay)
    const btnPlus=document.createElement('button')
    btnPlus.id='btn'
    btnPlus.innerText='Plus'
    area.appendChild(btnPlus)
    const btnMin=document.createElement('button')
    btnMin.id='btn'
    btnMin.innerText='Minus'
    area.appendChild(btnMin)
    const btnRes=document.createElement('button')
    btnRes.id='btn'
    btnRes.innerText='Reset'
    area.appendChild(btnRes)
    btnPlus.addEventListener('click', ()=>{
        state.count1+=1
        if(state.count1>100)state.count1=100
        countDisplay.innerText=state.count1
    })
    btnMin.addEventListener('click', ()=>{
        state.count1-=1
        if(state.count1<0)state.count1=0
        countDisplay.innerText=state.count1
    })
    btnRes.addEventListener('click', ()=> {
        state.count1 = 0
        countDisplay.innerText = state.count1
    })

    const btnRemove=document.createElement('button')
    btnRemove.id='btnRemove'
    btnRemove.innerText='Delete counter'
    document.body.appendChild(btnRemove)
    btnRemove.addEventListener('click', ()=>{

        document.body.removeChild(area)
        document.body.removeChild(btnRemove)


})

})
