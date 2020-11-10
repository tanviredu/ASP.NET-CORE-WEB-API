const Book       = require("../../model/Book");
const _          = require("lodash");
exports.params = function(req,res,next,id){
    Book.findById(id)
    .exec()
    .then((book)=>{
        if(!book){
            next(new Error("no Book found on that id"))
        }else{
            req.book = book;
            next();
        }
    },(err)=>{
        next(err);
    })
}

exports.get = function(req,res,next){
    Book.find({})
    .then((books)=>{
        res.json(books);
    },(err)=>{
        next(err);
    })
}

exports.getOne = function(req,res,next){
    let book = req.book;
    res.json(book);
}

exports.post = function(req,res,next){
    let newBook = new Book(req.body);
    newBook.save((err,book)=>{
        if(err){
            next(err);
        }else{
            res.json(book);
        }
    })
}

exports.put = function(req,res,next){
    // totally replace it [PUT]
    let book        = req.book;
    let updatedBook = req.body;

    _.merge(book,updatedBook);
    book.save((err,result)=>{
        if(err){
            next(err)
        }else{
            res.json(result);
        }
    })
}

exports.delete = function(req,res,next){
    req.book.remove((err,removed)=>{
        if(err){
            next(err)
        }else{
            res.json(removed);
        }
    })   
}