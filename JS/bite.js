const header = document.getElementById("header");
message.addEventListener("click", openMessage)
window.addEventListener("scroll", headerfnc)
function headerfnc() {
    if (window.scrollY > 0) {
        header.style.backgroundColor="white"
    }
    else {
        header.style.backgroundColor="transparent"
    }
}

function openMessage() {
    meta.style.display = "block"
    // message.innerHTML = ""
    image.innerHTML = `<i class="fa-solid fa-xmark" id="massage"></i>;`
    massage.style.fontSize = "40px"
    massage.style.transition = "1.5s ease-in-out"
    massage.addEventListener("click", closeMessage)
}

function closeMessage() {
    meta.style.display = "none"
    image.innerHTML=`
       <img src="../project-images2/chat (1).png" alt="" id="message">
    `;
    console.log("happy");
    message.addEventListener("click", openMessage)
}
document.addEventListener("DOMContentLoaded", function () {
    const quotesCon = document.querySelector(".quotescon");
    let scrollAmount = 0;
    let step = quotesCon.clientWidth; // Move by container width
    let maxScroll = quotesCon.scrollWidth - step; // Max scrollable width
    let autoScroll;
    console.log(maxScroll);
    
    function startAutoScroll() {
        autoScroll = setInterval(() => {
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0; // Reset to start
            } else {
                scrollAmount += step;
            }
            quotesCon.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }, 3000); // Scroll every 3 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    // Start scrolling
    startAutoScroll();

    // Stop autoplay on hover, resume on mouse leave
    quotesCon.addEventListener("mouseenter", stopAutoScroll);
    quotesCon.addEventListener("mouseleave", startAutoScroll);
});
