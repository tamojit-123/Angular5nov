class Book {

    bookid: number;
    bookname: string;
    bookprice: number;

    constructor(bookid: number, bookname: string, bookprice: number) {
        this.bookid = bookid;
        this.bookname = bookname;
        this.bookprice = bookprice

    }

    disp(): void {

        console.log("Book ID =" + this.bookid);
        console.log("Book Name =" + this.bookname);
        console.log("book price =" + this.bookprice);

    }
}

//creating an instance for the book class using new keyword

let bookobj = new Book(1122, "jsbook", 878.33);
bookobj.disp();
bookobj.bookid = 121;