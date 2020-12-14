window.addEventListener('load', initPage);
var poemTitleEl = document.getElementById('title');
var poemBodyEl = document.getElementById('body');
var poemContainerEl = document.getElementById('main');
var currentPoem = 0;
var fadingIn;
var fadingOut;
var fading = false;

function initPage() {
    poemTitleEl.innerHTML = poems[currentPoem][0];
    poemBodyEl.innerHTML = poems[currentPoem][1];
}

function nextPoem() {
    if(fading)
        return;
    if(currentPoem == (poems.length - 1)) {
        currentPoem = 0;
    } else {
        currentPoem++;
    }
    fading = true;
    fadingOut = setInterval(()=>{fadeOut()}, 10);
}

function previousPoem() {
    if(fading) 
        return;
    if(currentPoem == 0) {
        currentPoem = poems.length - 1;
    } else {
        currentPoem--;
    }
    fading = true;
    fadingOut = setInterval(()=>{fadeOut()}, 10);
}

function fadeIn() {
    let currentOpacity = poemContainerEl.style.opacity;
    currentOpacity = parseFloat(currentOpacity);
    if(currentOpacity == 1) {
        clearInterval(fadingIn);
        fading = false;
        return;
    }
    currentOpacity += 0.01;
    currentOpacity = currentOpacity.toString();
    poemContainerEl.style.opacity = currentOpacity;
}

function fadeOut() {
    let currentOpacity = poemContainerEl.style.opacity;
    currentOpacity = parseFloat(currentOpacity);
    if(currentOpacity == 0) {
        clearInterval(fadingOut);
        poemTitleEl.innerHTML = poems[currentPoem][0];
        poemBodyEl.innerHTML = poems[currentPoem][1];
        fadingIn = setInterval(()=>{fadeIn()}, 20);
    }
    currentOpacity -= 0.01;
    currentOpacity = currentOpacity.toString();
    poemContainerEl.style.opacity = currentOpacity;
}

var poems = [
    ['Nothing', 'The clock ticks on forever<br> As I stare at this blank screen<br> A myriad of thoughts and ideas<br> Lost on my attempts for recollection<br> Now I sit here with nothing<br> As I stare at this blank screen<br> The clock ticks on forever<br> Nothing is good enough<br> Never good enough for me.'],
    ['Distractions', 'I can never seem to focus<br> On the things that feel so Important<br> I can never seem to work<br> On the things that need to be done<br> I can never seem to improve<br> On the things that I am lacking<br> Yet I always seem to worry<br> About the things that stand in my way<br> And I always seem to forget<br> About the things that I can do so easily<br> And I am always so distracted<br> When I need to be focused<br>'],
    ['Fading', 'lose myself again<br> To this euphoria of isolation<br> I crave the unimportant<br> Because the outside feels so cold<br> <br> Locked inside this virtual cage<br> I lose all memory of what was before<br> Everything else loses its color<br> And I feel myself fading away<br>'],
    ['Remorse','f'],
    ['Something','f'],
    ['Progress','f'],
    ['Thinking','f'],
    ['Motivation','f'],
    ['Mind','With the absence of mind<br> The ending becomes so clear<br> Without thought of worry<br> Without worry for fear<br> <br> Some are born with a horrible sickness<br> One that lies quietly hidden<br> Inside the comfort of our own head<br> Conscious thoughts become painful<br> And we seek ways to escape it<br> Yet the more we escape<br> The less bearable it becomes<br>'],
    ['Ending.','f']
]