const MyTitle = document.getElementById('MyTitle');
const MyImage = document.getElementById('MyImage');
const MyInput = document.getElementById('MyInput');

let locations = [{
        "Title": "spot 0",
        "Image": "images/spot0.png",
    },
    {
        "Title": "Spot 1",
        "Image": "images/spot1.png"
    },
    {
        "Title": "Spot 2",
        "Image": "images/spot2.png"
    },
    {
        "Title": "Spot 3",
        "Image": "images/spot3.png"
    },
    {
        "Title": "Spot 4",
        "Image": "images/spot4.png"
    },
    {
        "Title": "Spot 5",
        "Image": "images/spot5.png"
    },
    {
        "Title": "Spot 6",
        "Image": "images/spot6.png"
    },
    {
        "Title": "Spot 7",
        "Image": "images/spot7.png"
    },
    {
        "Title": "Spot 8",
        "Image": "images/spot8.png"
    },
    {
        "Title": "Spot 9",
        "Image": "images/spot9.png"
    },
    {
        "Title": "Spot 10",
        "Image": "images/spot10.png"
    },
    {
        "Title": "Spot 11",
        "Image": "images/spot11.png"
    },
    {
        "Title": "Spot 12",
        "Image": "images/spot12.png"
    }
]

function show(index) {
    MyTitle.innerHTML = locations[index].Title;
    MyImage.src = locations[index].Image;
}

function GetInput() {
    show(MyInput.value);
    MyInput.value = "";
    MyInput.focus();
}