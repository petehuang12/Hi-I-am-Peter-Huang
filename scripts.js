/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth; /* Enable smooth scrolling */
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    color: #ff6347; /* Change color on hover */
}

.section {
    padding: 60px 20px;
    min-height: 100vh; /* Each section takes up the full viewport height */
    text-align: center;
}

.section:nth-child(odd) {
    background-color: #f4f4f4; /* Alternate background colors for sections */
}

.section:nth-child(even) {
    background-color: #fff;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}
