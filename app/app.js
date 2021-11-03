var CAMPS = [
    {
        campTitle: "Item #1: Clothing",
        campThumbImg: "item1_150.jpg",
        campFullImg: "item1_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $45-80",
    },
    {
        campTitle: "Item #2: Tents",
        campThumbImg: "item2_150.jpg",
        campFullImg: "item2_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $75-105",
    },
    {
        campTitle: "Item #3: Tools",
        campThumbImg: "item3_150.jpg",
        campFullImg: "item3_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $55-70",
    },
    {
        campTitle: "Item #4: Cooking",
        campThumbImg: "item4_150.jpg",
        campFullImg: "item4_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $18-37",
    },
    {
        campTitle: "Item #5: Backpacks",
        campThumbImg: "item5_150.jpg",
        campFullImg: "item5_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $65-104",
    },
    {
        campTitle: "Item #6: Camp Stove",
        campThumbImg: "item6_150.jpg",
        campFullImg: "item6_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "$60-86",
    },
    {
        campTitle: "Item #7: Shoes",
        campThumbImg: "item7_150.jpg",
        campFullImg: "item7_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $47-94",
    },
    {
        campTitle: "Item #8: Flashlight",
        campThumbImg: "item8_150.jpg",
        campFullImg: "item8_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $19-31",
    },
    {
        campTitle: "Item #9: Binoculars",
        campThumbImg: "item9_150.jpg",
        campFullImg: "item9_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "Prices range from $23-36",
    },
    {
        campTitle: "Item #10: Charcoal",
        campThumbImg: "item10_150.jpg",
        campFullImg: "item10_300.jpg",
        campBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        campListDescription: 
        "$28",
    },
];

function loadData () {
    $.each(CAMPS, function(index, camp) {
        $("#app").append(`<div id="${index}" class="camp-holder">
        <h4>${camp.campTitle}</h4>
        <div class="camp-image">
            <img src="images/camp_thumb/${camp.campThumbImg}" alt="${camp.campTitle}">
        </div>
        <div class="brief-info">
            <div class="brief-desc">
                ${camp.campBriefDescription}
            </div>
        </div>
    </div>`);
    });

    initListeners();
}

function initListeners() {
    $(".camp-holder").click(function(e){
        let campIndex = e.currentTarget.id;
        $("#app").html(`<div class="full-camp-holder">
        <h4>${CAMPS[campIndex].campTitle}</h4>
        <div class="camp-image">
            <img src="images/camp_full/${CAMPS[campIndex].campFullImg}" alt="clothing">
        </div>
        <div class="brief-info">
            <div class="item-desc">
            ${CAMPS[campIndex].campListDescription}
            </div>
            <div class="close">CLOSE</div>
        </div>
    </div>`);

    addCloseListener();
    });
}

function addCloseListener() {
    $(".close").click(function () {
        $("#app").html("");
        loadData();
    });
}

$(document).ready(function () {
    loadData();
});