/* --- browserの読み込み --- */
if (typeof browser === 'undefined') browser = chrome;


/* --- 各ID接頭語に対するURLを定義 --- */
const NICONICO_URLS = {
	sm : 'www.nicovideo.jp/watch/%id%',
	so : 'www.nicovideo.jp/watch/%id%',
	lv : 'live.nicovideo.jp/watch/%id%',
	nc : 'commons.nicovideo.jp/material/%id%',
	td : '3d.nicovideo.jp/works/%id%',
	co : 'com.nicovideo.jp/community/%id%',
	gm : 'game.nicovideo.jp/atsumaru/games/%id%',
	nq : 'q.nicovideo.jp/watch/%id%'
};