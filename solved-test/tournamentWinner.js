// Notes
// only 2 teams(a set) can compete at a time and every team will face each other  (round robin)
// to represent how teams are paired, a multi-dimensional array(array of arrays) is used (competitions)
// each element in the main array is an array containing a match set [Home, Away]
// the competetions array will be the first parameter in our function

// the second parameter in our function is the result array which returns the winner of each set 
// 1 signifies that the Home team won and 0 signifies that the away team won 
// comperitions[i] = result[i] where i is the index

// all things being noted .... lets start 

function tornamentWinner(competitions, result) {
    // an array to track winner 
    let scores = {}
    // the competition and result arrays will always have the same length
    for (let i = 0; i < result.length; i++) {
        const home = competitions[i][0]
        const away = competitions[i][1]
        if (result[i] == 0) {
            // this means the away team won
            // initial value will be undefined to avoild getting NaN on arithmetic operation, convert undefined to 0
            if (scores[away] === undefined) scores[away] = 0
            // add 3 to winner score
            scores = { ...scores, [away]: scores[away] + 3 }
            console.log(`${away} won against ${home}`)
        } else {
            if (scores[home] === undefined) scores[home] = 0
            scores = { ...scores, [home]: scores[home] + 3 }
            console.log(`${home} won against ${away}`)
        }
    }

    // now loop through the winner object and select winner according to highest points
    let winner;
    for (const team in scores) {

        if (winner == undefined || scores[team] > scores[winner]) {
            winner = team
        }
        console.log(`${team} has ${scores[team]} points`)
    }
    console.log(`The winner is ${winner}`)
}

const competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
const result = [0, 0, 1]

// call the function and pass in the values of each parameter
tornamentWinner(competitions, result)