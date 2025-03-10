function createTransferPresetsPanel() {
    panel = document.createElement("div");
    panel.style.border = "2px solid black";
    panel.style.boxSizing = "border-box";
    panel.style.padding = "4px";
    panel.style.minWidth = "300px";
    
    panel.innerHTML = 
    `<h2>Transfer Presets</h2>
    <p>
        <strong>DEBT OB</strong> - O15K - All outbound converted debt transfer
        <br><br><strong>DEBT AFF</strong> - O15K - All affs converted debt transfer
        <br><br><strong>DEBT ADSYNC</strong> - O15K - All adsync converted debt transfer
    </p>
    `;

    return panel;
}

function putElement(id, element) {
    document.getElementById(id).appendChild(element);
}