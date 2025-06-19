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
        "1. Because I just couldn't imagine anyone I'd want in my life more than my beautiful waife!!!" // This is the 10th reason
    ];

    let currentReasonIndex = 0;
    const reasonTextElement = document.getElementById('reason-text');
    const reasonsContainer = document.getElementById('reasons-container');
    const finalMessageElement = document.getElementById('final-message');
    const photoElement = document.getElementById('photo'); // Get the photo element
    // const bodyElement = document.body; // No longer needed for final body fade-out

    // Function to display the current reason
    function displayReason(index) {
        if (index < reasons.length) {
            reasonTextElement.textContent = reasons[index];
        }
    }

    // Initial display of the first reason
    displayReason(currentReasonIndex);
    reasonTextElement.style.opacity = 1; // Make sure the first reason is visible

    let finalSequenceTriggered = false; // Flag to prevent re-triggering final sequence

    // Add click listener to the reasons container
    reasonsContainer.addEventListener('click', () => {
        if (finalSequenceTriggered) {
            return; // Do nothing if final sequence already happened
        }

        if (currentReasonIndex < reasons.length - 1) {
            // Still more reasons to show (not the 10th one yet)
            reasonTextElement.style.opacity = 0; // Fade out current reason text

            // Wait for fade out, then change text and fade in
            setTimeout(() => {
                currentReasonIndex++;
                displayReason(currentReasonIndex);
                reasonTextElement.style.opacity = 1; // Fade in next reason text
            }, 500); // Match CSS transition duration for #reason-text (0.5s)

        } else if (currentReasonIndex === reasons.length - 1) {
            // This is the 10th reason being displayed, and it's clicked
            finalSequenceTriggered = true; // Set flag

            reasonTextElement.style.opacity = 0; // Fade out the 10th reason text
            photoElement.style.opacity = 0;      // Fade out the first photo

            // Wait for the 10th reason and 1st photo to fade out
            setTimeout(() => {
                reasonsContainer.style.display = 'none'; // Hide reasons area completely

                photoElement.src = 'IMG_0374.jpg'; // Change photo source
                finalMessageElement.style.display = 'block'; // Make final message take space

                // Force a reflow to ensure transitions apply correctly after display change
                void photoElement.offsetHeight;
                void finalMessageElement.offsetHeight;

                photoElement.style.opacity = 1;       // Fade in the second photo
                finalMessageElement.style.opacity = 1; // Fade in the final message
            }, 500); // This duration should be >= the opacity transition of photo and reason-text (0.5s)
        }
    });
});