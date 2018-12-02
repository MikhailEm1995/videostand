module.exports = (req, res) => {
  console.log('yeah am here');
  res.status(200).send(JSON.stringify({ data: 'it\'s test' }));
};
