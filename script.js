const colorize = {
  "UChI0J7F5WGGM8MoPJbeOn3A":["#042a19", "Itl' TJ music"],
  "UCKTClHQ95gmeSDbjV8d42hg":["#126615", "The Kid From Brooklyn Music"],
  "UCzwh7qYbaZJZSSYHHrfhWZg":["#E69696", "Crescendo With Cameron"],
  "UCONQdshorUnIuwvaC6fw6Yw":["#FE6900", "LifeIsGood"],
  "UCnCQmFq11fNZEte0OdHUYDw":["#ffca53", "Cash Money"],
  "UCR9xj3lNRYohpcw6UbYMACg":["#000033", "Keu Music"],
  "UCjftBOYgvHPH-sY8O_fUfmA":["#451b0a", "LEROY the PANTRY BOY"],
  "UCSQivt4Ik5V8cg7q6fAveUw":["#4d3522", "Al Pharoh Music"],
  "UC7ko6OXvlWRXIr9OCt-T46w":["#2a6955", "potatojuiceultra"]
}


function viewsLB() {
  getPlaylist().then(IDs => {
    var promises = [];
    for (let i = 0; i < IDs.length; i++) {
      promises.push(getViews(IDs[i]).then(views => {return views}));
    }
    return Promise.all(promises).then((res) => {
      return res;
    });

  }).then(outArr => {
    var sorted = [...outArr].sort((a, b) => b[1] - a[1]);
    var mainList = [];
    for (let i = 0; i < sorted.length; i++) {
      mainList.push([`${sorted[i][0]}  --  ${sorted[i][1]} views`, sorted[i][2], sorted[i][3]]);
    }
    addLB(mainList);
  });
  
}

function getPlaylist() {
  return fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.youtube.com/playlist?list=PLBu3dXFyxej_q4qZuVBecE5sZ5IthE5eF')).then(content => content.text()).then(data => {
    findKey = 'Renderer":{"videoId":"';
    indexes = [...data.matchAll(new RegExp(findKey, 'gi'))].map(a => a.index)

    playlistIDs = [];
    for (i = 0; i < indexes.length; i++) {
      let index1 = indexes[i];
      let ID = data.slice(index1 + 22, index1 + 33);
      playlistIDs.push(ID);
    }
    return playlistIDs;
  });
}

function getViews(videoID) {
  F = fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.youtube.com/watch?v=' + videoID)).then((content) => content.text()).then((data) => {
    //console.log(data);
    dataIndex = data.indexOf('"viewCount":"');
    dataEnd = data.indexOf('","author":"');
    viewCount = parseInt(data.slice(dataIndex + 13, dataEnd));

    nameIndex = data.indexOf('"title":"');
    nameEnd = data.indexOf('","lengthSeconds');
    vidName = data.slice(nameIndex + 9, nameEnd);

    creatorIndex = data.indexOf('","channelId":"') + 15;
    creatorEnd = creatorIndex + 24
    creatorID = data.slice(creatorIndex, creatorEnd);
    if (!(creatorID in colorize)) {
      console.log(videoID);
      console.log(creatorID);
      console.log(data);
    }
    return [vidName, viewCount, videoID, creatorID];
  });
  
  return F;
}

function addLB(lbArr) {
  var LB = document.getElementById("LB");
  LB.innerHTML = "";
  
  for (i = 0; i < lbArr.length; i++) {
    var LBItem = document.createElement("li");
    console.log(lbArr[i][2]);
    var color = colorize[lbArr[i][2]]
    console.log(color);
    if (typeof color == "undefined") {
      color = "#AAAAAA";
    } else {
      color = color[0];
    }
    console.log(color);
    LBItem.innerHTML = `<a href="https://www.youtube.com/watch?v=${lbArr[i][1]}" target="_blank" class="highlight" style="background: ${color}">${lbArr[i][0]}</a>`;
    LB.appendChild(LBItem);
  }
}

function TEST() {
  addLB([["AIP", "wrararawr", "UCR9xj3lNRYohpcw6UbYMACg"], ["Ive got 3er3", "url", "UCzwh7qYbaZJZSSYHHrfhWZg"], ["too soon", "spooky", "UCKTClHQ95gmeSDbjV8d42hg"]])
}
