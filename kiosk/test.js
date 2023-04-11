
const fs = require('fs')
const path = require('path')

let json = fs.readFileSync(path.resolve(__dirname, './src/common/json/test.json'))
console.log("load JSON.parse(json)",JSON.parse(json))

let newJson = null;
if(json){
    newJson = new Array(JSON.parse(json))
    newJson[0].room.map((item)=>{
        item.roomList.map((roomItem)=>{
            roomItem.top = '1px'
        })
    })
}
//console.log('last',JSON.stringify(newJson[0]))
fs.writeFileSync(path.resolve(__dirname, './src/common/json/test.json'), JSON.stringify(newJson[0]))

let afterjson = fs.readFileSync(path.resolve(__dirname, './src/common/json/test.json'))
let mapJson = new Array(JSON.parse(afterjson))
mapJson[0].room.map((item)=>{
    //console.log(item.roomList)
})
//console.log(JSON.parse(afterjson).room[0])

