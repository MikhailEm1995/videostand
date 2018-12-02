module.exports = (req, res) => {
  res.status(200).send(JSON.stringify({ data: 'ok' }));
};
