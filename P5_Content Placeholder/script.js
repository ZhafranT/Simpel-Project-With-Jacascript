const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animate_bgs = document.querySelectorAll('.animate-bg');
const animate_bg_texts = document.querySelectorAll('.animate-bg-text');

setTimeout(getData, 2500)

function getData(parms) {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />';
  title.innerHTML = 'This is My portofolio';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam facere dolores reiciendis aperiam culpa voluptas adipisci quisquam obcaecati quas iure esse officia totam reprehenderit rerum maiores eius, fuga sed. Culpa.';
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'Fran Tosa';
  date.innerHTML = 'September 15, 2021';

  animate_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animate_bg_texts.forEach((bg) => bg.classList.remove('animate_bg_texts'));
}
