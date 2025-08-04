document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
  
    if (response.ok) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  });
  