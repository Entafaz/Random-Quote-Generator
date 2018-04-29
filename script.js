var quotesObj = {
0: 
{quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.", author: "John Keats"},
1
:
{quote: "But man is not made for defeat. A man can be destroyed but not defeated.", author: "Ernest Hemingway"},
2
:
{quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt"},
3
:
{quote: "There is nothing permanent except change.", author: "Heraclitus"},
4
:
{quote: "You cannot shake hands with a clenched fist.", author: "Indira Gandhi"},
5
:
{quote: "Let us sacrifice our today so that our children can have a better tomorrow.", author: "A. P. J. Abdul Kalam"},
6
:
{quote: "The most difficult thing is the decision to act, t…and the procedure, the process is its own reward.", author: "Amelia Earhart"},
7
:
{quote: "Do not mind anything that anyone tells you about anyone else.Judge everyone and everything for yourself.", author: "Henry James"},
8
:
{quote: "Learning never exhausts the mind.", author: "Leonardo da Vinci"},
9
:
{quote: "There is no charm equal to tenderness of heart.", author: "Jane Austen"},
10
:
{quote: "All that we see or seem is but a dream within a dream.", author: "Edgar Allan Poe"},
11
:
{quote: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.", author: "Francis of Assisi"},
12
:
{quote: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill"},
13
:
{quote: "Permanence, perseverance and persistence in spite …ings distinguishes the strong soul from the weak.", author: "Thomas Carlyle"},
14
:
{quote: "Independence is happiness.", author: "Susan B. Anthony"},
15
:
{quote: "The supreme art of war is to subdue the enemy without fighting.", author: "Sun Tzu"},
16
:
{quote: "Keep your face always toward the sunshine - and shadows will fall behind you.", author: "Walt Whitman"},
17
:
{quote: "Happiness can exist only in acceptance.", author: "George Orwell"},
18
:
{quote: "Love has no age, no limit; and no death.", author: "John Galsworthy"},
19
:
{quote: "You can't blame gravity for falling in love.", author: "Albert Einstein"},
20
:
{quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.", author: "Aldous Huxley"},
21
:
{quote: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson"},
22
:
{quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
23
:
{quote: "Whoever is happy will make others happy too.", author: "Anne Frank"},
24
:
{quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison"},
25
:
{quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin"},
26
:
{quote: "There is nothing on this earth more to be prized than true friendship.", author: "Thomas Aquinas"},
27
:
{quote: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell"},
28
:
{quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius"},
29
:
{quote: "If opportunity doesn't knock, build a door.", author: "Milton Berle"},
30
:
{quote: "The secret of getting ahead is getting started.", author: "Mark Twain"},
31
:
{quote: "Let us be grateful to people who make us happy, th…he charming gardeners who make our souls blossom.", author: "Marcel Proust"},
32
:
{quote: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead"},
33
:
{quote: "Wise men speak because they have something to say; Fools because they have to say something.", author: "Plato"},
34
:
{quote: "The World is my country, all mankind are my brethren, and to do good is my religion.", author: "Thomas Paine"},
35
:
{quote: "A single rose can be my garden... a single friend, my world.", author: "Leo Buscaglia"},
36
:
{quote: "Take up one idea. Make that one idea your life - t…ery other idea alone. This is the way to success.", author: "Swami Vivekananda"},
37
:
{quote: "Friends show their love in times of trouble, not in happiness.", author: "Euripides"},
38
:
{quote: "You don't choose your family. They are God's gift to you, as you are to them.", author: "Desmond Tutu"},
39
:
{quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard"}
};

document.getElementById("random").addEventListener("click", ()=> {
  let randomNumber = Math.floor(Math.random()*30);
  document.querySelector(".main-container").style.transform = "translate(-50%,-50%) rotate(360deg)";
  let x = document.querySelectorAll('.theQuote');
  let y = document.querySelectorAll(".authorName span");
  x[0].innerHTML = quotesObj[randomNumber].quote;
  y[0].innerHTML = quotesObj[randomNumber].author;
});
