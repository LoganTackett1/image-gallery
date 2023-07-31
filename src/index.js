import newImageGallery from "./image-gallery";
// eslint-disable-next-line no-unused-vars
import css from "./index.css";

const geeseList = ["https://wgme.com/resources/media2/16x9/full/1015/center/80/0d59c6ba-0dbc-47ce-a720-0aabf174963b-large16x9_GettyImages115867435.jpg",
    "https://www.birdnote.org/sites/default/files/Canada-Goose-and-goslings-800-Don-DeBold-CC.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyggFb7LxMyWvBd0gxW-xr5CT_mjI7fVPTQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zWE3RWbMcXkIGWsNlcrs8IZlb9PvKsHDMQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBAZYqCtmfK7ip9QsYp-NWgDa-Ul_8QhZOg&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSyVB4yy47fKCDfBv8KsSSfZpiGlHFK-KWA&usqp=CAU"];

const geeseGallery = newImageGallery(geeseList);
geeseGallery.classList.add('geese');

document.body.appendChild(geeseGallery);
