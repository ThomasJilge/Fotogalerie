let images = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg', 'img/4.jpeg', 'img/5.jpeg', 'img/6.jpeg', 'img/7.jpeg', 'img/8.jpeg',
            'img/9.jpeg', 'img/10.jpeg', 'img/11.jpeg', 'img/12.jpeg', 'img/13.jpeg', 'img/14.jpeg', 'img/15.jpeg', 'img/16.jpeg', 
            'img/17.jpeg', 'img/18.jpeg', 'img/19.jpeg', 'img/20.jpeg', 'img/21.jpeg', 'img/22.jpeg', 'img/23.jpeg', 'img/24.jpeg',
            'img/25.jpeg', 'img/26.jpeg', 'img/27.jpeg', 'img/28.jpeg', 'img/29.jpeg', 'img/30.jpeg', 'img/31.jpeg', 'img/32.jpeg', 
            'img/33.jpeg', 'img/34.jpeg', 'img/35.jpeg', 'img/36.jpeg', 'img/37.jpeg', 'img/38.jpeg', 'img/39.jpeg', 'img/40.jpeg'];


let currentIMG = 0;


function render(i) {
    for (i = 0; i < images.length; i++) {
        document.getElementById('content').innerHTML += templateRender(i);
    }        
}


function templateRender(i) {
    return /*html*/`
    <div class="imgbox" onclick="openIMG(${i})"><img id="img" src="${images[i]}"></div>
`;
}


function openIMG(i) {
    currentIMG = i;
    document.getElementById('openPopUpIMG').classList.remove('displayNone');
    document.getElementById('headContainer').classList.add('displayNone');
    document.getElementById('content').classList.add('displayNone');
    document.getElementById('openPopUpIMG').innerHTML = templateopenIMG(i);
}

function templateopenIMG(i) {
    return /*html*/`
    <div class="closeHeadline">
        <span class="button closeButton span" onclick="closeIMG()" type=submit>Close</span>
        </div>
        <div class="fullIMG" id="fullIMG">
        <span id="previousButton" class="button previousButton" onclick="previousIMG()" type=submit>Previous</span>
        <img id="img" src="${images[i]}">
        <span id="nextButton" class="button nextButton span" onclick="nextIMG()" type=submit>Next</span>
    `;
}


function closeIMG() {
    document.getElementById('openPopUpIMG').classList.add('displayNone');
    document.getElementById('headContainer').classList.remove('displayNone');
    document.getElementById('content').classList.remove('displayNone');
}


function nextIMG() {
    currentIMG++;
    if (currentIMG >= images.length) {
        currentIMG = 0;
    }
    openIMG(currentIMG);
} 


function previousIMG() {
    currentIMG--;
    if (currentIMG < 0) {
        currentIMG = images.length - 1;
    }
    openIMG(currentIMG);
}



