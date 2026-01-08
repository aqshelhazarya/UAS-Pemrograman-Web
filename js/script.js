const form = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

let contacts = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const location = document.getElementById("location").value.trim();

  if (!name || !phone || !email || !location) {
    alert("Semua field wajib diisi!");
    return;
  }

  const contact = {
    name: name,
    phone: phone,
    email: email,
    location: location
  };

  contacts.push(contact);
  renderContacts();
  form.reset();
});

function renderContacts() {
  contactList.innerHTML = "";

  contacts.forEach(function (contact) {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow";

    card.innerHTML = `
      <h3 class="text-lg font-bold">${contact.name}</h3>
      <p>No Telp: ${contact.phone}</p>
      <p>Email: ${contact.email}</p>
      <p>Lokasi: ${contact.location}</p>
    `;

    contactList.appendChild(card);
  });
}
