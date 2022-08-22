// while loop
// do while loop
// for loop
//  break
//  continue
// for ... of loop

// let i = 0
// do {
//     console.log(`hello, the value of i is currently ${i}`)
//     i++
// } while (i == 5) 

for (let i = 0; i <= 100 ; i++) {
    if (i % 2 !== 0) {
      continue;  
    }
    console.log(`hello, the value of i is currently ${i}`)
}