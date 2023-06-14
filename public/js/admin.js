const getAllUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};

const allUsers = await getAllUsers();

allUsers.forEach((user) => {
  const id = $(`<th scope="row">${user.id}</th>`);
  const firstName = $(`<td>${user.firstName}</td>`);
  const lastName = $(`<td>${user.lastName}</td>`);
  const email = $(`<td>${user.email}</td>`);
  const state = $(`<td><span class="badge rounded-pill text-bg-${
    user.state === "active" ? "success" : "warning"
  }">${user.state}</span>
</td>`);

  const tr = $("<tr></tr>");

  $("#table-content").append(tr);

  $(tr)
    .append(id)
    .append(firstName)
    .append(lastName)
    .append(email)
    .append(state);
});
