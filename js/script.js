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

  contacts.forEach((contact, index) => {
    const card = document.createElement("div");
    card.className =
  "bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-md transition-all duration-300 opacity-0 translate-y-2 hover:-translate-y-1 hover:shadow-lg";

    card.innerHTML = `
      <h3 class="text-lg font-bold mb-1">${contact.name}</h3>
      <p>📞 ${contact.phone}</p>
      <p>✉️ ${contact.email}</p>
      <p>📍 ${contact.location}</p>

      <div class="mt-3 flex gap-2">
        <button class="editBtn px-3 py-1 text-sm bg-yellow-400 rounded hover:bg-yellow-500">
          Edit
        </button>
        <button class="deleteBtn px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    `;

    // DELETE
    card.querySelector(".deleteBtn").addEventListener("click", () => {
      contacts.splice(index, 1);
      renderContacts();
    });

    // EDIT
    card.querySelector(".editBtn").addEventListener("click", () => {
      document.getElementById("name").value = contact.name;
      document.getElementById("phone").value = contact.phone;
      document.getElementById("email").value = contact.email;
      document.getElementById("location").value = contact.location;

      contacts.splice(index, 1);
      renderContacts();
    });

    contactList.appendChild(card);
setTimeout(() => {
  card.classList.remove("opacity-0", "translate-y-2");
}, 50);

  });
}