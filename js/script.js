const form = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const locationInput = document.getElementById("location");

let contacts = [];

// SUBMIT FORM
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const location = locationInput.value.trim();

  if (!name || !phone || !email || !location) {
    alert("Semua field wajib diisi!");
    return;
  }

  const newContact = { name, phone, email, location };

  // Tambah data
  contacts.push(newContact);
  renderContacts();

  // ✅ ANIMASI SUKSES (PASTI JALAN)
  form.classList.remove("success-animate");
  void form.offsetWidth; // force reflow
  form.classList.add("success-animate");

  form.classList.add("ring-2", "ring-green-500");

  setTimeout(() => {
    form.classList.remove("ring-2", "ring-green-500");
  }, 400);

  form.reset();
});

// RENDER CONTACT
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
        <button class="editBtn px-3 py-1 text-sm bg-blue-600 rounded hover:bg-blue-700">
          Edit
        </button>
        <button class="deleteBtn px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
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
      nameInput.value = contact.name;
      phoneInput.value = contact.phone;
      emailInput.value = contact.email;
      locationInput.value = contact.location;

      contacts.splice(index, 1);
      renderContacts();
    });

    contactList.appendChild(card);

    // ANIMASI MUNCUL CARD
    setTimeout(() => {
      card.classList.remove("opacity-0", "translate-y-2");
    }, 50);
  });
}