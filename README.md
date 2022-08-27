
Ampd is a parking market place for EV. We connect EV drivers looking for parking space with a charging port for their vehicles with hosts that have available car parks and/or driveways in convenient locations across Australia.

![Screen Shot 2022-08-03 at 1 42 04 PM](https://user-images.githubusercontent.com/50424620/187046162-68b505f0-91a3-4f8d-8f61-cd3c51137317.png)

### :zap:️DEMO Link

Deployed version
https://ampd-client.netlify.app/

### :star-struck: Project 2 for General Assembly’s 12 week program - Group project.

AMPD is a company that takes climate change seriously, our goal is to create a global community of like minded individuals who love EV’s and want to offer their charging facility or find a place to recharge anywhere they go.
We are software engineers who are passionate about climate change and electronic vehicles.
On our site one can find charging stations near you and rent your charging station for public use, create a passive income for yourself.
`Build status. 1.0`
This current build allows one to search for current charging stations or add new station and parking space.
In future builds, we will create a user profile page so that one be be able to create a user account, update it, delete their profile.
Next we will implement stripe or a similar technology to facilitate financial transactions.
We will also implement
We created a data base using postgreSQL. We have used axios to access our DB and show the data.

## Creating markers on the map.

We have use the gem geocoder which allows the client to Look up street addresses, IP addresses, and geographic coordinates.
`FETCH`
In order to display the markers, we have taken the seed data within the parameters of our :parking_spaces model, including :parking_spaces_id :latitude and :longitude from
and fed that to the
`POST` - create SAVE marker.
One can also add a marker through the search bar, it initially creates a temp marker. Once the user clicks add, then in our add function, add the tempMarker to our markers array and set tempMarker back to null, this changes the state and the colour of the marker and posts the longitude and latitude of the marker back to the database adding another parking_space.

## User Authentication - using JWT between React and Rails

Implemented via modified instructions from Kevin Glasgow https://levelup.gitconnected.com/react-rails-full-auth-from-scratch-using-jwt-part-i-963c4b83cbe8

### _:warning: Issues_

- initially there was a problem displaying the pins because of a protected route but this was relaxed so that you don’t need to pass the token into an auth header to view them.
- also missed the secrets.yml at time of production so the map didn’t display (but pins did ¯\_(ツ)\_/¯ ) some StackOverflow searching found the issue fix for this.

## Deployment - front-end to Netlify

Deployment was a dream using Netlify. So easy. Just a matter of working out the bugs (like the missing secrets.yml and the need to add a \_redirects file to /public for navigation). Another great artical that was useful in getting this deployed was from Scott Domes https://scottdomes.com/rails-authentication-deploy/

### _:warning: Issues_

- needed to add a \_redirects file to /public for navigation to work with react router more StackOverflow searching found the issue fix for this

### :smiley_cat: Project on GitHub

Download or clone the repository:
`https://github.com/tracey-web/ampd_server`
`https://github.com/tracey-web/ampd_client`

### About the app

- To access apps functionality, please register using your credentials.
- SignIn available with existing users:\
  `Email: marthajordans@gmail.com`\
  `PW: chicken`

### Pages

Homepage
<img src=“./public/images/home1.png” width=“400” height=“200">
Map
<img src=“./public/images/findaspace1.png” width=“400" height=“200”>
Model
<img src=“./public/images/Models.png” width=“400” height=“200">

### Technologies used

**Client Side:**

1. React
2. JavaScript
3. CSS
4. Maretial-UI
5. Style components
6. React Router
   **Server Side:**
7. Rails
8. Ruby
9. JWT- JSON web token
10. postgreSQL
11. API (mapbox)
    react-mapbox-gl-geocoder
    “react-map-gl”

### List of contributors:

[Angie](https://github.com/@angepol) / @angepol: maps and markers using MapBox, seed data, and Heroku deployment
[Kundai](https://github.com/@Just-Kundai) / @Just-Kundai: parking spaces page, footer, and styling
[Natalia](https://github.com/@appaluza) / @appaluza: header, style, and home page
[Tracey](https://github.com/tracey-web) / @tracey-web: user authentication(signin/signup/signout) and Netlify deployment

### :v: Special Thanks to

Also a big thanks to Joel, Rowena and Pat for sharing their approaches to solving our bugs and their time.
