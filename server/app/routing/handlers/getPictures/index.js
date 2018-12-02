module.exports = async (req, res) => {
    try {
      res.status(200).send(JSON.stringify({ data: 'ok' }));
    } catch(err) {

    }
};
