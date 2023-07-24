const postRegister = async (data) => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    });
    const response_1 = response.json();
    return response_1;
  } catch (error) {
    console.error(error);
  }
};

const post = {
  postRegister,
};

export { post };
