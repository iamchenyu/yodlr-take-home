const createUser = async (user) => {
  const { data } = await axios.post("/users", user);
  return data;
};

$("#submit").click(async (e) => {
  e.preventDefault();
  $("#alert").show();
  try {
    const newUser = {
      firstName: $("#first-name").val(),
      lastName: $("#last-name").val(),
      email: $("#email").val(),
    };
    const user = await createUser(newUser);
    $("#alert").addClass("alert-success");
    $("#alert").text(`Welcome, ${user.firstName}!`);
    $("#form")[0].reset();
  } catch (e) {
    console.log(e);
    $("#alert").addClass("alert-danger");
    $("#alert").text(`Something went wrong, please try again.`);
  }
});
