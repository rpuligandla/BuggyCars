export const getUsername = () => {
  return cy.get('#username');
};

export const getFirstname = () => {
  return cy.get('#firstName');
};

export const getLastname = () => {
  return cy.get('#lastName');
};

export const getGender = () => {
  return cy.get('#gender');
};

export const getAge = () => {
  return cy.get('#age');
};

export const getAddress = () => {
  return cy.get('#address');
};

export const getPhone = () => {
  return cy.get('#phone');
};

export const getHobby = () => {
  return cy.get('#hobby');
};
export const getCurrentPassword = () => {
  return cy.get('#currentPassword');
};

export const getNewPassword = () => {
  return cy.get('#newPassword');
};

export const getConfirmPassword = () => {
  return cy.get('#newPasswordConfirmation');
};

export const getSave = () => {
  return cy.get('.btn-default');
};

export const getCancel = () => {
  return cy.get('a.btn');
};

export const getAgeError = () => {
  return cy.get(':nth-child(1) > .result')
}
export const getSuccessMessage = () => {
  return cy.get(':nth-child(1) > .result')
}

