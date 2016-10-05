module.exports = {

  find: async (req, res) => {
    try {
      const result = Landlord.findAll();
      let message = 'find success';
      res.ok({
        message,
        data: { result },
      })
    } catch (e) {
      res.serverError(e);
    }
  },

  create: async (req, res) => {

  }
}
