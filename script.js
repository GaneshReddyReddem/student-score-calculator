function calculation() {
    const m1 = +document.querySelector("#m1").value;
    const m2 = +document.querySelector("#m2").value;
    const a = +document.querySelector("#a").value;
    const sem = +document.querySelector("#sem").value;
    const tm = document.querySelector("#tm");
    const grade = document.querySelector("#gd");
    const msg = document.querySelector("#msg");

    if (m1 <= 0 || m1 > 30 || m2 <= 0 || m2 > 30 || a <= 0 || a > 10 || sem <= 0 || sem > 60) {
        alert("Please enter all details correctly");
        return;
    }

    if (sem < 40) {
        tm.textContent = "You must score at least 40 marks in sem";
        msg.textContent = "Don't worry, you will do better next time!";
        grade.textContent = "Grade: --";  
        return;
    }

    // Calculate weighted mid-term score (80% max, 20% min)
    const maxMid = Math.max(m1, m2);
    const minMid = Math.min(m1, m2);
    const weightedMid = (maxMid * 0.8) + (minMid * 0.2);
    
    const total = weightedMid + a + sem;

    tm.textContent = "Result: " + total;

    if (total > 90) {
        grade.textContent = "Grade: S";
    } else if (total >= 80) {
        grade.textContent = "Grade: A";
    } else if (total >= 70) {
        grade.textContent = "Grade: B";
    } else if (total >= 60) {
        grade.textContent = "Grade: D";
    } else {
        grade.textContent = "Grade: --";
    }

    msg.textContent = '"Well done! You worked hard and it paid off!"';
}
