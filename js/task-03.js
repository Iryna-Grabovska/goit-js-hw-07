const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector("#gallery")
const imagesEl = images.map(img => {
  const addItems = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.alt = img.alt;
  imgEl.src = img.url;
  imgEl.width = 250;

  addItems.appendChild(imgEl);
  console.log(addItems);
  console.log(imgEl);
  return addItems;
})
ul.append(...imagesEl);

