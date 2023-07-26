const login = (user) => {
  if (user.name === "amin") {
    return true;
  }

  return false;
};

const register = (user) => {
  return { user, token };
};

const getMe = (token) => {
  return user;
};

const test = () => false;

const addCourse = (course) => {
  return {
    message: "New course added successfully :))",
  };
};

// Auth
