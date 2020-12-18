    // img要素を取得する
    var img = document.getElementById("image_place");

    // 表示する画像番号
    var idx = 0;

    // 画像を切り替える関数
    function changeImageFront() {
      idx++;
      if (idx > 10) {
        idx = 1;
      }
      // img要素のsrcに画像ファイル名を設定する
      img.src = "./情報化棟/J1/Front/" + "1FRONT" + idx + ".jpg";
    }

    function changeImageBack(){
      if(idx == 1){
        img.src = "./情報化棟/J1/Front/" + "1FRONT" + idx + ".jpg"
      }
      else{
        idx--;
        img.src = "./情報化棟/J1/Front/" + "1FRONT" + idx + ".jpg"
      }
    }

    function changeImageRight(){
        img.src = "./情報化棟/J1/Right/" + "1FRONT_RIGHT" + idx + ".jpg"
    }

    function changeImageLeft(){
      img.src = "./情報化棟/J1/Left/" + "1FRONT_LEFT" + idx + ".jpg"
    }

    function search(){
    }