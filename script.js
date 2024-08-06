document.getElementById("form").addEventListener("submit", async function run(e) {
    e.preventDefault();
    let nama = document.getElementById("nama").value;
    let desc = document.getElementById("desc").value;

    let output = document.getElementById("output");
    output.innerHTML = `<div class="spinner-border text-danger" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>`;

    try {
      const response = await fetch(`https://roasting-api.vercel.app/roasting?nama=${nama}?desc=${desc}`, {
        method: "POST",
      });
      const text = await response.text();
      output.innerHTML = `${text}`;
      console.log(text);
    } catch (error) {
      console.error("Error:", error);
      output.innerHTML = `${error}`;
    }
  });