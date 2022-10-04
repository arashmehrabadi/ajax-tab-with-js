

// AJAX tab

let behineTabsOne = document.querySelectorAll('li.behinde-tab-one')
let behineTabsTwo = document.querySelectorAll('li.behinde-tab-two')
let behineTabsThree = document.querySelectorAll('li.behinde-tab-three')
let behineTabsFour = document.querySelectorAll('li.behinde-tab-four')
let behineTabsFive = document.querySelectorAll('li.behinde-tab-five')


let violationPage = document.querySelector('div.request')
let notificationsPage = document.querySelector('div.request-extension')
let classesPage = document.querySelector('div.request-profile')
let protestPage = document.querySelector('div.request-protest')
let deletePage = document.querySelector('div.request-delete')







// AJAX tab



class Front {

    showPageOne() {
        violationPage.classList.remove('hidden')
        notificationsPage.classList.add('hidden')
        classesPage.classList.add('hidden')
        protestPage.classList.add('hidden')
        deletePage.classList.add('hidden')
    }
    showPageTwo() {
        notificationsPage.classList.remove('hidden')
        violationPage.classList.add('hidden')
        classesPage.classList.add('hidden')
        protestPage.classList.add('hidden')
        deletePage.classList.add('hidden')


    }
    showPageThree() {
        classesPage.classList.remove('hidden')
        violationPage.classList.add('hidden')
        notificationsPage.classList.add('hidden')
        protestPage.classList.add('hidden')
        deletePage.classList.add('hidden')
    }
    showPageFour() {
        protestPage.classList.remove('hidden')
        violationPage.classList.add('hidden')
        notificationsPage.classList.add('hidden')
        classesPage.classList.add('hidden')
        deletePage.classList.add('hidden')

    }
    showPageFive() {
        deletePage.classList.remove('hidden')
        violationPage.classList.add('hidden')
        notificationsPage.classList.add('hidden')
        classesPage.classList.add('hidden')
        protestPage.classList.add('hidden')

    }

}

let front = new Front()

behineTabsOne.forEach(behineTabOne => {
    behineTabOne.addEventListener('click', (e) => {

        front.showPageOne()
    })
});

behineTabsTwo.forEach(behineTabTwo => {
    behineTabTwo.addEventListener('click', (e) => {

        front.showPageTwo()

    })
});
behineTabsThree.forEach(behineTabThree => {
    behineTabThree.addEventListener('click', (e) => {

        front.showPageThree()
    })
});
behineTabsFour.forEach(behineTabFour => {
    behineTabFour.addEventListener('click', (e) => {

        front.showPageFour()
    })
});
behineTabsFive.forEach(behineTabFive => {
    behineTabFive.addEventListener('click', (e) => {

        front.showPageFive()

    })
});





