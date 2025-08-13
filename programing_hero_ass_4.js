function totalFine( fare ) {
    if (typeof fare === "number" && fare >= 1) {
        return fare + (fare * 0.2) + 30; 
    } else {
        return "Invalid";
    }
}

function  onlyCharacter( str ) {
    if (typeof str === "string") {
        let outputStr = "";

        for (let i = 0; i < str.length; i++) {
            if (str[i] != " ") {
                outputStr += str[i].toUpperCase();
            }
        }

        return outputStr;
    } else {
        return "Invalid";
    }
}

function  bestTeam( player1, player2 ) {
    if (typeof player1 === "object" && typeof player2 === "object") {
        let player1_count = player1["foul"] + player1["cardY"] + player1["cardR"];
        let player2_count = player2["foul"] + player2["cardY"] + player2["cardR"];

        if (player1_count > player2_count) {
            return player2["name"];
        } else if (player2_count > player1_count) {
            return player1["name"];
        } else {
            return "Tie";
        }

    } else {
        return "Invalid";
    }
}

function  isSame(arr1 , arr2 ) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        
        return true;
    } else {
        return "Invalid";
    }
}

function  resultReport( marks ) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    if (marks.length === 0) {
        return { 
            finalScore: 0,
            pass: 0,
            fail: 0,
        }

    }

    return {
        finalScore: Math.round(marks.reduce((a, b) => a + b, 0) / marks.length),
        pass: marks.filter(x => x >= 40).length,
        fail: marks.length - marks.filter(x => x >= 40).length,
    }
}
