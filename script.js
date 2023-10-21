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
      mainList.push([`${sorted[i][0]}  --  ${sorted[i][1]} views`, sorted[i][2]]);
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
    
    return [vidName, viewCount, videoID];
  });
  
  return F;
}

function addLB(lbArr) {
  var LB = document.getElementById("LB");
  
  for (i = 0; i < lbArr.length; i++) {
    var LBItem = document.createElement("li");
    LBItem.innerHTML = `<a href="https://www.youtube.com/watch?v=${lbArr[i][1]}" target="_blank">${lbArr[i][0]}</a>`;
    LB.appendChild(LBItem);
  }
}
