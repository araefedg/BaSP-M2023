# **Become a Software Professional 2023**

This is a Landing page development project for the 15 weeks training process "Become a software professional 2023" offered by Radium Rocket, a software development company established in Rosario, Argentina.
In this readme, week by week i will go through the work process in detail.

---

## How to use

To use this code, simply copy and paste the code into your preferred IDE or editor and modify it to suit your needs.

---

## Week 01

On our first week we had to develop the Figma prototype of the landing page for MegaRocket GYM SA. a gym brand.
The first instance of the project was a group activity, me and my partner Ignacio Galcerán were in charge of the design.
We base the construction of it following the example given by the tutors and the weekly planning. We use the resources and components available in the UI-Kit (a pre-designed Figma file), we also include fonts, icons and images to reach the final result.
It was our first experience using Figma, it was a challenge that we managed to carry out working as a team with good communication.

### **Development steps**

<details><summary>CLICK ME</summary>
<p>

1. Started by choosing the desktop frame, the color pallet and some pre-designed componentes as buttons and fonts.
2. Stablish the basic important sections: Header, sidebar, main and a footer.
3. The header will include only the Logo (available on the UI-Kit).
4. The sidebar will be made up of the link sections: Home, Sing Up, Login and Contact. The Contact will display another section with the contact options: an email, a phone number and an adress, along with the corresponding icons. Is gonna be displayed in the left side of the screen.
5. The main section will be composed of a title, a subtitle, an explanatory text and an image that will occupy a large part of the page.
6. Before the footer, we will add another sections: Meet us, Contact us, About us and a gym activities section, every of this sections will occupy a screen frame an be separate one another with a line between them.
7. Section Meet us: Has a title and it's divided into 4 sub-sections that explain the information offered within the page where clients would be able to understand what this company is up to. We also use images/icons that identify every sub-section so as titles and a brief descriptive text.
8. Section Contact us: Starts with a title (this is repeated in every section) Here we will make a contact form, which will have different inputs: name, last name, email, a checkbox options to choose the motive of the consulting, and a text field to write a message. Finally counts with 2 buttons, one for sending and one for resetting.
9. Section About us: Starts with a section title, it has 2 main paragraphs that describe the history of the company. Then it has a subtitle and a text that talks about the values of the company accompanied by a representative image aligned to the left, finally it has a second subtitle and a small text concluding the information and another image aligned to the right.
10. Gym activities section: Here we will describe the available activity plans that the gym offers. Consist of 4 sub-sections: one for activities and 3 different membership plans (Classic, Black and Classes only). Each of them is arranged in boxes, they have a title and a list of activities that make up the plan.
11. Finally we have the footer section: Here we are gonna make a container that occupies the entire width of the screen where we will place the social networks icons (Twitter, Instagram and Facebook) and copyright information.

</p>
</details>

---

## Week 02

This week the work mode was individual. I started by reviewing the documentation and intensively reading the week planning.
Then progressively I was creating the HTML file, first making the basic structure and then adding the necessary components, always thinking about creating a semantic structure that facilitates accessibility and SEO.
This landing page has a header, a side navigation bar, a main, and several content sections within it, also has a contact form and a footer.
The purpose is to start shaping the prototype of the landin page developed in week 01.

### **Structure components**

The tags used in the HTML document are:

<details><summary>CLICK ME</summary>
<p>

1. `<!DOCTYPE html>`: This declaration specifies the version of HTML that is being used in the document. In this case, it is HTML5, the latest version.

2. `<html lang="en">`: This specifies the language of the document. In this case, the language is English.

3. `<head>`: The head section contains meta information about the document, here we are using only 2 meta tags.

4. `<meta charset="UTF-8">`: This tag specifies the universal character encoding.

5. `<title>MegaRocket GYM</title>`: This tag specifies the title of the document, which is displayed in the browser's title bar.

6. `<body>`: The body contains the main content of the document, such as sections, pharagrphs, images, and links.

7. `<header>`: This tag defines the header section of the document. In this case contains the logo.

8. `<img>`: This tag is used to insert an image into the HTML document.

9. `<aside>`: This tag defines the aside section of the document, we decided to use it as the nav bar, where is the navigation menu, links and contact information.

10. `<ul>`: This tag defines an unordered list,  used to display a list of links in a navigation menu and other sections in this page.

11. `<li>`: This tag defines a list item inside list tags.

12. `<a>`: We are using this tag to mark an hyperlink, is used in the navigation menu and the footer.

13. `<main>`: This tag defines the main content section of the document, which contains the primary content of the page, a title, a subtitle, a paragraph, and a image.

14. `<h1>, <h2>, <h3>`: These tags define headings of different levels. The `<h1>` tag is used for the main heading of the page, while the `<h2>` and `<h3>` tags are used for subheadings.

15. `<p>`: This tag is used to define paragraphs of text.

16. `<section>`: This tag defines a section of the document, which used to group content. We divided the content in groups, every group is a section and contains different information about.

17. `<form>`: This tag is used to define a contact form.

18. `<label>`: This tag is used to define a label for a form input element.

19. `<input>`: This tag is used to define an input element for a form, as a text or checkbox.

20. `<textarea>`: This tag is used to insert text in a form.

21. `<button>`: This tag is used to define a button element for a form, which can be used to send message or reset in this case.

22. `<footer>`: This tag is used to define a footer. It represents a container for the content that appears at the bottom of a webpage, such as copyright, contact information, or links to related pages.

</p>
</details>

---

## Week 03

We started making corrections in the HTML file and reviewing the documentation and the tasks to be developed, this week it was time to implement the styles in CSS.
It's a new structure, we begin to see the visual changes in our landing, the page that we have been working on since the first week begins to take shape.
The weekly objective is to create a static design, understand the use of classes, properties and their attributes, also to understand the connection between files.
The task is to work with CSS styles, have to name the classes correctly, avoid the excessive use of properties such a position absolute and relative. Also can not use flexbox and grid and the measure unit used in the project should be only pixels.

### **Styles properties**

This are the most important properties used in the project:

<details><summary>CLICK ME</summary>

<p>

1. `Box Model Properties:`
These properties include "width", "height", "padding", "border", and "margin". They control the size, spacing, and borders of HTML elements on the page.

2. `Display Property:`
This property control how HTML elements are displayed on a web page. For example, you can use the "display" property to control whether an element is treated as a block or inline element.

3. `Font Properties:`
These properties control the font family, size, style, and weight of text in HTML elements. They include "font-family", "font-size" and "font-weight".

4. `Color Properties:`
These properties control the color of text, backgrounds, and borders in HTML elements. They include "color", "background-color", and "border-color".

5. `Positioning Properties:`
These properties control the position of HTML elements on a web page. They include "position", "top", "right", "bottom", and "left". For example, you can use the "position" property to control whether an element is positioned relatively or absolutely.

</p>
</details>

---

## Week 4

Moving on to the 4th week the challenge within the weekly problem was to work on our HTML document and this time develop it using the Flexbox properties in CSS.
To do so, we incorporated new CSS components, where we applied css to different sections of the html: We worked the header in header.css, the main (with all its sections) in main.css, the footer in footer.css and the styles applied to more than one element were worked in styles.css. The rules of this week were to understand how flexbox works and the relative units of measures, and also to dabble in Media Queries since the main objective was to develop our Landindig page (with mobile first methodology) using breakpoints and setting different properties and features.

From here you can access the finished project:

URL: <https://araefe1992.github.io/BaSP-M2023/Week-04/index.html>

## Authors

- Araceli Fernández
