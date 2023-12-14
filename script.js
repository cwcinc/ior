const colorize = {
  "UChI0J7F5WGGM8MoPJbeOn3A":["#15e88a", "Itl' TJ music"],
  "UCKTClHQ95gmeSDbjV8d42hg":["#2f9433", "The Kid From Brooklyn Music"],
  "UCzwh7qYbaZJZSSYHHrfhWZg":["#E69696", "Crescendo With Cameron"],
  "UCONQdshorUnIuwvaC6fw6Yw":["#FE6900", "LifeIsGood"],
  "UCnCQmFq11fNZEte0OdHUYDw":["#f7ff0a", "Cash Money"],
  "UCR9xj3lNRYohpcw6UbYMACg":["#2b2bff", "Keu Music"],
  "UCjftBOYgvHPH-sY8O_fUfmA":["#e3324d", "LEROY the PANTRY BOY"],
  "UCSQivt4Ik5V8cg7q6fAveUw":["#7d583b", "Al Pharoh Music"],
  "UC7ko6OXvlWRXIr9OCt-T46w":["#22ff00", "potatojuiceultra"],
  "UCu7PcAI2zDMh0KuNJgqtC9g":["#dd3333", "Coolmanguydude4"],
  "UCMnUrJYu9cltgejBmUtYrmw":["ff2211", "Alvcard"]
}

const specialViews = {
  "videoName":"addedViews",
  "channelName":"addedViews",
  "Terces Pot":1070,
  "I've Got Ʒerʒ (Remastered 2023)":1074,
  "The Crown Has Fallen (Instrumental)":349,
  "Roh Patem":340,
  "Draob Resare":335,
  "Commerce to Chaos":329,
  "Skae Lemanon":312,
  "Skyline (Official Music Video)":244,
  "Planetary Awakening":235,
  "Moving Present":229,
  "Null Reflection":227,
  "Violet Crystals (with LifeIsGood)":215,
  "Uplift":112,
  "Elevate":97,
  "Highrise":96,
  "Downtown":89,
  "SongF":70,
  "Simple Slumber":48
}

const defaultColor = "#804040"

const testChart = [ { "x": "Itl' TJ music", "y": 2895 }, { "x": "The Kid From Brooklyn Music", "y": 2129 }, { "x": "Crescendo With Cameron", "y": 7020 }, { "x": "LifeIsGood", "y": 168 }, { "x": "Cash Money", "y": 257 }, { "x": "Keu Music", "y": 275 }, { "x": "LEROY the PANTRY BOY", "y": 406 }, { "x": "Al Pharoh Music", "y": 93 }, { "x": "potatojuiceultra", "y": 101 }, { "x": "Coolmanguydude4", "y": 20 }, { "x": "Alvcard", "y": 27 } ];


const testSorted = [ [ "The Smae - Itl' TJ", 1391, "xLh2Iw47bvo", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "I've Got Ʒerʒ (Remastered 2023)", 1130, "2B0_z_RzMio", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Terces Pot", 1113, "iTYKWDlyX3Q", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Draob Resare", 454, "vZk93h1mLJ0", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "The Crown Has Fallen (Instrumental)", 442, "QRJF0S8AU-0", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Roh Patem", 430, "AwIuaAmgS6w", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Skae Lemanon", 429, "pF2-zQ30jk8", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Commerce to Chaos", 359, "GDZ5at1EO2k", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "The Kid From Brooklyn - RATIO [Smooth NIP Diss Track] (ft. Alex + Da Bob*)", 356, "p-MEdKAwygc", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Yo Mama Ded - Itl' TJ (Official Audio)", 346, "QJKmDMmQvic", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "The Crown Has Fallen (Smooth NIP Diss Track)", 296, "m1QV5Rwl0M4", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Skyline (Official Music Video)", 288, "v2rp-8669fg", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "The Kid From Brooklyn - State of Things", 274, "VYqXK5DrmgM", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Planetary Awakening", 258, "7IxsguKdpVI", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Moving Present", 258, "kOXb5X3U03o", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Null Reflection", 244, "ELhfuLdljgg", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "I've Got Ʒerʒ! (Official Music Video)", 234, "_QtepT22Bzo", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Violet Crystals (with LifeIsGood)", 229, "_hODKO8a-J4", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "The Smae 2", 223, "JeoFSpfWjbw", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "spooky town - LEROY the PANTRY BOY", 209, "qmLkpeWLAA4", "UCjftBOYgvHPH-sY8O_fUfmA" ], [ "Yo Mama Ded - Itl' TJ (Official Music Video)", 202, "fSiQQd0nEQs", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "When? (ft. Life Is Good, The Kid From Brooklyn)", 175, "LM8lPNddwB8", "UCR9xj3lNRYohpcw6UbYMACg" ], [ "Elevate", 163, "azJVtAkktnA", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Highrise", 161, "5voSJEZRjC8", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Uplift", 154, "Lj7v_MWzHTc", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Itl' TJ - Yo mama ded (REMASTERED)", 142, "douVjVHT3Ss", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "The Kid From Brooklyn - NFT Collection (ft. talking ben) [Official Audio + Lyric Video]", 138, "S0ukh4PnBtk", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Cash's Casino feat. C.W.C., T.K.F.B., and Itl' TJ", 135, "c2qmncsJwSE", "UCnCQmFq11fNZEte0OdHUYDw" ], [ "Downtown", 131, "wvmBJoq6NYY", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "The Kitten Caboodle - National Cat Herders Day (Official Music Video)", 125, "DITSTFGUpFA", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Monke Christmas", 122, "9CjbAfflcdA", "UCnCQmFq11fNZEte0OdHUYDw" ], [ "Rocktopus Evolution Rap (school Project) -Itl TJ", 119, "hDeHO_DuYo4", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "🐙Rocktopolis🐙 (Rocktopus Evolution Rap Remix)", 109, "_rtqsMvit6I", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Yo Mama Ded (REMASTERED 2)", 106, "yRPfFpb_sIU", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "ƧKΛ4", 104, "8McWaydQGVU", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "SongF", 102, "679cQUkBb-k", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Tacocat Racecar", 101, "e5Ry9AfJdZA", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Apple.mov", 100, "1IB-UzHfOAc", "UCR9xj3lNRYohpcw6UbYMACg" ], [ "Itl Tj - Yo mama ded (fur elise edit)(remastered)", 99, "E3gyiSEgr9Q", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "Closer", 98, "B2FGOn0_H38", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "The Kid From Brooklyn - TOO SOON [Official Audio + Lyric Video]", 97, "De6miPtkWaU", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "The Kid From Brooklyn - PLUNDERED (ft. evilguy12) [Remastered Version]", 94, "ZslhOqxKOI0", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Itl' TJ - Yo mama ded (TORNADO SIREN REMIX)", 94, "iJ7YugqAu1Q", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Wanted", 93, "7Se-hNF47Ms", "UCSQivt4Ik5V8cg7q6fAveUw" ], [ "national pickle day", 85, "_KZN5vFZ7NM", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Bad piggies Preview - Yall Mamas Ded, Ft doop snog and Cash Money", 85, "EEBUH-vQK4w", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "National Drummer Day", 81, "fAbRWz1pX6A", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "R!P UNCL3 T0NY 💔 (feat. lifizgud1 \\u0026 CA$H MONEY) - LEROY the PANTRY BOY", 72, "z-uqMLd8egs", "UCjftBOYgvHPH-sY8O_fUfmA" ], [ "KDI", 68, "xgAVT9_ROAg", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Bad Piggies Preview - Fishing But Reel this time", 68, "U4-UGlcooHA", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "Missile Shark", 62, "xwWRkorDX98", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "VampireGender", 61, "BfrgfkpPLF4", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "Amanaplanacanalpanama123454321", 59, "dNXIslFPyIU", "UC7ko6OXvlWRXIr9OCt-T46w" ], [ "THE QUEST - LEROY the PANTRY BOY", 59, "VzbQ9932x0s", "UCjftBOYgvHPH-sY8O_fUfmA" ], [ "Summer", 58, "QVfr747HlrY", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "festive pineapple", 54, "FTFM0tL3bLA", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Bad Piggies Preview - FREE", 53, "qEHn9W0Y9Dg", "UChI0J7F5WGGM8MoPJbeOn3A" ], [ "Eaks Nonamel", 49, "whUTOvqZHy4", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Introduction", 47, "kiBxfKkDIVM", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "ghoul beans - LEROY the PANTRY BOY", 47, "V0Wk72OjDHY", "UCjftBOYgvHPH-sY8O_fUfmA" ], [ "Will-O'-The-Wisp", 46, "qCq9xYl8Yk4", "UCONQdshorUnIuwvaC6fw6Yw" ], [ "Head In The Clouds", 46, "CMp9mLoO9_0", "UCONQdshorUnIuwvaC6fw6Yw" ], [ "The Ballad of the Silly Cats of December and All of Their Merry Correspondents (Feat. Philip)", 42, "R24PHD2L2OY", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Scare Lemanon", 42, "ohyhm5Tem9U", "UC7ko6OXvlWRXIr9OCt-T46w" ], [ "ICE", 40, "eY7PS-r3hJ0", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "I've Got Ʒerʒ! (LifeIsGood Remix)", 36, "e-szM4y5Gng", "UCONQdshorUnIuwvaC6fw6Yw" ], [ "All In Song (EDM Remix)", 36, "WOUXVGlLdVQ", "UCzwh7qYbaZJZSSYHHrfhWZg" ], [ "Holly or Jolly Christmas But Not Both Simultaneously", 35, "-1IEsdtZzoA", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "The World Tour (ft. Cash Money)", 28, "lfVNGdBZc_8", "UCONQdshorUnIuwvaC6fw6Yw" ], [ "DISR3SPECT - YUNI BLU", 28, "dUSbyuIU2MQ", "UC3rE6lvT_WzE1IPZ0CkU2sg" ], [ "Relax Relapse", 27, "OVn_l518vgo", "UCKTClHQ95gmeSDbjV8d42hg" ], [ "Alvcard's Theme", 27, "DrjbjCva1BY", "UCMnUrJYu9cltgejBmUtYrmw" ], [ "The Art of Song and Sound - Coolmanguydude4", 20, "Bt6zYP91-_0", "UCu7PcAI2zDMh0KuNJgqtC9g" ], [ "wesley and the skeleton - LEROY the PANTRY BOY", 19, "IHUGgD_6r3M", "UCjftBOYgvHPH-sY8O_fUfmA" ], [ "Spectacular Spooktober Special", 12, "u6xHilYdM48", "UCONQdshorUnIuwvaC6fw6Yw" ], [ "Chicken Rap", 0, "_z_hSOvbk2E", "UCKTClHQ95gmeSDbjV8d42hg" ] ];

var progress;
const progressBox = document.getElementById("progress");

function viewsLB() {
  progress = 0;
  progressBox.innerHTML = "Initiating...";
  
  getPlaylist().then(IDs => {
    progressBox.innerHTML = "Playlist Retrieved...";
    var promises = [];
    for (let i = 0; i < IDs.length; i++) {
      promises.push(getViews(IDs[i]).then(views =>         {
          progress += 1;
          progressBox.innerHTML = "Retrieving Views... " + progress + "/" + IDs.length;
          return views;
        }));
    }
    return Promise.all(promises).then((res) => {
      progressBox.innerHTML = "Done!";
      return res;
    });

  }).then(outArr => {
    var sorted = [...outArr].sort((a, b) => b[1] - a[1]);
    console.log("Sorted:");
    console.log(sorted);
    addLB(sorted);
  });

}

function getPlaylist() {
  return fetch('https://industry-tunnel-server.codewc.repl.co/playlist').then(content => content.text()).then(data => {
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
  F = fetch('https://industry-tunnel-server.codewc.repl.co/views/' + videoID).then((content) => content.text()).then((data) => {
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
      console.log("Missing Person:")
      console.log(videoID);
      console.log(creatorID);
      console.log("---------------")
      //console.log(data);
    }
    let addedViews = specialViews.hasOwnProperty(vidName) ? specialViews[vidName] : 0;
    return [vidName, viewCount + addedViews, videoID, creatorID];
  });

  return F;
}

function rankCreators(lbArr) {
  creatorViews = {};
  for (P = 0; P < Object.keys(colorize).length; P++) {
    person = Object.keys(colorize)[P]
    personName = colorize[person][1];
    console.log(personName);
    console.log(specialViews[personName]);
    console.log("------------------------");
    creatorViews[person] = specialViews.hasOwnProperty(personName) ? specialViews[personName] : 0;
    for (i = 0; i < lbArr.length; i++) {
      PID = lbArr[i][3];
      if (PID == person) {
        creatorViews[person] += lbArr[i][1];
      }
    }
  }
  pieChart(creatorViews);
  output = document.getElementById("creatorLB");
  output.innerHTML = "";
  //output.innerHTML = JSON.stringify(creatorViews);
  console.log("SETTING HTML");
  creatorViews = Object.entries(creatorViews).sort((a, b) => b[1] - a[1]);
  console.log(creatorViews);
  for (i = 0; i < creatorViews.length; i++) {
    thisPerson = creatorViews[i];
    output.innerHTML += colorize[thisPerson[0]][1] + ": " + thisPerson[1] + "<br>";
  }
  //console.log(creatorViews);
}

function addLB(lbArr) {
  var LB = document.getElementById("LB");
  LB.innerHTML = "";
  //console.log(lbArr);
  for (i = 0; i < lbArr.length; i++) {
    var LBItem = document.createElement("li");
    //console.log(lbArr[i]);
    var color = colorize[lbArr[i][3]]
    if (typeof color == "undefined") {
      color = defaultColor;
    } else {
      color = color[0];
    }
    LBItem.value = lbArr[i][1];

    LBItem.innerHTML = `<a href="https://www.youtube.com/watch?v=${lbArr[i][2]}" target="_blank" class="highlight" style="border-color: ${color}">${lbArr[i][0]}</a>`;
    LB.appendChild(LBItem);
  }
  rankCreators(lbArr);
}


function pieChart(mainDict) {
  
  mainArr = Object.entries(mainDict);
  var dataList = [];
  console.log("Main Array:")
  console.log(mainArr);
  for (let i=0; i<mainArr.length; i++) {
    dataDict = {'x':colorize[mainArr[i][0]][1], 'y':mainArr[i][1]};
    dataList.push(dataDict);
  }

  var theData = dataList;
  console.log("The Data:")
  console.log(theData);
  var pie = new ej.charts.AccumulationChart({
    //Initializing Series
    series: [
        {
            dataSource: theData,
            dataLabel: {
                visible: true,
                position: 'Inside',
                font: { fontWeight: '600', color: 'white' }
            },
            xName: 'x',
            yName: 'y'
        }
    ],

    tooltip: { enable: true, header: 'IOR', format: '${point.x}:<b> ${point.y} streams<b>' },

    legendSettings: {
      visible: true,
    },
    background: '#251313',
    legendSettings:{
      height: '400', width:'200', textStyle: {color: 'white'}
    }

    });

  document.getElementById("container").innerHTML = "";
  pie.appendTo('#container');
}


function TEST() {
  addLB(testSorted);
}
