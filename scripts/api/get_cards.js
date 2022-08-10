export function cardsManage() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            localStorage.removeItem("data");
            // localStorage.setItem("data", JSON.stringify(arrayOfCards));
            localStorage.setItem("data", JSON.stringify(data));
        });
}

