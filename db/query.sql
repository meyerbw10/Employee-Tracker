SELECT favorite_books.book_name, book_prices.price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;


-- DELETE FROM produce 
-- id = 2;