const tab_buttons = document.querySelectorAll("#tab1");
const tab_panels = document.querySelectorAll(".tab-panel");

function showPanel(panelIndex, colorCode)
{
    tab_buttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });

    tab_buttons[panelIndex].style.backgroundColor = colorCode;
    tab_buttons[panelIndex].style.color= "white";
    tab_panels.forEach(function(node){
        node.style.display="none";
    });

    tab_panels[panelIndex].style.display="block";
    
}

showPanel(0, 'rgb(150, 3, 3)');

// PARTICLES






