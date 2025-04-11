//비동기식 형식
let temp = document.querySelector("#temp");
let place = document.querySelector("#place");
let wind = document.querySelector("#wind");
let des = document.querySelector("#des");
let feel = document.querySelector("#feel");
let hum = document.querySelector("#hum");
let iconImg = document.querySelector("#icon");
let rain = document.querySelector("#rain");
// let Img = document.querySelector("#Img");

// let cityname = "seoul";
let APIkey = "be2aacf346d50fd70c4e26aa078126a8";

//날씨정보//
weather = async (cityname) => {
  console.log(cityname);
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //날씨정보를 data 변수에 저장//
  let data = await response.json();
  console.log(data);

  //온도//
  let temp2 = data.main.temp;
  console.log(`${temp2}℃`);
  temp.textContent = `${Math.round(temp2)}℃`;

  //위치//
  let place2 = data.name;
  console.log(place2);
  place.textContent = place2;

  //풍속//
  wind.textContent = `${Math.round(data.wind.speed)}m/s`;

  //날씨설명//
  des.textContent = data.weather[0].description;

  //체감온도//
  feel.textContent = `${Math.round(data.main.feels_like)}℃`;

  //습도//
  hum.textContent = `${Math.round(data.main.humidity)}%`;

  //openweather가 제공하는 아이콘//
  let icon = data.weather[0].icon;
  console.log(icon);
  let iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  console.log(iconUrl);
  iconImg.src = iconUrl;

  //강수량//
  // rain.textContent = `${data.rain}mm/h`;

  //만든 아이콘//
  // let sun;
  // if (icon == "01d") {
  //   sun = "img/insideout2.png";
  // } else if (icon == "02d") {
  //   sun =
  //     "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MTBfMjM1/MDAxNDk5NjUyMDQ4OTky.rY0tENCUu7nNctJPv8aZ3UzdH1lmFNEtnyeVuIUWlQAg.64IkdnkTx38Kxf9O1GME-aNkjGuK_7jeg_CvIw0unLgg.PNG.kma_131/%EF%BC%91.png?type=w800";
  // }
  // Img.src = sun;
};

// weather();
