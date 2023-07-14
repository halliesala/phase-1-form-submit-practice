// # All of the Forms

// ## First Deliverable
// For the `#profile-form` when a user submits, it replaces the contents of `#profile-name` and `#profile-description` with whatever the user typed into `#profile-name-input` and `#profile-description-input`
const profileName = document.querySelector('#profile-name');
const profileDescription = document.querySelector('#profile-description');
const profileForm = document.querySelector('#profile-form');
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedName = e.target['profile-name-input'].value;
    const userSubmittedDescription = e.target['profile-description-input'].value;
    profileName.textContent = userSubmittedName;
    profileDescription.textContent = userSubmittedDescription;
    profileForm.reset();

})

// ## Second Deliverable
// When the `#activity-form` gets submitted, it adds the a new activity as a `<p>` tag to the `#activities-container`.
const activitiesContainer = document.querySelector('#activities-container');
const activityForm = document.querySelector('#activity-form');
activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedContent = e.target['activity-input'].value;
    const newP = document.createElement('p');
    newP.textContent = userSubmittedContent;
    activitiesContainer.append(newP);
    activityForm.reset();
})

// ## Third Deliverable
// When the `#cool-points-form` is submitted, it adds to the `#cool-points` span.
const coolPointsForm = document.querySelector('#cool-points-form');
const coolPointsSpan = document.querySelector('#cool-points');
coolPointsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedNumber = e.target['cool-points-add'].value;
    coolPointsSpan.textContent = (+coolPointsSpan.textContent) + (+userSubmittedNumber);
    coolPointsForm.reset();
})


// ## Fourth Deliverable
// When the `#cool-multiplier-form` is submitted, it multiplies the number of cool points in `#cool-points` by the submitted amount.
const coolMultiplierForm = document.querySelector('#cool-multiplier-form');
coolMultiplierForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedNumber = e.target['cool-points-multiplier'].value;
    coolPointsSpan.textContent = (+coolPointsSpan.textContent) * (+userSubmittedNumber);
    coolMultiplierForm.reset();
})
// ## Fifth Deliverable
// When the `#picture-form` is submitted it takes the submitted URL and creates and appends a new `<img>` that shows the picture for the URL.
const pictureForm = document.querySelector('#picture-form');
const picturesContainer = document.querySelector('#pictures-container');
pictureForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedUrl = e.target['url'].value;
    const newImg = document.createElement('img');
    newImg.src = userSubmittedUrl;
    picturesContainer.append(newImg);
    pictureForm.reset();
})