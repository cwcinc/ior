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
    var sorted = [...outArr].sort((a, b) => b[0] - a[0]);
    var mainList = [];
    for (let i = 0; i < sorted.length; i++) {
      mainList.push(sorted[i].join(":"));
    }
    document.getElementById("output").innerHTML = mainList.join("<br>");
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
      playlistIDs.push(ID);;
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
    name = data.slice(nameIndex + 9, nameEnd);
    
    return [viewCount, name];
  });
  
  return F;
}
