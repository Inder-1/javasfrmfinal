const Book = require('../models/book');

exports.index = async (req, res, next) => {
  try {
   

    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
  
    const books = await Book.findById(req.params.id);

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { title, author } = req.body;

    const qt = await Book.create({
      author,
      title
    });

    res.status(200).json({ message: "Book was created successfully", book: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Book.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Book was deleted successfully" });
  } catch (error) {
    next(error);
  }
};