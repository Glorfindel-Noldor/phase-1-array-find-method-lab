function superbowlWin(parameter){
let winner = parameter.find((x) => x.result === 'W')
return winner ? winner.year : undefined;
}