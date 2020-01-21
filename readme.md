# Joe Martone
Personal Site for Percussionist Joe Martone

## Installing Locally
1. Download node.js and install.
2. In terminal run `yarn install` from both the /web and /studio directories.
3. To start the Sanity Studio, from the /studio directory run command `sanity start`.
4. To run site locally, run command `gatsby develop` from the /web directory.

## Editing Content from Sanity Studio
To edit using the sanity studio, use the local instance or [http://joemartone.sanity.studio](http://joemartone.sanity.studio).

### Navigating the Studio
For the most part, the studio is arranged by the content on each page of the website. For each page, there is either a single area where all the content changes can be made, or there is a sub-menu where you can add various types of content. For pages with categories, typically content is added as an individual item. Categories represent certain headers on each page (such as Soundtracks, or Televisions shows) and you populate them with items you want under those areas. Pages with categories have a sub-menu option where you can change the order that they appear on the actual page.

*Any time you make changes to the site, you must redeploy the site in order for the changes to show. See below for instruction on that.*

Below is a description of the layout of all the areas of the Studio:

### Biography Page
Biography Page consists of a rich text area that can be formatted, and will have a gallery following it with images.

### Resume Page
**Resume Page Category Order**
Add categories you want on the Resume Page and order them by dragging.

**Resume Categories**
Represent the headers along with the items that are on the resume page. Resume items with external links will open in a new tab when the title is clicked.
They will appear on the page in the format *TITLE - DESCRIPTION*.

### Instruments Page
**Instruments Ordering**
Add instrument categories to page and modify their order.

**Instrument Categories**
Categories for the instruments page.  Instruments are added using a single rich-text field area that you can edit to have a type of list (numbered, bullet) or have sub-titles for instrument categories where you want more organization/sorting.

### Lessons Page
A single area to edit the text that appears on the page, as well as a list of files that can be added to download.

Downloaded files will be opened in a new tab when clicked from the website.

### Media Page
**Media Page Categories and Content**
The order of the media on the media apge will always be Video, Audio, and then Photos. (I can edit them, but they cannot be changed via the Studio)
*Adding Content to the media categories:*  In order to add content to the media categories you first need to add the media using the Photos, Audio Files, or Videos area.  The categories for the media page reference the audio, photo, and video from those areas (this allows them to also be used elsewhere on the site if you want).

**Photos**
Here you can add photos to be used in the Photos Category.

**Audio Files**
Here you can add audio to be used in the Audio Category.

**Videos**
Here you can add YouTube links to be used in the Videos Category. You must enter the youtube video ID in addition to the actual link that you copy/paste from youtube.  This helps beacuse if youtube changes how they display links or a channel changes its name your video links should not break (The website actually uses the id, not the URL to show the videos).

#### Contracting Page
Single page to edit all the content on the page.

You can add contracts that will give a title, description, and then show and videos/photos that are attached.  After that is a list of ensembles and instruments that can be edited.

## Deploying the Website
This is a static site, meaning that every time someone visits the website on their computer, they are just download static files from a server somewhere, just like downloading a photo or video. Because of that, if you make changes to the website, you essentially need to "save" or rebuild the entire thing so that when someone visits it, it the updated version. 

To deploy the site:
1. Go to [http://joemartone.sanity.studio](http://joemartone.sanity.studio) and login.
2. At the top menu, go to "Dashboard".
3. Click on the "Deploy" button. You should see the netlify icon change from "success" to "building" while the site is re-building. Once you see "success" again, the site has been rebuilt and should be live with the changes.