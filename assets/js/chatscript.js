const becket = true;
// //check to see if it's me writing or not
// const becket = function() {
//     var myKey = storage.getItem(myKey);
//     if (myKey) {
//         becket = true;
//     } else {
//         becket = false;
//     };
// };

//write to page
writePage = function (written) {
    const theConversation = document.getElementById("chat-field");
    const justNow = new Date();
    let dateTime = justNow.toISOString();
    var author = ["ME, ", "usertext"];
    var newDiv = document.createElement("div");
    var pOne = document.createElement("p");
    var pTwo = document.createElement("p");
    newDiv.setAttribute("class", "usertext");
    pOne.setAttribute("class", "texthead");
    pOne.textContent = (author[0] + dateTime + ":");
    pTwo.textContent = written;
    newDiv.appendChild(pOne);
    newDiv.appendChild(pTwo);
    theConversation.appendChild(newDiv);
    // const writeReply = function() {
    //     return `
    //     <div>
    //     </br>
    //     <b>${author + dateTime}:</b>
    //     ${written}
    //     </br>
    //     </div>
    //     `;
    // };
};

const clearText = target => target.value = ""; 

//send button click -> write to page
document.getElementById("send").addEventListener("click", function () {
    const pad = document.getElementById("user-input");
    const written = document.getElementById("user-input").value;
    console.log(written);
    writePage(written);
    clearText(pad);
});