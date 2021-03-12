export const APIs = {
  base_Url: "https://dev-api.alldaydr.com/api/users/",
};

export const Validation = {
  PASSWORD_REGEX: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  // PHONE_NUMBER_REGEX: /^\(?([0-14]{3})\)?([0-14]{3})\)?[-. ]?([0-14]{3})[-. ]?([0-14]{4})$/,
  PHONE_NUMBER_REGEX: /^\d{13}$/,
};
