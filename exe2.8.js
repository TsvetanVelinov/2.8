function movie(input) {
    let movieName = String(input[0]);
    let timeEpisode = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let totalTime = (breakTime - lunchTime - restTime);

    if (totalTime >= timeEpisode ) {
        console.log (`You have enough time to watch ${(movieName)} and left with ${Math.ceil(totalTime-timeEpisode)} minutes free time.`)
    } else {
        console.log (`You don't have enough time to watch ${(movieName)}, you need ${Math.ceil(timeEpisode-totalTime)} more minutes.`)
    }





}


movie (["Game of Thrones","60","96"])
movie (["Teen Wolf","48","60"])
