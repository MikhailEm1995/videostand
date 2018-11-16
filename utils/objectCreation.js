const makeMixin = props => obj => ({
  ...obj,
  ...props
});

module.exports = {
  makeMixin
};
