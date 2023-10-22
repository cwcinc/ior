const colorize = {
  "UChI0J7F5WGGM8MoPJbeOn3A":["#15e88a", "Itl' TJ music"],
  "UCKTClHQ95gmeSDbjV8d42hg":["#2f9433", "The Kid From Brooklyn Music"],
  "UCzwh7qYbaZJZSSYHHrfhWZg":["#E69696", "Crescendo With Cameron"],
  "UCONQdshorUnIuwvaC6fw6Yw":["#FE6900", "LifeIsGood"],
  "UCnCQmFq11fNZEte0OdHUYDw":["#f7ff0a", "Cash Money"],
  "UCR9xj3lNRYohpcw6UbYMACg":["#2b2bff", "Keu Music"],
  "UCjftBOYgvHPH-sY8O_fUfmA":["#e3324d", "LEROY the PANTRY BOY"],
  "UCSQivt4Ik5V8cg7q6fAveUw":["#7d583b", "Al Pharoh Music"],
  "UC7ko6OXvlWRXIr9OCt-T46w":["#22ff00", "potatojuiceultra"]
}

const defaultColor = "#804040"


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
    addLB(sorted);
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
  console.log(lbArr);
  for (i = 0; i < lbArr.length; i++) {
    var LBItem = document.createElement("li");
    console.log(lbArr[i][3]);
    var color = colorize[lbArr[i][3]]
    console.log(color);
    if (typeof color == "undefined") {
      color = defaultColor;
    } else {
      color = color[0];
    }
    console.log(color);
    LBItem.value = lbArr[i][1];
    
    LBItem.innerHTML = `<a href="https://www.youtube.com/watch?v=${lbArr[i][2]}" target="_blank" class="highlight" style="border-color: ${color}">${lbArr[i][0]}</a>`;
    LB.appendChild(LBItem);
  }
}

function TEST() {
  addLB([["AIP", "432", "wrararawr", "UCR9xj3lNRYohpcw6UbYMACg"], ["Ive got 3er3", "812", "url", "UCzwh7qYbaZJZSSYHHrfhWZg"], ["too soon", "258", "spooky", "UCKTClHQ95gmeSDbjV8d42hg"]])
}
