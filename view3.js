// img要素を取得する
var img = document.getElementById("image_place");
// 表示する画像番号
var idx = 3;

// 画像を切り替える関数
function changeImageFront() {
  idx++;
  if (idx > 9) {
    idx = 1;
  }
  // img要素のsrcに画像ファイル名を設定する
  img.src = "./情報化棟/J3/Front/" + "3FRONT" + idx + ".jpg";
}

function changeImageBack(){
  if(idx == 1){
    img.src = "./情報化棟/J3/Front/" + "2FRONT" + idx + ".jpg"
  }
  else{
    idx--;
    img.src = "./情報化棟/J3/Front/" + "3FRONT" + idx + ".jpg"
  }
}

function changeImageRight(){
    img.src = "./情報化棟/J3/Right/" + "3FRONT_RIGHT" + idx + ".jpg"
}

function changeImageLeft(){
    img.src = "./情報化棟/J3/Left/" + "3FRONT_LEFT" + idx + ".jpg"
}

function search(){
}