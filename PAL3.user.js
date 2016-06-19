// ==UserScript==
// @name        PAL3
// @namespace   zhangboyang.id@gmail.com
// @include     about:blank
// @resource    imgfile0 huaying.jpg
// @resource    imgfile1 xuejian1.jpg
// @resource    imgfile2 xuejian2.jpg
// @resource    imgfile3 jingtian1.jpg
// @resource    imgfile4 jingtian2.jpg
// @version     1
// @grant       GM_getResourceURL
// ==/UserScript==


function in_iframe()
{
    // http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


if (!in_iframe()) {
    var cnt = 6;
    var p = [
        1,
        1,
        2,
        4,
        1,
        3,
    ];
    var imgurl = [
        GM_getResourceURL("imgfile0"),
        GM_getResourceURL("imgfile0"),
        GM_getResourceURL("imgfile1"),
        GM_getResourceURL("imgfile2"),
        GM_getResourceURL("imgfile3"),
        GM_getResourceURL("imgfile4"),
    ];
    var imgstyle_base = "position: absolute;";
    var imgstyle = [
        "bottom: 40px; right: 40px; height: 60%; min-height: 320px",
        "bottom: 40px; right: 40px; height: 60%; min-height: 320px",
        "bottom: 40px; right: 40px; height: 60%; min-height: 320px",
        "bottom: 20px; right: 30px; height: 75%; min-height: 500px",
        "bottom: 40px; right: 40px; height: 60%; min-height: 320px",
        "bottom: 20px; right: 30px; height: 75%; min-height: 500px",
    ];
    var text = [
        "刻舟行远人归去\n笑靥无凭\n私语无踪\n魂断香销弃旧情\n\n玄冰刻悔风吟恨\n好梦成空\n泪眼迷蒙\n遥看春花朔雪中",
        "情眷恋\n古往今来相看\n几度流光人更远\n伤离方寸乱\n\n回梦空传幽怨\n依旧尘缘未断\n碧落黄泉寻觅遍\n愁来天不管",
        "花似伊\n柳似伊\n叶叶声声是别离\n雨急人更急\n\n湘江西\n楚江西\n万水千山远路迷\n相逢终有期\n",
        "花似伊\n柳似伊\n叶叶声声是别离\n雨急人更急\n\n湘江西\n楚江西\n万水千山远路迷\n相逢终有期\n",
        "星沉月落夜闻香\n素手出锋芒\n前缘再续新曲\n心有意\n爱无伤\n\n江湖远\n碧空长\n路茫茫\n闲愁滋味\n多感情怀\n无限思量",
        "星沉月落夜闻香\n素手出锋芒\n前缘再续新曲\n心有意\n爱无伤\n\n江湖远\n碧空长\n路茫茫\n闲愁滋味\n多感情怀\n无限思量",
    ];
    var textstyle_base = "position: absolute; white-space: pre-line; font-size: 30px; line-height: 40px; left: 80px; top: 80px;";
    var textstyle = [
        "font-family: '隶书'",
        "font-family: '隶书'",
        "font-family: '华文行楷'",
        "font-family: '华文行楷'",
        "font-family: '隶书'",
        "font-family: '隶书'",
    ];
    
    var ra = new Uint32Array(2);
    window.crypto.getRandomValues(ra);
    var r = (ra[0] + ra[1] * Math.pow(2, 32)) / Math.pow(2, 64);
    
    var s;
    var id;
    s = 0;
    for (id = 0; id < cnt; id++) s += p[id];
    for (id = 0; id < cnt; id++) p[id] /= s;
    s = 0;
    for (id = 0; id < cnt - 1; id++) {
        if (s <= r && r < s + p[id]) {
            break;
        }
        s += p[id];
    }
    document.body.insertAdjacentHTML("beforeend", 
        '<img src="' + imgurl[id] + '" style="' + imgstyle_base + imgstyle[id] + '"/>' +
        '<div style="' + textstyle_base + textstyle[id] + '">' + text[id] + '</div>'
    );
}
