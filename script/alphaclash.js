function play(){
    // hide the home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show the playgound
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

}