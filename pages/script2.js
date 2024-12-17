
        const correctAnswers = {
            options1: "Markup Language",
            options2: "Pre-specified tags",
            options3: "1990",
            options4: "strong",
            options5: "ol",
            options6: "img",
            options7: "Web Browser",
            options8: "0 degrees",
            options9: "head",
            options10: "footer"
        };

        let score = 0;
        let currentQuestion = 1;

        document.querySelector(".submit-answer").addEventListener("click", function() {
            const selectedAnswers = [];
            for (let i = 1; i <= 10; i++) {
                const selectedOption = document.querySelector(`input[name="options${i}"]:checked`);
                if (selectedOption) {
                    selectedAnswers.push(selectedOption.value);
                } else {
                    selectedAnswers.push(null);
                }
            }

            // Calculate score
            score = 0;
            selectedAnswers.forEach((answer, index) => {
                if (answer === correctAnswers[`options${index + 1}`]) {
                    score++;
                }
            });

            document.getElementById("final-score").innerText = `Your final score is: ${score}`;
            document.querySelector(".quiz").style.display = "none";
            document.querySelector(".final-result").style.display = "block";
        });

        document.getElementById("restart").addEventListener("click", function() {
            location.reload();
        });
   