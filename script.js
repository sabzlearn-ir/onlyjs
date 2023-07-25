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

// Auth
