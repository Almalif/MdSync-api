module.exports = {
  up(db) {
    db.createCollection("files");
  },

  down(db) {
    db.collection("files").drop();
  }
};
