var Book = /** @class */ (function () {
    function Book(bookid, bookname, bookprice) {
        this.bookid = bookid;
        this.bookname = bookname;
        this.bookprice = bookprice;
    }
    Book.prototype.disp = function () {
        console.log("Book ID =" + this.bookid);
        console.log("Book Name =" + this.bookname);
        console.log("book price =" + this.bookprice);
    };
    return Book;
}());
//creating an instance for the book class using new keyword
var bookobj = new Book(1122, "jsbook", 878.33);
bookobj.disp();
bookobj.bookid = 121;
