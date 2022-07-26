document.querySelector("#getButton").addEventListener("click", apiRequest);
document.querySelector("#updateButton").addEventListener("click", updateEntry);

// GET request => READ
async function apiRequest() {
  const characterName = document.querySelector("input").value;

  try {
    const response = await fetch(
      `https://harry-potter-api-2.herokuapp.com/api/${characterName}`
    );
    const data = await response.json();
    console.log(data);

    // toggle the class of our elements
    const list = document.querySelector(".list");
    list.classList.remove("hidden");
    list.classList.add("show");

    const img = document.querySelector(".border");
    img.classList.remove("hidden");
    img.classList.add("show");

    // create the inner text of our individual elements
    document.getElementById("characterName").innerText = data.characterName;
    document.getElementById("characterBirthday").innerText = data.birthday;
    document.getElementById("characterHouse").innerText = data.house;
    document.getElementById("characterPatronus").innerText = data.patronus;
    document.getElementById("characterBoggart").innerText = data.boggart;
    document.getElementById("characterWand").innerText = data.wand;
    document.getElementById("characterParents").innerText = data.parents;
    document.getElementById("characterBlood").innerText = data.bloodStatus;
    document.getElementById("characterChildren").innerText = data.children;

    document.getElementById("characterImage").src = data.image;
    // document.getElementById("characterCaption").innerText = data.name;
  } catch (error) {
    console.log(error);
  }
}

async function updateEntry() {
  try {
    const response = await fetch("updateEntry", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementsByName("name")[0].value,
        characterName: document.getElementsByName("characterName")[0].value,
        birthday: document.getElementsByName("birthday")[0].value,
        house: document.getElementsByName("house")[0].value,
        patronus: document.getElementsByName("patronus")[0].value,
        boggart: document.getElementsByName("boggart")[0].value,
        wand: document.getElementsByName("wand")[0].value,
        parents: document.getElementsByName("parents")[0].value,
        bloodStatus: document.getElementsByName("bloodStatus")[0].value,
        children: document.getElementsByName("children")[0].value,
        image: document.getElementsByName("image")[0].value,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
