
fetch('https://reqres.in/api/users')
.then((res)=>res.json())
.then((data)=>console.log(data))

fetch('https://reqres.in/api/users')
.then((res)=>res.json())
.then((data)=>console.log(data.data))

fetch('https://reqres.in/api/users')
.then((res)=>res.json())
.then((data)=>console.log(data.data[0].first_name))

fetch('https://reqres.in/api/users')
.then((res)=> {
  console.log(res)
  if(res.ok){
    console.log('sucess')
  } else {
    console.log('error')
  }
})
.then((data)=>console.log(data.data))
.catch((err)=>console.log(err))


fetch('https://reqres.in/api/users/1', {
  method: 'POST',
  headers: {'Content-Type': 'application/json',},
  body: JSON.stringify({name: 'Jorge',}),
})
.then((res)=>res.json())
.then((data)=>console.log(data))

