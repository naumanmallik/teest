module.exports = {
  convertMP4toMP3: async (req, res, next) => {
    try {
      return res.json({
        status: 200,
        message: "Success",
        data: {},
      });
    } catch (error) {
      next(error);
    }
  },
};
