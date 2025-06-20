document.addEventListener('DOMContentLoaded', () => {
    const reasons = [
        "10. Your infectious smile, followed by your many decibels",
        "9. Your kindness to *almost* everyone you meet",
        "8. How you make me laugh everytime we're together",
        "7. Your unwavering, unrelenting support",
        "6. The way you look at me like nothing else could matter more",
        "5. Your adventurous spirit, to ensure I do things I'd never have otherwise",
        "4. How smart and thoughtful you are",
        "3. Just being yourself even if it means sometimes you have to fall face first because your feet moved too fast",
        "2. Our shared dreams and future together",
        "1. Because I just couldn't imagine anyone I'd want in my life more than my beautiful waife!!!"
    ];

    let currentReasonIndex = 0;
    const reasonTextElement = document.getElementById('reason-text');
    const reasonsContainer = document.getElementById('reasons-container');
    const finalMessageElement = document.getElementById('final-message');
    const photoElement = document.getElementById('photo'); 

    function displayReason(index) {
        if (index < reasons.length) {
            reasonTextElement.textContent = reasons[index];
        }
    }

    displayReason(currentReasonIndex);
    reasonTextElement.style.opacity = 1; 

    let finalSequenceTriggered = false; // Flag to prevent re-triggering final sequence
    document.addEventListener('click', () => {
        if (finalSequenceTriggered) {
            return; // Do nothing if final sequence already happened
        }

        if (currentReasonIndex < reasons.length - 1) {
            reasonTextElement.style.opacity = 0; 

            setTimeout(() => {
                currentReasonIndex++;
                displayReason(currentReasonIndex);
                reasonTextElement.style.opacity = 1; 
            }, 500); 

        } else if (currentReasonIndex === reasons.length - 1) {
            finalSequenceTriggered = true; 

            reasonTextElement.style.opacity = 0; 
            photoElement.style.opacity = 0;      

            setTimeout(() => {
                reasonsContainer.style.display = 'none'; 
                photoElement.src = 'IMG_0374.jpg'; 
                finalMessageElement.style.display = 'block'; 

                void photoElement.offsetHeight;
                void finalMessageElement.offsetHeight;

                photoElement.style.opacity = 1;       
                finalMessageElement.style.opacity = 1; 
            }, 500); 
        }
    });
});