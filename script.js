// Countdown function
function displayCountdown(value, callback) {
    setTimeout(() => {
        document.getElementById("countdown").innerText = value;
        if (value > 0) {
            callback(value - 1);
        } else {
            document.getElementById("countdown").innerText = "Happy Independence Day";
        }
    }, 1000);
}

// Initial countdown invocation
displayCountdown(10, function step1(result1) {
    if (typeof result1 === "number") {
        displayCountdown(result1, function step2(result2) {
            if (typeof result2 === "number") {
                displayCountdown(result2, function step3(result3) {
                    if (typeof result3 === "number") {
                        displayCountdown(result3, function step4(result4) {
                            if (typeof result4 === "number") {
                                displayCountdown(result4, function step5(result5) {
                                    if (typeof result5 === "number") {
                                        displayCountdown(result5, function step6(result6) {
                                            if (typeof result6 === "number") {
                                                displayCountdown(result6, function step7(result7) {
                                                    if (typeof result7 === "number") {
                                                        displayCountdown(result7, function step8(result8) {
                                                            if (typeof result8 === "number") {
                                                                displayCountdown(result8, function step9(result9) {
                                                                    if (typeof result9 === "number") {
                                                                        displayCountdown(result9, function step10(result10) {
                                                                            if (typeof result10 === "number") {
                                                                                displayCountdown(result10, function step11(result11) {
                                                                                    if (result11 === 0) {
                                                                                        document.getElementById("countdown").innerText = "Happy Independence Day";
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

// Placeholder functions for button clicks
function goToFirst() {
    console.log("First button clicked");
    // Add functionality here
}

function goToPrevious() {
    console.log("Previous button clicked");
    // Add functionality here
}

function goToNext() {
    console.log("Next button clicked");
    // Add functionality here
}

function goToLast() {
    console.log("Last button clicked");
    // Add functionality here
}

// Adding event listeners to buttons
document.getElementById("first").addEventListener("click", goToFirst);
document.getElementById("previous").addEventListener("click", goToPrevious);
document.getElementById("next").addEventListener("click", goToNext);
document.getElementById("last").addEventListener("click", goToLast);