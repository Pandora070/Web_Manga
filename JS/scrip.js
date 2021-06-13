var dataJson = [
  {
    id: 1,
    name: "rstirley0",
    image: "http://dummyimage.com/100x136.png/5fa2dd/ffffff",
    chater: 34,
  },
  {
    id: 2,
    name: "bskirrow1",
    image: "http://dummyimage.com/100x136.png/dddddd/000000",
    chater: 1,
  },
  {
    id: 3,
    name: "rsiviter2",
    image: "http://dummyimage.com/100x136.png/cc0000/ffffff",
    chater: 67,
  },
  {
    id: 4,
    name: "eblincowe3",
    image: "http://dummyimage.com/100x136.png/5fa2dd/ffffff",
    chater: 95,
  },
  {
    id: 5,
    name: "kmcquaide4",
    image: "http://dummyimage.com/100x136.png/cc0000/ffffff",
    chater: 45,
  },
  {
    id: 6,
    name: "wgleave5",
    image: "http://dummyimage.com/100x136.png/ff4444/ffffff",
    chater: 73,
  },
  {
    id: 7,
    name: "opoyzer6",
    image: "http://dummyimage.com/100x136.png/dddddd/000000",
    chater: 34,
  },
  {
    id: 8,
    name: "dpuddicombe7",
    image: "http://dummyimage.com/100x136.png/ff4444/ffffff",
    chater: 92,
  },
  {
    id: 9,
    name: "tparnall8",
    image: "http://dummyimage.com/100x136.png/ff4444/ffffff",
    chater: 45,
  },
  {
    id: 10,
    name: "ayounghusband9",
    image: "http://dummyimage.com/100x136.png/cc0000/ffffff",
    chater: 17,
  },
];
var dataJsonNoti = [
  {
    id: 1,
    name: "rstirley0",
    image: "http://dummyimage.com/100x136.png/5fa2dd/ffffff",
    chater: 34,
  },
  {
    id: 2,
    name: "bskirrow1",
    image: "http://dummyimage.com/100x136.png/dddddd/000000",
    chater: 1,
  },
  {
    id: 3,
    name: "rsiviter2",
    image: "http://dummyimage.com/100x136.png/cc0000/ffffff",
    chater: 67,
  },
];

$(function () {
  $("#data").prepend(dataJson.map(loading));
});
// nap anh tu data
function loading(items) {
  return (
    '<div class="col-md-6 border-0 mt-sm-1 mt-1 mt-col-2 mt-md-1 card mb-6 ">\
            <div class="row g-0">\
              <div class="col-md-4 col-6">\
                <img class="image" src="' +
    items.image +
    '" alt="chưa có hình">\
              </div>\
              <div class="col-md-8 col-6">\
                <div class="card-body">\
                  <h5 class="card-title">' +
    items.name +
    '</h5>\
             <br> <span class="chapter-ds "><a href="#" class="card-text">chapter ' +
    items.chater +
    '</a></span> <br> <br>\
                  <p class="card-text"><small class="text-muted">the new chapter</small></p>\
                </div>\
              </div>\
            </div>\
          </div>\
         '
  );
}

$(function () {
  $("#dataNoti").after(dataJsonNoti.map(loadingNati));
});

function loadingNati(items) {
  return (
    ' <div class=" border-0 col-md-12 mb-2  card ">\
            <div class="row g-0">\
              <div class="col-md-4">\
                <img class="image" src="' +
    items.image +
    '" alt="chưa có hình">\
              </div>\
              <div class="col-md-8">\
                <div class="card-body">\
                  <h5 class="card-title">' +
    items.name +
    '</h5>\
                  <p class="card-text"> The new chapter </p>\
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
                </div>\
              </div>\
            </div>\
          </div>'
  );
}
// nút top

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() < 50)
    {
      $(".back-to-top").hide();
    }
    else {
      $(".back-to-top").show();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $(window).scrollTop() = 0;
  });
});

