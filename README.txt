-----CONCEPTS Section-----
From the paper I wrote past friday (DURING CLASS)
1. Title: AleckOnTech's Site 
2. Navbar
    2.1: Top Navbar (For Future Updates) like [Home, Projects, Games, About]
    2.2: Personalize Bar on the right [Only background and text, saves by your browser cookies. Default is BGColor: Black, Color: White/Green.]
    2.3: Left Navbar for Table of Contents (some pages) and some draggable
3. Body
    3.1: Header + Social Links
    3.2: About me (description about myself and my plans in the future)
    3.3: My Coding Projects (some embedded or screenshots), but there will be a repository link
    3.4: Contact me
4. Footer
    4.1: COPYRIGHT (c) 2025, All Rights Reserved
    4.2: The Site's Source Code link and License

Website Goals and Structure (on paper)
    1. Being able to go back to prerel.html using a parameter
        like aleckontech.github.io?prerel=true
    2. On /projects, a JSON file will be used to store the contents since html is painful to write, thus parsing the content to JSON will save time.
    3. I do not want to put my old projects on the website repository, ESPECIALLY MY PAST GRADE 9 PROJECTS. they will be placed on the separate repository and rendered by parsing the text information to HTML. 
    4. Because my budget is low, I may not afford a domain name and a server to host the website. So i used github pages. Will acheive those probably in 2027.
    5. Homepage contents will mostly rely on Javascript to make the secrets via commands/parameters. (will do that to the rest of the webpages.)

    6. For Change BG/FG Button:
        1. Initialize the variables.
        2. create a function to make prompts on what will be the color value
        3. parse the inputted values to CSS
        4. Save that to your browser cookies (WIP For later updates)
        
        For later updates:  instead of propmpt(); there will be a window within HTML that will have 2 input fields and the apply button.
        Another one is "Preset Styles". Which there will be pre-configured styles. 

    7. For Contact us form
        https://docs.google.com/forms/d/e/1FAIpQLSc6a_RlZDJnCsAzmFktZsgwKdFSoViVSa4ba9lXnEJUF2DESw/formResponse
        For the input IDS
        entry.71825928=Contact&
        entry.1425949693=form.name&
        entry.1853997198=form.msg

-----DevLog Section-----
Based on my commits, there are some modification to the timer webpage
    2025-09-28: Released Date delayed to October 18, 2025; added Developer Note
    2025-10-17: Delayed the release date again to October 19 and updated the Developer Note
    2025-10-20: Struggled on making the navbar template, now done
    2025-10-21: Finished making the navbar.
    2025-10-22: Completed the Change BG/FG Button and now making the contents for the homepage, contact, and about page.
    2025-10-23: Fixing the issue with the navbar and the website contents.
    2025-10-24: Started adding all the contents and debugging the website. (and fixing the responsive problem
    2025-10-25: Important quality control and Website Released to the Public!

UPDATE 1: Project Webpage (Codename: semicolons)
    Purpose: Displays my past coding projects
